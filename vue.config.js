module.exports = {
  publicPath: './',
  productionSourceMap: true,
  devServer:{
    // 这里填IP地址
    host: "localhost",
    port: 8080,
    open: true, //浏览器自动打开页面
    proxy: {
        //第一个代理，这里的/api1和/api2就对应了第一步的 baseURL
      "/api2": {
        target: "http://127.0.0.1:3000",//只要是以/api2开头的链接都会被代理到 这个target属性所代表的位置
        ws: false,
        changeOrigin: true,
        cookieDomainRewrite: {
          "*": ""
        },
        cookiePathRewrite: {
          "*": ""
        },
        pathRewrite: {
          "^/api2": ""  //这里是将/api2替换为空字符串“” ，也就是删除的意思
        }
      },
        //第二个代理
      "/api1/": {
        target: "http://www.888.com",
        ws: false,
        changeOrigin: true,
        cookieDomainRewrite: {
          "*": ""
        },
        cookiePathRewrite: {
          "*": ""
        },
        pathRewrite: {
          "^/api1": ""
        }
      }
    }
  }
}