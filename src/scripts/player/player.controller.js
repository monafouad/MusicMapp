var PlayerController = function ($rootScope, $scope, $http, Settings, ngAudio) {
  this.$scope = $scope;
  this.$rootScope = $rootScope;
  this.$http = $http;
  this.Settings = Settings;
  this.ngAudio = ngAudio;

  // All loaded tracks
  $rootScope.tracks = [];

  // Current track index
  $rootScope.index = 0;

  // Previous track as object
  $scope.previousTrack = function () {
    return $rootScope.tracks[$rootScope.index - 1];
  };

  // Current track as object
  $scope.currentTrack = function () {
    return $rootScope.tracks[$rootScope.index];
  };

  // Next track as object
  $scope.nextTrack = function () {
    return $rootScope.tracks[$rootScope.index + 1];
  };

  $rootScope.playing = false;
  $rootScope.player = null;

  /**
   * Start/stop player.
   */
  $scope.playPause = function () {
    if ($rootScope.playing) {
      $rootScope.player.pause();
      $rootScope.playing = false;
    } else {
      $rootScope.player.play();
      $rootScope.playing = true;
    }
  };

  /**
   * Go to next track.
   */
  $scope.next = function () {
    // Nothing to play
    if (typeof $rootScope.tracks[$rootScope.index + 1] === 'undefined') {
      return;
    }

    $rootScope.index ++;
    $scope.updateTrack();
  };

  /**
   * Go to previous track.
   */
  $scope.previous = function () {
    // Nothing to play
    if (typeof $rootScope.tracks[$rootScope.index - 1] === 'undefined') {
      return;
    }

    $rootScope.index --;
    $scope.updateTrack();
  };

  /**
   * Go to previous track.
   */
  $rootScope.playTrackAtIndex = function (index) {
    $rootScope.index = index;
    $rootScope.playing = true

    $scope.updateTrack();
  };

  /**
   * Update previous/next track and resume if it was playing.
   */
  $scope.updateTrack = function () {
    $rootScope.player.pause();
    $rootScope.player = ngAudio.load($scope.currentTrack().file);

    if ($rootScope.playing === true) {
      $rootScope.player.play();
    }
  };

  /**
   * Start playing the playlist when a track is clicked.
   */
  $rootScope.playlistLoaded = false;
  $rootScope.startPlaylist = function (playlist, index) {
    // First track played, load list in to player
    $rootScope.tracks = playlist;
    $rootScope.playlistLoaded = true;

    // Set track cursor
    $rootScope.index = index;

    // Start player on track click
    $rootScope.playTrackAtIndex(index);
  };

  /**
   * Render class for play/pause of a track from current playlist.
   */
  $rootScope.trackPlayingClass = function (index) {
    if ($rootScope.playlistLoaded && $rootScope.index === index && $rootScope.playing) {
      return 'fa-pause';
    }

    return 'fa-play';
  };
};

PlayerController.prototype = {
  /**
   * Initialize.
   */
  init: function () {
    // Get homepage playlist
    this.getPlaylist();
  },

  /**
   * Get playlist for homepage.
   */
  getPlaylist: function () {
    var that = this;

    this.$http({
      url: this.Settings.backendHost + '/playlist.php',
      method: 'GET'
    }).then(function (response) {
      that.$rootScope.tracks = response.data.tracks;
      that.$rootScope.player = that.ngAudio.load(that.$scope.currentTrack().file);
    }, function (error) {
      console.log('error', error);
    });
  }
};

PlayerController.$inject = ['$rootScope', '$scope', '$http', 'Settings', 'ngAudio'];

export default PlayerController;
