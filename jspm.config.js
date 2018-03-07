SystemJS.config({
  devConfig: {
    'map': {
      'angular-mocks': 'npm:angular-mocks@1.6.9',
      'plugin-babel': 'npm:systemjs-plugin-babel@0.0.21'
    }
  },
  packages: {
    'src': {
      'defaultExtension': 'js'
    },
    'npm:ng-toast@2.0.0': {
      'map': {
        'angular': 'npm:angular@1.5.11',
        'angular-sanitize': 'npm:angular-sanitize@1.5.11'
      }
    }
  },
  transpiler: 'plugin-babel',
  map: {
    'ng-toast': 'npm:ng-toast@2.0.0',
    'angular-slider': 'github:angular-slider/angularjs-slider@6.4.4',
    'angular-soundmanager2': 'github:perminder-klair/angular-soundmanager2@0.5.6',
    'angular-audio': 'github:danielstern/ngAudio@1.7.4'
  }
});

SystemJS.config({
  packageConfigPaths: [
    'npm:@*/*.json',
    'npm:*.json',
    'github:*/*.json'
  ],
  map: {
    'angular-google-chart': 'github:angular-google-chart/angular-google-chart@master',
    'angular': 'npm:angular@1.6.9',
    'angular-cookies': 'npm:angular-cookies@1.6.9',
    'angular-local-storage': 'npm:angular-local-storage@0.5.2',
    'angular-resource': 'npm:angular-resource@1.6.9',
    'angular-ui-router': 'npm:angular-ui-router@1.0.0-beta.3',
    'assert': 'github:jspm/nodelibs-assert@0.2.0-alpha',
    'babel': 'npm:babel-core@6.26.0',
    'buffer': 'github:jspm/nodelibs-buffer@0.2.0-alpha',
    'child_process': 'github:jspm/nodelibs-child_process@0.2.0-alpha',
    'constants': 'github:jspm/nodelibs-constants@0.2.0-alpha',
    'crypto': 'github:jspm/nodelibs-crypto@0.2.0-alpha',
    'events': 'github:jspm/nodelibs-events@0.2.2',
    'fs': 'github:jspm/nodelibs-fs@0.2.0-alpha',
    'module': 'github:jspm/nodelibs-module@0.2.0-alpha',
    'os': 'github:jspm/nodelibs-os@0.2.2',
    'path': 'github:jspm/nodelibs-path@0.2.3',
    'process': 'github:jspm/nodelibs-process@0.2.0-alpha',
    'stream': 'github:jspm/nodelibs-stream@0.2.0-alpha',
    'string_decoder': 'github:jspm/nodelibs-string_decoder@0.2.2',
    'util': 'github:jspm/nodelibs-util@0.2.0-alpha',
    'vm': 'github:jspm/nodelibs-vm@0.2.0-alpha'
  },
  packages: {
    'npm:babel-helpers@6.24.1': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.26.0',
        'babel-template': 'npm:babel-template@6.26.0'
      }
    },
    'npm:babel-messages@6.23.0': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.26.0'
      }
    },
    'npm:minimatch@3.0.4': {
      'map': {
        'brace-expansion': 'npm:brace-expansion@1.1.8'
      }
    },
    'npm:chalk@1.1.3': {
      'map': {
        'escape-string-regexp': 'npm:escape-string-regexp@1.0.5',
        'strip-ansi': 'npm:strip-ansi@3.0.1',
        'supports-color': 'npm:supports-color@2.0.0',
        'has-ansi': 'npm:has-ansi@2.0.0',
        'ansi-styles': 'npm:ansi-styles@2.2.1'
      }
    },
    'npm:invariant@2.2.2': {
      'map': {
        'loose-envify': 'npm:loose-envify@1.3.1'
      }
    },
    'npm:mkdirp@0.5.1': {
      'map': {
        'minimist': 'npm:minimist@0.0.8'
      }
    },
    'npm:detect-indent@4.0.0': {
      'map': {
        'repeating': 'npm:repeating@2.0.1'
      }
    },
    'npm:home-or-tmp@2.0.0': {
      'map': {
        'os-homedir': 'npm:os-homedir@1.0.2',
        'os-tmpdir': 'npm:os-tmpdir@1.0.2'
      }
    },
    'npm:loose-envify@1.3.1': {
      'map': {
        'js-tokens': 'npm:js-tokens@3.0.2'
      }
    },
    'github:jspm/nodelibs-buffer@0.2.0-alpha': {
      'map': {
        'buffer-browserify': 'npm:buffer@4.9.1'
      }
    },
    'npm:strip-ansi@3.0.1': {
      'map': {
        'ansi-regex': 'npm:ansi-regex@2.1.1'
      }
    },
    'npm:has-ansi@2.0.0': {
      'map': {
        'ansi-regex': 'npm:ansi-regex@2.1.1'
      }
    },
    'npm:repeating@2.0.1': {
      'map': {
        'is-finite': 'npm:is-finite@1.0.2'
      }
    },
    'npm:buffer@4.9.1': {
      'map': {
        'isarray': 'npm:isarray@1.0.0',
        'ieee754': 'npm:ieee754@1.1.8',
        'base64-js': 'npm:base64-js@1.2.1'
      }
    },
    'npm:is-finite@1.0.2': {
      'map': {
        'number-is-nan': 'npm:number-is-nan@1.0.1'
      }
    },
    'github:jspm/nodelibs-stream@0.2.0-alpha': {
      'map': {
        'stream-browserify': 'npm:stream-browserify@2.0.1'
      }
    },
    'npm:stream-browserify@2.0.1': {
      'map': {
        'readable-stream': 'npm:readable-stream@2.3.3',
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'github:jspm/nodelibs-crypto@0.2.0-alpha': {
      'map': {
        'crypto-browserify': 'npm:crypto-browserify@3.12.0'
      }
    },
    'npm:public-encrypt@4.0.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.3',
        'randombytes': 'npm:randombytes@2.0.6',
        'parse-asn1': 'npm:parse-asn1@5.1.0',
        'bn.js': 'npm:bn.js@4.11.8',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1'
      }
    },
    'npm:diffie-hellman@5.0.2': {
      'map': {
        'randombytes': 'npm:randombytes@2.0.6',
        'bn.js': 'npm:bn.js@4.11.8',
        'miller-rabin': 'npm:miller-rabin@4.0.1'
      }
    },
    'npm:browserify-sign@4.0.4': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.3',
        'create-hmac': 'npm:create-hmac@1.1.6',
        'inherits': 'npm:inherits@2.0.3',
        'parse-asn1': 'npm:parse-asn1@5.1.0',
        'bn.js': 'npm:bn.js@4.11.8',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1',
        'elliptic': 'npm:elliptic@6.4.0'
      }
    },
    'npm:create-ecdh@4.0.0': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.8',
        'elliptic': 'npm:elliptic@6.4.0'
      }
    },
    'npm:browserify-cipher@1.0.0': {
      'map': {
        'browserify-des': 'npm:browserify-des@1.0.0',
        'browserify-aes': 'npm:browserify-aes@1.1.1',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.3'
      }
    },
    'npm:parse-asn1@5.1.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.3',
        'pbkdf2': 'npm:pbkdf2@3.0.14',
        'browserify-aes': 'npm:browserify-aes@1.1.1',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.3',
        'asn1.js': 'npm:asn1.js@4.9.2'
      }
    },
    'npm:browserify-rsa@4.0.1': {
      'map': {
        'randombytes': 'npm:randombytes@2.0.6',
        'bn.js': 'npm:bn.js@4.11.8'
      }
    },
    'npm:browserify-des@1.0.0': {
      'map': {
        'cipher-base': 'npm:cipher-base@1.0.4',
        'inherits': 'npm:inherits@2.0.3',
        'des.js': 'npm:des.js@1.0.0'
      }
    },
    'npm:elliptic@6.4.0': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.8',
        'inherits': 'npm:inherits@2.0.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0',
        'brorand': 'npm:brorand@1.1.0',
        'minimalistic-crypto-utils': 'npm:minimalistic-crypto-utils@1.0.1',
        'hash.js': 'npm:hash.js@1.1.3',
        'hmac-drbg': 'npm:hmac-drbg@1.0.1'
      }
    },
    'npm:des.js@1.0.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'npm:hmac-drbg@1.0.1': {
      'map': {
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0',
        'hash.js': 'npm:hash.js@1.1.3',
        'minimalistic-crypto-utils': 'npm:minimalistic-crypto-utils@1.0.1'
      }
    },
    'npm:babel-core@6.26.0': {
      'map': {
        'babel-generator': 'npm:babel-generator@6.26.1',
        'babel-code-frame': 'npm:babel-code-frame@6.26.0',
        'babylon': 'npm:babylon@6.18.0',
        'debug': 'npm:debug@2.6.9',
        'babel-messages': 'npm:babel-messages@6.23.0',
        'babel-register': 'npm:babel-register@6.26.0',
        'lodash': 'npm:lodash@4.17.4',
        'babel-helpers': 'npm:babel-helpers@6.24.1',
        'babel-runtime': 'npm:babel-runtime@6.26.0',
        'babel-traverse': 'npm:babel-traverse@6.26.0',
        'babel-template': 'npm:babel-template@6.26.0',
        'convert-source-map': 'npm:convert-source-map@1.5.1',
        'babel-types': 'npm:babel-types@6.26.0',
        'path-is-absolute': 'npm:path-is-absolute@1.0.1',
        'private': 'npm:private@0.1.8',
        'minimatch': 'npm:minimatch@3.0.4',
        'slash': 'npm:slash@1.0.0',
        'source-map': 'npm:source-map@0.5.7',
        'json5': 'npm:json5@0.5.1'
      }
    },
    'npm:babel-generator@6.26.1': {
      'map': {
        'babel-messages': 'npm:babel-messages@6.23.0',
        'lodash': 'npm:lodash@4.17.4',
        'babel-runtime': 'npm:babel-runtime@6.26.0',
        'babel-types': 'npm:babel-types@6.26.0',
        'source-map': 'npm:source-map@0.5.7',
        'trim-right': 'npm:trim-right@1.0.1',
        'jsesc': 'npm:jsesc@1.3.0',
        'detect-indent': 'npm:detect-indent@4.0.0'
      }
    },
    'npm:babel-register@6.26.0': {
      'map': {
        'lodash': 'npm:lodash@4.17.4',
        'babel-core': 'npm:babel-core@6.26.0',
        'babel-runtime': 'npm:babel-runtime@6.26.0',
        'source-map-support': 'npm:source-map-support@0.4.18',
        'core-js': 'npm:core-js@2.5.3',
        'mkdirp': 'npm:mkdirp@0.5.1',
        'home-or-tmp': 'npm:home-or-tmp@2.0.0'
      }
    },
    'npm:babel-traverse@6.26.0': {
      'map': {
        'babel-messages': 'npm:babel-messages@6.23.0',
        'lodash': 'npm:lodash@4.17.4',
        'babel-code-frame': 'npm:babel-code-frame@6.26.0',
        'babel-runtime': 'npm:babel-runtime@6.26.0',
        'babel-types': 'npm:babel-types@6.26.0',
        'babylon': 'npm:babylon@6.18.0',
        'debug': 'npm:debug@2.6.9',
        'invariant': 'npm:invariant@2.2.2',
        'globals': 'npm:globals@9.18.0'
      }
    },
    'npm:babel-template@6.26.0': {
      'map': {
        'lodash': 'npm:lodash@4.17.4',
        'babel-runtime': 'npm:babel-runtime@6.26.0',
        'babel-traverse': 'npm:babel-traverse@6.26.0',
        'babel-types': 'npm:babel-types@6.26.0',
        'babylon': 'npm:babylon@6.18.0'
      }
    },
    'npm:babel-types@6.26.0': {
      'map': {
        'lodash': 'npm:lodash@4.17.4',
        'babel-runtime': 'npm:babel-runtime@6.26.0',
        'esutils': 'npm:esutils@2.0.2',
        'to-fast-properties': 'npm:to-fast-properties@1.0.3'
      }
    },
    'npm:debug@2.6.9': {
      'map': {
        'ms': 'npm:ms@2.0.0'
      }
    },
    'npm:babel-code-frame@6.26.0': {
      'map': {
        'js-tokens': 'npm:js-tokens@3.0.2',
        'chalk': 'npm:chalk@1.1.3',
        'esutils': 'npm:esutils@2.0.2'
      }
    },
    'npm:babel-runtime@6.26.0': {
      'map': {
        'regenerator-runtime': 'npm:regenerator-runtime@0.11.1',
        'core-js': 'npm:core-js@2.5.3'
      }
    },
    'npm:source-map-support@0.4.18': {
      'map': {
        'source-map': 'npm:source-map@0.5.7'
      }
    },
    'npm:brace-expansion@1.1.8': {
      'map': {
        'balanced-match': 'npm:balanced-match@1.0.0',
        'concat-map': 'npm:concat-map@0.0.1'
      }
    },
    'npm:readable-stream@2.3.3': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'process-nextick-args': 'npm:process-nextick-args@1.0.7',
        'string_decoder': 'npm:string_decoder@1.0.3',
        'isarray': 'npm:isarray@1.0.0',
        'core-util-is': 'npm:core-util-is@1.0.2',
        'util-deprecate': 'npm:util-deprecate@1.0.2',
        'safe-buffer': 'npm:safe-buffer@5.1.1'
      }
    },
    'npm:string_decoder@1.0.3': {
      'map': {
        'safe-buffer': 'npm:safe-buffer@5.1.1'
      }
    },
    'npm:crypto-browserify@3.12.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'diffie-hellman': 'npm:diffie-hellman@5.0.2',
        'randombytes': 'npm:randombytes@2.0.6',
        'create-hash': 'npm:create-hash@1.1.3',
        'browserify-cipher': 'npm:browserify-cipher@1.0.0',
        'create-hmac': 'npm:create-hmac@1.1.6',
        'create-ecdh': 'npm:create-ecdh@4.0.0',
        'pbkdf2': 'npm:pbkdf2@3.0.14',
        'browserify-sign': 'npm:browserify-sign@4.0.4',
        'public-encrypt': 'npm:public-encrypt@4.0.0',
        'randomfill': 'npm:randomfill@1.0.3'
      }
    },
    'npm:randombytes@2.0.6': {
      'map': {
        'safe-buffer': 'npm:safe-buffer@5.1.1'
      }
    },
    'npm:create-hmac@1.1.6': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'safe-buffer': 'npm:safe-buffer@5.1.1',
        'create-hash': 'npm:create-hash@1.1.3',
        'ripemd160': 'npm:ripemd160@2.0.1',
        'cipher-base': 'npm:cipher-base@1.0.4',
        'sha.js': 'npm:sha.js@2.4.10'
      }
    },
    'npm:create-hash@1.1.3': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'ripemd160': 'npm:ripemd160@2.0.1',
        'cipher-base': 'npm:cipher-base@1.0.4',
        'sha.js': 'npm:sha.js@2.4.10'
      }
    },
    'npm:randomfill@1.0.3': {
      'map': {
        'safe-buffer': 'npm:safe-buffer@5.1.1',
        'randombytes': 'npm:randombytes@2.0.6'
      }
    },
    'npm:pbkdf2@3.0.14': {
      'map': {
        'safe-buffer': 'npm:safe-buffer@5.1.1',
        'create-hmac': 'npm:create-hmac@1.1.6',
        'create-hash': 'npm:create-hash@1.1.3',
        'ripemd160': 'npm:ripemd160@2.0.1',
        'sha.js': 'npm:sha.js@2.4.10'
      }
    },
    'npm:ripemd160@2.0.1': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'hash-base': 'npm:hash-base@2.0.2'
      }
    },
    'npm:cipher-base@1.0.4': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'safe-buffer': 'npm:safe-buffer@5.1.1'
      }
    },
    'npm:sha.js@2.4.10': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'safe-buffer': 'npm:safe-buffer@5.1.1'
      }
    },
    'npm:miller-rabin@4.0.1': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.8',
        'brorand': 'npm:brorand@1.1.0'
      }
    },
    'npm:browserify-aes@1.1.1': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'safe-buffer': 'npm:safe-buffer@5.1.1',
        'cipher-base': 'npm:cipher-base@1.0.4',
        'create-hash': 'npm:create-hash@1.1.3',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.3',
        'buffer-xor': 'npm:buffer-xor@1.0.3'
      }
    },
    'npm:evp_bytestokey@1.0.3': {
      'map': {
        'safe-buffer': 'npm:safe-buffer@5.1.1',
        'md5.js': 'npm:md5.js@1.3.4'
      }
    },
    'npm:hash-base@2.0.2': {
      'map': {
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:md5.js@1.3.4': {
      'map': {
        'hash-base': 'npm:hash-base@3.0.4',
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:hash-base@3.0.4': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'safe-buffer': 'npm:safe-buffer@5.1.1'
      }
    },
    'npm:hash.js@1.1.3': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'npm:asn1.js@4.9.2': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0',
        'bn.js': 'npm:bn.js@4.11.8'
      }
    }
  }
});
