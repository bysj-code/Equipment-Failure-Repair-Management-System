(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-register-register"],{"2b4b":function(e,i,t){var n=t("24fb");i=n(!1),i.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-131ab692]{padding:%?100?%}.content[data-v-131ab692]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}.logo[data-v-131ab692]{text-align:center}.logo uni-image[data-v-131ab692]{height:%?200?%;width:%?200?%;margin:0 0 %?60?%}.uni-form-item[data-v-131ab692]{margin-bottom:%?40?%;padding:0}.uni-form-item .uni-input[data-v-131ab692]{font-size:%?30?%;padding:7px 0}uni-button[type="primary"][data-v-131ab692]{background-color:#b49950;border-radius:0;font-size:%?34?%;margin-top:%?60?%}.links[data-v-131ab692]{text-align:center;margin-top:%?40?%;font-size:%?26?%;color:#999}.links uni-view[data-v-131ab692]{display:inline-block;vertical-align:top;margin:0 %?10?%}.links .link-highlight[data-v-131ab692]{color:#b49950}.picker-select-input[data-v-131ab692]{line-height:%?88?%}',""]),e.exports=i},3735:function(e,i,t){"use strict";t.r(i);var n=t("c6dd"),r=t("48c7");for(var o in r)"default"!==o&&function(e){t.d(i,e,(function(){return r[e]}))}(o);t("caae");var a,u=t("f0c5"),l=Object(u["a"])(r["default"],n["b"],n["c"],!1,null,"131ab692",null,!1,n["a"],a);i["default"]=l.exports},"48c7":function(e,i,t){"use strict";t.r(i);var n=t("4e2d"),r=t.n(n);for(var o in n)"default"!==o&&function(e){t.d(i,e,(function(){return n[e]}))}(o);i["default"]=r.a},"4e2d":function(e,i,t){"use strict";var n=t("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,t("28a5"),t("96cf");var r=n(t("3b8d")),o={data:function(){return{yonghuxingbieOptions:[],yonghuxingbieIndex:0,weixiuyuanxingbieOptions:[],weixiuyuanxingbieIndex:0,ruleForm:{},tableName:""}},onLoad:function(){var e=(0,r.default)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:[],i=uni.getStorageSync("loginTable"),this.tableName=i,"yonghu"==this.tableName&&(this.yonghuxingbieOptions="男,女".split(","),this.ruleForm.xingbie=this.yonghuxingbieOptions[0]),"weixiuyuan"==this.tableName&&(this.weixiuyuanxingbieOptions="男,女".split(","),this.ruleForm.xingbie=this.weixiuyuanxingbieOptions[0]),this.styleChange();case 6:case"end":return e.stop()}}),e,this)})));function i(){return e.apply(this,arguments)}return i}(),methods:{yonghuxingbieChange:function(e){this.yonghuxingbieIndex=e.target.value,this.ruleForm.xingbie=this.yonghuxingbieOptions[this.yonghuxingbieIndex]},weixiuyuanxingbieChange:function(e){this.weixiuyuanxingbieIndex=e.target.value,this.ruleForm.xingbie=this.weixiuyuanxingbieOptions[this.weixiuyuanxingbieIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var e=(0,r.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.yonghuming||"yonghu"!=this.tableName){e.next=3;break}return this.$utils.msg("用户名不能为空"),e.abrupt("return");case 3:if(this.ruleForm.mima||"yonghu"!=this.tableName){e.next=6;break}return this.$utils.msg("密码不能为空"),e.abrupt("return");case 6:if("yonghu"!=this.tableName||!this.ruleForm.shouji||this.$validate.isMobile(this.ruleForm.shouji)){e.next=9;break}return this.$utils.msg("手机应输入手机格式"),e.abrupt("return");case 9:if(this.ruleForm.zhanghao||"weixiuyuan"!=this.tableName){e.next=12;break}return this.$utils.msg("账号不能为空"),e.abrupt("return");case 12:if(this.ruleForm.mima||"weixiuyuan"!=this.tableName){e.next=15;break}return this.$utils.msg("密码不能为空"),e.abrupt("return");case 15:if("weixiuyuan"!=this.tableName||!this.ruleForm.dianhua||this.$validate.isMobile(this.ruleForm.dianhua)){e.next=18;break}return this.$utils.msg("电话应输入手机格式"),e.abrupt("return");case 18:return e.next=20,this.$api.register("".concat(this.tableName),this.ruleForm);case 20:this.$utils.msgBack("注册成功");case 22:case"end":return e.stop()}}),e,this)})));function i(){return e.apply(this,arguments)}return i}()}};i.default=o},9356:function(e,i,t){var n=t("2b4b");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=t("4f06").default;r("45f61f28",n,!0,{sourceMap:!1,shadowMode:!1})},c6dd:function(e,i,t){"use strict";var n,r=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("v-uni-view",{staticClass:"content"},[e._e(),"yonghu"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(255, 153, 0, 1)",backgroundColor:"#fff",borderRadius:"40rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"用户名"},model:{value:e.ruleForm.yonghuming,callback:function(i){e.$set(e.ruleForm,"yonghuming",i)},expression:"ruleForm.yonghuming"}})],1):e._e(),"yonghu"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(255, 153, 0, 1)",backgroundColor:"#fff",borderRadius:"40rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"密码"},model:{value:e.ruleForm.mima,callback:function(i){e.$set(e.ruleForm,"mima",i)},expression:"ruleForm.mima"}})],1):e._e(),"yonghu"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(255, 153, 0, 1)",backgroundColor:"#fff",borderRadius:"40rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"姓名"},model:{value:e.ruleForm.xingming,callback:function(i){e.$set(e.ruleForm,"xingming",i)},expression:"ruleForm.xingming"}})],1):e._e(),"yonghu"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-picker",{attrs:{value:e.yonghuxingbieIndex,range:e.yonghuxingbieOptions},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.yonghuxingbieChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{borderColor:"rgba(255, 153, 0, 1)",backgroundColor:"#fff",borderRadius:"40rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[e._v(e._s(e.ruleForm.xingbie?e.ruleForm.xingbie:"请选择性别"))])],1)],1):e._e(),"yonghu"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(255, 153, 0, 1)",backgroundColor:"#fff",borderRadius:"40rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"手机"},model:{value:e.ruleForm.shouji,callback:function(i){e.$set(e.ruleForm,"shouji",i)},expression:"ruleForm.shouji"}})],1):e._e(),"weixiuyuan"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(255, 153, 0, 1)",backgroundColor:"#fff",borderRadius:"40rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"账号"},model:{value:e.ruleForm.zhanghao,callback:function(i){e.$set(e.ruleForm,"zhanghao",i)},expression:"ruleForm.zhanghao"}})],1):e._e(),"weixiuyuan"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(255, 153, 0, 1)",backgroundColor:"#fff",borderRadius:"40rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"密码"},model:{value:e.ruleForm.mima,callback:function(i){e.$set(e.ruleForm,"mima",i)},expression:"ruleForm.mima"}})],1):e._e(),"weixiuyuan"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(255, 153, 0, 1)",backgroundColor:"#fff",borderRadius:"40rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"姓名"},model:{value:e.ruleForm.xingming,callback:function(i){e.$set(e.ruleForm,"xingming",i)},expression:"ruleForm.xingming"}})],1):e._e(),"weixiuyuan"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-picker",{attrs:{value:e.weixiuyuanxingbieIndex,range:e.weixiuyuanxingbieOptions},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.weixiuyuanxingbieChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{borderColor:"rgba(255, 153, 0, 1)",backgroundColor:"#fff",borderRadius:"40rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[e._v(e._s(e.ruleForm.xingbie?e.ruleForm.xingbie:"请选择性别"))])],1)],1):e._e(),"weixiuyuan"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(255, 153, 0, 1)",backgroundColor:"#fff",borderRadius:"40rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"电话"},model:{value:e.ruleForm.dianhua,callback:function(i){e.$set(e.ruleForm,"dianhua",i)},expression:"ruleForm.dianhua"}})],1):e._e(),t("v-uni-view",[t("v-uni-button",{style:{borderColor:"#ccc",backgroundColor:"rgba(255, 153, 0, 1)",borderRadius:"40rpx",color:"rgba(255, 255, 255, 1)",borderWidth:"2rpx",fontSize:"32rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"primary"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.register.apply(void 0,arguments)}}},[e._v("注册")])],1)],1)},o=[];t.d(i,"b",(function(){return r})),t.d(i,"c",(function(){return o})),t.d(i,"a",(function(){return n}))},caae:function(e,i,t){"use strict";var n=t("9356"),r=t.n(n);r.a}}]);