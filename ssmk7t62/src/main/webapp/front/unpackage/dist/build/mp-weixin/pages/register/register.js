(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"4e3b":function(e,n,t){"use strict";(function(e){t("b883");i(t("66fd"));var n=i(t("81c2"));function i(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},"81c2":function(e,n,t){"use strict";t.r(n);var i=t("962e"),u=t("9358");for(var r in u)"default"!==r&&function(e){t.d(n,e,(function(){return u[e]}))}(r);t("e57c");var a,o=t("f0c5"),s=Object(o["a"])(u["default"],i["b"],i["c"],!1,null,"19407d60",null,!1,i["a"],a);n["default"]=s.exports},9358:function(e,n,t){"use strict";t.r(n);var i=t("bd06"),u=t.n(i);for(var r in i)"default"!==r&&function(e){t.d(n,e,(function(){return i[e]}))}(r);n["default"]=u.a},"962e":function(e,n,t){"use strict";var i;t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return r})),t.d(n,"a",(function(){return i}));var u=function(){var e=this,n=e.$createElement;e._self._c},r=[]},a23e:function(e,n,t){},bd06:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=u(t("a34a"));function u(e){return e&&e.__esModule?e:{default:e}}function r(e,n,t,i,u,r,a){try{var o=e[r](a),s=o.value}catch(c){return void t(c)}o.done?n(s):Promise.resolve(s).then(i,u)}function a(e){return function(){var n=this,t=arguments;return new Promise((function(i,u){var a=e.apply(n,t);function o(e){r(a,i,u,o,s,"next",e)}function s(e){r(a,i,u,o,s,"throw",e)}o(void 0)}))}}var o={data:function(){return{yonghuxingbieOptions:[],yonghuxingbieIndex:0,weixiuyuanxingbieOptions:[],weixiuyuanxingbieIndex:0,ruleForm:{},tableName:""}},onLoad:function(){var n=this;return a(i.default.mark((function t(){var u;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:[],u=e.getStorageSync("loginTable"),n.tableName=u,"yonghu"==n.tableName&&(n.yonghuxingbieOptions="男,女".split(","),n.ruleForm.xingbie=n.yonghuxingbieOptions[0]),"weixiuyuan"==n.tableName&&(n.weixiuyuanxingbieOptions="男,女".split(","),n.ruleForm.xingbie=n.weixiuyuanxingbieOptions[0]),n.styleChange();case 6:case"end":return t.stop()}}),t)})))()},methods:{yonghuxingbieChange:function(e){this.yonghuxingbieIndex=e.target.value,this.ruleForm.xingbie=this.yonghuxingbieOptions[this.yonghuxingbieIndex]},weixiuyuanxingbieChange:function(e){this.weixiuyuanxingbieIndex=e.target.value,this.ruleForm.xingbie=this.weixiuyuanxingbieOptions[this.weixiuyuanxingbieIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var e=this;return a(i.default.mark((function n(){return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.ruleForm.yonghuming||"yonghu"!=e.tableName){n.next=3;break}return e.$utils.msg("用户名不能为空"),n.abrupt("return");case 3:if(e.ruleForm.mima||"yonghu"!=e.tableName){n.next=6;break}return e.$utils.msg("密码不能为空"),n.abrupt("return");case 6:if("yonghu"!=e.tableName||!e.ruleForm.shouji||e.$validate.isMobile(e.ruleForm.shouji)){n.next=9;break}return e.$utils.msg("手机应输入手机格式"),n.abrupt("return");case 9:if(e.ruleForm.zhanghao||"weixiuyuan"!=e.tableName){n.next=12;break}return e.$utils.msg("账号不能为空"),n.abrupt("return");case 12:if(e.ruleForm.mima||"weixiuyuan"!=e.tableName){n.next=15;break}return e.$utils.msg("密码不能为空"),n.abrupt("return");case 15:if("weixiuyuan"!=e.tableName||!e.ruleForm.dianhua||e.$validate.isMobile(e.ruleForm.dianhua)){n.next=18;break}return e.$utils.msg("电话应输入手机格式"),n.abrupt("return");case 18:return n.next=20,e.$api.register("".concat(e.tableName),e.ruleForm);case 20:e.$utils.msgBack("注册成功");case 22:case"end":return n.stop()}}),n)})))()}}};n.default=o}).call(this,t("543d")["default"])},e57c:function(e,n,t){"use strict";var i=t("a23e"),u=t.n(i);u.a}},[["4e3b","common/runtime","common/vendor"]]]);