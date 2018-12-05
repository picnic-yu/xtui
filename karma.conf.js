// module.exports = function(config){
//   config.set({
//       //基础路径：表示karma从哪个位置开始找文件
//       basePath:'',
//       //框架 jasmine mocha都可以
//       framework:['mocha','sinon-chai'],
//       client:{
//         chai:{
//           includeStack:true,
//         }
//       },
//       //测试的入口文件
//       files:[
//         'dist/**/*.test.js',
//         'dist/**/*.test.css'
//       ],

//       //排除文件，可以是正则
//       exclude:[],

//       //对指定文件的预处理
//       preprocessors:{
          
//       },
//       browsers:['Chrome'],
//       //结果报表
//       reporters:['progress'],

//       //colors 报表中是否有颜色区分
//       colors:true,

//       //port 服务器端口
//       port:9876,

//       // 输出的日志级别
//       // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
//          logLevel: config.LOG_INFO,

//       // 文件变化是否自动刷新
//          autoWatch: true,

//       //是否依附浏览器运行
//       singleRun:false,

//       //并发数，同时支持多少个浏览器运行
//       concurrency:Infinity,

//       //webpack配置
//       // webpack:webpackConfig,

//       //代码覆盖率配置节点
//       // coverageReporter:{
//       //     dir:'./coverage',
//       //     reporters:[
//       //         {type:'lcov',subdir:'.'},
//       //         {type:'text-summary'}
//       //     ]
//       // }


//   })
// }


// Karma configuration
// Generated on Sun Oct 29 2017 21:45:27 GMT+0800 (CST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha','sinon-chai'],


    // list of files / patterns to load in the browser
    files: [
      'dist/**/*.test.js',
      'dist/**/*.test.css'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}

