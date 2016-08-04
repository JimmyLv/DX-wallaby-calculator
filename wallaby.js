// import wallabyWebpack from 'wallaby-webpack'
var wallabyWebpack = require('wallaby-webpack');

module.exports = (wallaby) => {

  var webpackPostprocessor = wallabyWebpack({
    // webpack options

    externals: {
      // Use external version of React instead of rebuilding it
      // "react": "React"
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    }
  });

  return {
    files: [
      { pattern: 'lib/jquery.js', instrument: false },
      'assets/**',
      { pattern: 'src/**', load: false },
      { pattern: 'test/helper/template.js', load: false }
    ],

    tests: [
      { pattern: 'test/**/*Spec.js', load: false }
    ],

    compilers: {
      '**/*.js*': wallaby.compilers.babel()
    },

    postprocessor: webpackPostprocessor,

    bootstrap: function () {
      window.__moduleBundler.loadTests();
    },

    delays: {
      run: 700 // 0.7s
    },

    lowCoverageThreshold: 80, // 80%

    testFramework: 'jasmine', // default

    // debug: true
  };
};
