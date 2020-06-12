// eslint-disable-next-line no-unused-vars
import Vue from "vue";
import axios from "axios";
import qs from "qs";
import { VueAxios } from "./vueAxios";

// 创建 axios 实例
const service = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL, // api base_url
  timeout: 6000 // 请求超时时间
});

service.postQS = option => {
  Object.assign(option, {
    data: qs.stringify(option.data),
    "Content-Type": "application/x-www-form-urlencoded"
  });
  return service(option);
};

const installer = {
  vm: {},
  install(Vue) {
    Vue.use(VueAxios, service);
  }
};

export { installer as VueAxios, service as axios };
