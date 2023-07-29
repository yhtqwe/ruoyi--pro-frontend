(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.datePickerOptions = exports.SystemUserSocialTypeEnum = exports.SystemRoleTypeEnum = exports.SystemMenuTypeEnum = exports.SystemDataScopeEnum = exports.PromotionProductScopeEnum = exports.PromotionDiscountTypeEnum = exports.PromotionConditionTypeEnum = exports.PromotionActivityStatusEnum = exports.ProductSpuStatusEnum = exports.PayRefundStatusEnum = exports.PayOrderStatusEnum = exports.PayDisplayModeEnum = exports.PayChannelEnum = exports.InfraJobStatusEnum = exports.InfraCodegenTemplateTypeEnum = exports.InfraApiErrorLogProcessStatusEnum = exports.CouponTemplateValidityTypeEnum = exports.CommonStatusEnum = void 0;\nvar _dateUtils = __webpack_require__(/*! @/utils/dateUtils */ \"./src/utils/dateUtils.js\");\n/**\n * Created by 芋道源码\n *\n * 枚举类\n */\n\nvar datePickerOptions = {\n  shortcuts: [{\n    text: '最近一周',\n    onClick: function onClick(picker) {\n      var start = new Date();\n      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);\n      var end = new Date();\n      picker.$emit('pick', [(0, _dateUtils.beginOfDay)(start), (0, _dateUtils.endOfDay)(end)]);\n    }\n  }, {\n    text: '最近一个月',\n    onClick: function onClick(picker) {\n      var start = new Date();\n      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);\n      var end = new Date();\n      picker.$emit('pick', [(0, _dateUtils.beginOfDay)(start), (0, _dateUtils.endOfDay)(end)]);\n    }\n  }, {\n    text: '最近三个月',\n    onClick: function onClick(picker) {\n      var start = new Date();\n      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);\n      var end = new Date();\n      picker.$emit('pick', [(0, _dateUtils.beginOfDay)(start), (0, _dateUtils.endOfDay)(end)]);\n    }\n  }]\n};\n\n// ========== 静态变量 ==========\n\n/**\n * 全局通用状态枚举\n */\nexports.datePickerOptions = datePickerOptions;\nvar CommonStatusEnum = {\n  ENABLE: 0,\n  // 开启\n  DISABLE: 1 // 禁用\n};\n\n/**\n * 菜单的类型枚举\n */\nexports.CommonStatusEnum = CommonStatusEnum;\nvar SystemMenuTypeEnum = {\n  DIR: 1,\n  // 目录\n  MENU: 2,\n  // 菜单\n  BUTTON: 3 // 按钮\n};\n\n/**\n * 角色的类型枚举\n */\nexports.SystemMenuTypeEnum = SystemMenuTypeEnum;\nvar SystemRoleTypeEnum = {\n  SYSTEM: 1,\n  // 内置角色\n  CUSTOM: 2 // 自定义角色\n};\n\n/**\n * 数据权限的范围枚举\n */\nexports.SystemRoleTypeEnum = SystemRoleTypeEnum;\nvar SystemDataScopeEnum = {\n  ALL: 1,\n  // 全部数据权限\n  DEPT_CUSTOM: 2,\n  // 指定部门数据权限\n  DEPT_ONLY: 3,\n  // 部门数据权限\n  DEPT_AND_CHILD: 4,\n  // 部门及以下数据权限\n  DEPT_SELF: 5 // 仅本人数据权限\n};\n\n/**\n * 代码生成模板类型\n */\nexports.SystemDataScopeEnum = SystemDataScopeEnum;\nvar InfraCodegenTemplateTypeEnum = {\n  CRUD: 1,\n  // 基础 CRUD\n  TREE: 2,\n  // 树形 CRUD\n  SUB: 3 // 主子表 CRUD\n};\n\n/**\n * 任务状态的枚举\n */\nexports.InfraCodegenTemplateTypeEnum = InfraCodegenTemplateTypeEnum;\nvar InfraJobStatusEnum = {\n  INIT: 0,\n  // 初始化中\n  NORMAL: 1,\n  // 运行中\n  STOP: 2 // 暂停运行\n};\n\n/**\n * API 异常数据的处理状态\n */\nexports.InfraJobStatusEnum = InfraJobStatusEnum;\nvar InfraApiErrorLogProcessStatusEnum = {\n  INIT: 0,\n  // 未处理\n  DONE: 1,\n  // 已处理\n  IGNORE: 2 // 已忽略\n};\n\n/**\n * 用户的社交平台的类型枚举\n */\nexports.InfraApiErrorLogProcessStatusEnum = InfraApiErrorLogProcessStatusEnum;\nvar SystemUserSocialTypeEnum = {\n  DINGTALK: {\n    title: \"钉钉\",\n    type: 20,\n    source: \"dingtalk\",\n    img: \"https://s1.ax1x.com/2022/05/22/OzMDRs.png\"\n  },\n  WECHAT_ENTERPRISE: {\n    title: \"企业微信\",\n    type: 30,\n    source: \"wechat_enterprise\",\n    img: \"https://s1.ax1x.com/2022/05/22/OzMrzn.png\"\n  }\n};\n\n/**\n * 支付渠道枚举\n */\nexports.SystemUserSocialTypeEnum = SystemUserSocialTypeEnum;\nvar PayChannelEnum = {\n  WX_PUB: {\n    \"code\": \"wx_pub\",\n    \"name\": \"微信 JSAPI 支付\"\n  },\n  WX_LITE: {\n    \"code\": \"wx_lite\",\n    \"name\": \"微信小程序支付\"\n  },\n  WX_APP: {\n    \"code\": \"wx_app\",\n    \"name\": \"微信 APP 支付\"\n  },\n  WX_NATIVE: {\n    \"code\": \"wx_native\",\n    \"name\": \"微信扫码支付\"\n  },\n  WX_BAR: {\n    \"code\": \"wx_bar\",\n    \"name\": \"微信条码支付\"\n  },\n  ALIPAY_PC: {\n    \"code\": \"alipay_pc\",\n    \"name\": \"支付宝 PC 网站支付\"\n  },\n  ALIPAY_WAP: {\n    \"code\": \"alipay_wap\",\n    \"name\": \"支付宝 WAP 网站支付\"\n  },\n  ALIPAY_APP: {\n    \"code\": \"alipay_app\",\n    \"name\": \"支付宝 APP 支付\"\n  },\n  ALIPAY_QR: {\n    \"code\": \"alipay_qr\",\n    \"name\": \"支付宝扫码支付\"\n  },\n  ALIPAY_BAR: {\n    \"code\": \"alipay_bar\",\n    \"name\": \"支付宝条码支付\"\n  },\n  MOCK: {\n    \"code\": \"mock\",\n    \"name\": \"模拟支付\"\n  }\n};\n\n/**\n * 支付的展示模式每局\n */\nexports.PayChannelEnum = PayChannelEnum;\nvar PayDisplayModeEnum = {\n  URL: {\n    \"mode\": \"url\"\n  },\n  IFRAME: {\n    \"mode\": \"iframe\"\n  },\n  FORM: {\n    \"mode\": \"form\"\n  },\n  QR_CODE: {\n    \"mode\": \"qr_code\"\n  },\n  APP: {\n    \"mode\": \"app\"\n  }\n};\n\n/**\n * 支付订单状态枚举\n */\nexports.PayDisplayModeEnum = PayDisplayModeEnum;\nvar PayOrderStatusEnum = {\n  WAITING: {\n    status: 0,\n    name: '未支付'\n  },\n  SUCCESS: {\n    status: 10,\n    name: '已支付'\n  },\n  CLOSED: {\n    status: 20,\n    name: '支付关闭'\n  }\n};\n\n/**\n * 支付退款订单状态枚举\n */\nexports.PayOrderStatusEnum = PayOrderStatusEnum;\nvar PayRefundStatusEnum = {\n  CREATE: {\n    status: 0,\n    name: '退款订单生成'\n  },\n  SUCCESS: {\n    status: 1,\n    name: '退款成功'\n  },\n  FAILURE: {\n    status: 2,\n    name: '退款失败'\n  },\n  PROCESSING_NOTIFY: {\n    status: 3,\n    name: '退款中，渠道通知结果'\n  },\n  PROCESSING_QUERY: {\n    status: 4,\n    name: '退款中，系统查询结果'\n  },\n  UNKNOWN_RETRY: {\n    status: 5,\n    name: '状态未知，请重试'\n  },\n  UNKNOWN_QUERY: {\n    status: 6,\n    name: '状态未知，系统查询结果'\n  },\n  CLOSE: {\n    status: 99,\n    name: '退款关闭'\n  }\n};\n\n/**\n * 商品 SPU 状态\n */\nexports.PayRefundStatusEnum = PayRefundStatusEnum;\nvar ProductSpuStatusEnum = {\n  RECYCLE: {\n    status: -1,\n    name: '回收站'\n  },\n  DISABLE: {\n    status: 0,\n    name: '下架'\n  },\n  ENABLE: {\n    status: 1,\n    name: '上架'\n  }\n};\n\n/**\n * 优惠类型枚举\n */\nexports.ProductSpuStatusEnum = ProductSpuStatusEnum;\nvar PromotionDiscountTypeEnum = {\n  PRICE: {\n    type: 1,\n    name: '满减'\n  },\n  PERCENT: {\n    type: 2,\n    name: '折扣'\n  }\n};\n\n/**\n * 优惠劵模板的有限期类型的枚举\n */\nexports.PromotionDiscountTypeEnum = PromotionDiscountTypeEnum;\nvar CouponTemplateValidityTypeEnum = {\n  DATE: {\n    type: 1,\n    name: '固定日期可用'\n  },\n  TERM: {\n    type: 2,\n    name: '领取之后可用'\n  }\n};\n\n/**\n * 营销的商品范围枚举\n */\nexports.CouponTemplateValidityTypeEnum = CouponTemplateValidityTypeEnum;\nvar PromotionProductScopeEnum = {\n  ALL: {\n    scope: 1,\n    name: '全部商品参与'\n  },\n  SPU: {\n    scope: 2,\n    name: '指定商品参与'\n  }\n};\n\n/**\n * 营销的条件类型枚举\n */\nexports.PromotionProductScopeEnum = PromotionProductScopeEnum;\nvar PromotionConditionTypeEnum = {\n  PRICE: {\n    type: 10,\n    name: '满 N 元'\n  },\n  COUNT: {\n    type: 20,\n    name: '满 N 件'\n  }\n};\n\n/**\n * 促销活动的状态枚举\n */\nexports.PromotionConditionTypeEnum = PromotionConditionTypeEnum;\nvar PromotionActivityStatusEnum = {\n  WAIT: {\n    type: 10,\n    name: '未开始'\n  },\n  RUN: {\n    type: 20,\n    name: '进行中'\n  },\n  END: {\n    type: 30,\n    name: '已结束'\n  },\n  CLOSE: {\n    type: 40,\n    name: '已关闭'\n  }\n};\nexports.PromotionActivityStatusEnum = PromotionActivityStatusEnum;\n\n//# sourceURL=webpack:///./src/utils/constants.js?");

/***/ }),

/***/ "./src/utils/dateUtils.js":
/*!********************************!*\
  !*** ./src/utils/dateUtils.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.addTime = addTime;\nexports.beginOfDay = beginOfDay;\nexports.betweenDay = betweenDay;\nexports.convertDate = convertDate;\nexports.endOfDay = endOfDay;\nexports.formatDate = formatDate;\nexports.getDate = getDate;\n__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n__webpack_require__(/*! core-js/modules/es.regexp.test.js */ \"./node_modules/core-js/modules/es.regexp.test.js\");\n__webpack_require__(/*! core-js/modules/es.string.replace.js */ \"./node_modules/core-js/modules/es.string.replace.js\");\n__webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ \"./node_modules/core-js/modules/es.regexp.constructor.js\");\n__webpack_require__(/*! core-js/modules/es.regexp.dot-all.js */ \"./node_modules/core-js/modules/es.regexp.dot-all.js\");\n__webpack_require__(/*! core-js/modules/es.regexp.sticky.js */ \"./node_modules/core-js/modules/es.regexp.sticky.js\");\n__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ \"./node_modules/core-js/modules/es.regexp.to-string.js\");\n/**\n * 将毫秒，转换成时间字符串。例如说，xx 分钟\n *\n * @param ms 毫秒\n * @returns {string} 字符串\n */\nfunction getDate(ms) {\n  var day = Math.floor(ms / (24 * 60 * 60 * 1000));\n  var hour = Math.floor(ms / (60 * 60 * 1000) - day * 24);\n  var minute = Math.floor(ms / (60 * 1000) - day * 24 * 60 - hour * 60);\n  var second = Math.floor(ms / 1000 - day * 24 * 60 * 60 - hour * 60 * 60 - minute * 60);\n  if (day > 0) {\n    return day + \"天\" + hour + \"小时\" + minute + \"分钟\";\n  }\n  if (hour > 0) {\n    return hour + \"小时\" + minute + \"分钟\";\n  }\n  if (minute > 0) {\n    return minute + \"分钟\";\n  }\n  if (second > 0) {\n    return second + \"秒\";\n  } else {\n    return 0 + \"秒\";\n  }\n}\nfunction beginOfDay(date) {\n  return new Date(date.getFullYear(), date.getMonth(), date.getDate());\n}\nfunction endOfDay(date) {\n  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 999);\n}\nfunction betweenDay(date1, date2) {\n  date1 = convertDate(date1);\n  date2 = convertDate(date2);\n  // 计算差值\n  return Math.floor((date2.getTime() - date1.getTime()) / (24 * 3600 * 1000));\n}\nfunction formatDate(date, fmt) {\n  date = convertDate(date);\n  var o = {\n    \"M+\": date.getMonth() + 1,\n    //月份\n    \"d+\": date.getDate(),\n    //日\n    \"H+\": date.getHours(),\n    //小时\n    \"m+\": date.getMinutes(),\n    //分\n    \"s+\": date.getSeconds(),\n    //秒\n    \"q+\": Math.floor((date.getMonth() + 3) / 3),\n    //季度\n    \"S\": date.getMilliseconds() //毫秒\n  };\n\n  if (/(y+)/.test(fmt)) {\n    // 年份\n    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + \"\").substr(4 - RegExp.$1.length));\n  }\n  for (var k in o) {\n    if (new RegExp(\"(\" + k + \")\").test(fmt)) {\n      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : (\"00\" + o[k]).substr((\"\" + o[k]).length));\n    }\n  }\n  return fmt;\n}\nfunction addTime(date, time) {\n  date = convertDate(date);\n  return new Date(date.getTime() + time);\n}\nfunction convertDate(date) {\n  if (typeof date === 'string') {\n    return new Date(date);\n  }\n  return date;\n}\n\n//# sourceURL=webpack:///./src/utils/dateUtils.js?");

/***/ })

}]);