// vue inspect 查看配置信息
const alias = require("./alias");
module.exports = {
  configureWebpack: {
    resolve: alias.resolve
  },
  productionSourceMap: false,
  assetsDir: "static",
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  devServer: {
    proxy: {
      "/api": {
        target:
          "http://visiting-registration-api-nginx-10-10-6-136.okd.iqianjin.test/"
      },
      "/mockApi": {
        target: "http://10.10.178.49:3008/mock/api/huangshuaihui/17/",
        secure: false, // 若接口地址为https需要设为true
        changeOrigin: true,
        logLevel: "debug",
        cookieDomainRewrite: "localhost",
        preserveHeaderKeyCase: true,
        pathRewrite: {
          "^/mockApi": "/"
        }
      }
    }
  }
};
