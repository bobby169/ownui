/**
 * @api writeCookie(name,value,hours,path) 写入cookie
 * @apiName  writeCookie
 * @apiGroup utils
 * @apiVersion 0.0.1
 * @apiParam {String} name 名称(Required)
 * @apiParam {String} value 值(Required)
 * @apiParam {Number} hours 有效期（小时）
 * @apiParam {String} path 路径
 */
const writeCookie = (name, value, hours, path) => {
  let expire = "";
  if (hours !== null) {
    expire = new Date(new Date().getTime() + hours * 3600000);
    expire = "; expires=" + expire.toGMTString();
  }
  path = path ? "; path=" + path : "";
  document.cookie = name + "=" + escape(value) + expire + path;
};

/**
 * @api readCookie(name) 读取cookie
 * @apiName readCookie
 * @apiGroup utils
 * @apiVersion 0.0.1
 * @apiParam {String} name 名称(required)
 * @apiSuccess {String} string 值
 */
const readCookie = name => {
  let cookieValue = "";
  let search = name + "=";
  if (document.cookie.length > 0) {
    let offset = document.cookie.indexOf(search);
    if (offset != -1) {
      offset += search.length;
      let end = document.cookie.indexOf(";", offset);
      if (end == -1) end = document.cookie.length;
      cookieValue = decodeURIComponent(document.cookie.substring(offset, end));
    }
  }
  return cookieValue;
};

/**
 * @api removeCookie(name) 删除cookie
 * @apiName removeCookie
 * @apiGroup utils
 * @apiVersion 0.0.1
 * @apiParam {String} name 名称(required)
 * @apiParam {String} path
 */
const removeCookie = (name, path) => {
  let date = new Date();
  date.setDate(date.getDate() - 1);
  document.cookie = `${name}=-1; ${
    path ? `path=${path};` : ""
  } expires=${date}`;
};

export { writeCookie, readCookie, removeCookie };
