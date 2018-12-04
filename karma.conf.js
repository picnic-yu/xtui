module.exports = function(config){
  config.set({
      //基础路径：表示karma从哪个位置开始找文件
      basePath:'',
      //框架 jasmine mocha都可以
      framework:['mocha','sinon-chai'],
      client:{
        chai:{
          includeStack:true,
        }
      },
      //测试的入口文件
      files:[
        'dist/**/*.test.js',
        'dist/**/*.test.css'
      ],

      //排除文件，可以是正则
      exclude:[],

      //对指定文件的预处理
      preprocessors:{
          
      },
      browsers:['Chrome'],
      //结果报表
      reporters:['progress'],

      //colors 报表中是否有颜色区分
      colors:true,

      //port 服务器端口
      port:9876,

      // 输出的日志级别
      // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
         logLevel: config.LOG_INFO,

      // 文件变化是否自动刷新
         autoWatch: true,

      //是否依附浏览器运行
      singleRun:false,

      //并发数，同时支持多少个浏览器运行
      concurrency:Infinity,

      //webpack配置
      // webpack:webpackConfig,

      //代码覆盖率配置节点
      // coverageReporter:{
      //     dir:'./coverage',
      //     reporters:[
      //         {type:'lcov',subdir:'.'},
      //         {type:'text-summary'}
      //     ]
      // }


  })
}