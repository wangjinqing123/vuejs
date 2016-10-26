var webpack = require("webpack");
var path = require("path");
var et = require("extract-text-webpack-plugin");

module.exports = {
  //入口配置
  entry: {
    bundle: __dirname + '/src/scripts/app.js'
    // css: __dirname + '/src/styles/app.scss'
  },
  //出口配置
  output: {
    path: path.join(__dirname,'/prd'),
    filename: "[name].js"
  },
  devtool:'source-map',
  //启动 webserver
  devServer:{
    contentBase:__dirname+'/prd',
    port:8090, //webpack 启动的服务
    inline:true,
    proxy:{
      //代理:ajax获取数据。josn-server启的服务
      '/daili/*':{
        target:'http://localhost:3004',
        secure:false,//一般不开启
        pathRewrite:{
          '^/daili':''
        }
      }
    }
  },
  //模块配置
  module:{
    loaders:[
      {
        test:/\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss/,
        loader: et.extract('style', 'css!sass')
        // loader:'style!css!sass'
      },
      {
        test:/\.js$/, //
        loader:'babel',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=10000'
      },
      {
        test:/\.string$/,
        loader:"string"
      },
      {
        test:/\.html$/,
        loader:'html-loader'
      },
      {
        test:/\.vue$/,
        loader:"vue"
      }
    ]
  },
  vue:{
    loaders:{
      js:"babel"
    }
  },
  watch:true,
  //plugins定义
  plugins: [
    // new webpack.optimize.UglifyJsPlugin(),
    new et('bundle.css')
  ]

}





// 1. webpack 是以 commonJS 的形式来书写脚本滴，但对 AMD/CMD 的支持也很全面，方便旧项目进行代码迁移。
// 2. 能被模块化的不仅仅是 JS 了。
// 3. 开发便捷，能替代部分 grunt/gulp 的工作，比如打包、压缩混淆、图片转base64等。
// 4. 扩展性强，插件机制完善，特别是支持 React 热插拔（见 react-hot-loader ）的功能让人眼前一亮。
