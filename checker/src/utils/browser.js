/**
 * @api  getParameterByName(name)  获取url参数
 * @apiName getParameterByName
 * @apiGroup utils
 * @apiVersion 0.0.1
 * @apiParam {String} name 参数名(Required)
 * @apiParam {String} [url] url 默认当前页面url
 * @apiSuccess {String} string 返回参数值
 */
export const getParameterByName = (name, url = window.location.search) => {
  let match = RegExp("[?&]" + name + "=([^&]*)").exec(url);
  return match && decodeURIComponent(match[1].replace(/\+/g, " "));
};
