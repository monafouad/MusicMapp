var coreConfig = function ($httpProvider) {
  $httpProvider.interceptors.push(['$q', '$rootScope', function ($q) {
    return {
      responseError: function (rejection) {
        if (rejection.status === 401) {
          console.log('401');
        }

        if (rejection.status === 403) {
          console.log('403');
        }

        return $q.reject(rejection);
      }
    };
  }]);
};

coreConfig.$inject = ['$httpProvider'];

export default coreConfig;
