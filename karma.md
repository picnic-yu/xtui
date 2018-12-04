# install
> yarn add karma karma-chrome-launcher karma-mocha karma-sinon-chai mocha sinon sinon-chai karma-chai karma-chai-spies -D

## create karma config

```
//karma.conf.js
var webpackConfig = require('@vue/cli-service/webpack.config.js')
const path = require('path')

module.exports = function (config) {
  config.set({
    frameworks: ['mocha'],

    files: [
      'tests/**/*.spec.js'
    ],

    preprocessors: {
      '**/*.spec.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    reporters: ['spec', 'coverage'],
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    },
    autoWatch: true,

    browsers: ['ChromeHeadless']
  })
}

```