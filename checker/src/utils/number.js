/**
 * @api  isString() 判断是否string
 * @apiName  isString
 * @apiGroup string
 * @apiVersion 0.0.1
 * @apiParam {String} t 字符串
 * @apiSuccess {Boolean} result true||false
 */
export const isString = t => typeof t === "string";
/**
 * @api fixedFloat2(floatNumber) 保留两位小数
 * @apiName  fixedFloat2
 * @apiGroup number
 * @apiVersion 0.0.1
 * @apiParam {Number} floatNumber 数值(Required)
 * @apiSuccess {Number} number 处理后的数值
 */
export const fixedFloat2 = floatNumber => {
  if (isString(floatNumber)) {
    floatNumber = parseFloat(floatNumber, 10);
  }
  return parseFloat(Math.round(floatNumber * 100) / 100, 10).toFixed(2);
};

/**
 * @api commaInteger(number) 千分符保留整数
 * @apiName  commaInteger
 * @apiGroup number
 * @apiVersion 0.0.1
 * @apiParam {Number} number 数值(Required)
 * @apiSuccess{Number} number 处理后的数值
 */
export const commaInteger = number => {
  number = parseInt(number, 10);
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

/**
 * @api commaFloat(number) 千分符保留小数
 * @apiName  commaFloat
 * @apiGroup number
 * @apiVersion 0.0.1
 * @apiParam {Number} number 数值(Required)
 * @apiSuccess {Number} number 处理后的数值
 */
export const commaFloat = number => {
  return fixedFloat2(number).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
