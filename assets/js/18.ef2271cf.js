(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{187:function(t,n,o){},200:function(t,n,o){"use strict";var e=o(187);o.n(e).a},202:function(t,n,o){},210:function(t,n,o){"use strict";var e={name:"v-button",components:{vIcon:o(184).a},props:{icon:{type:String,default:""},type:{type:String,default:""},loading:{type:Boolean,default:!1},position:{type:String,default:"left",validator:function(t){return"left"==t||"right"==t}}},data:function(){return{}},watch:{},methods:{},mounted:function(){}},u=(o(200),o(0)),i=Object(u.a)(e,function(){var t,n=this,o=n.$createElement,e=n._self._c||o;return e("section",{staticClass:"vbutton-wrap"},[e("button",{staticClass:"v-button",class:(t={},t["icon-"+n.position]=!0,t["v-button-"+n.type]=!0,t),on:{click:function(t){n.$emit("click")}}},[n.loading?e("v-icon",{staticClass:"icon loading",attrs:{name:"loading"}}):n._e(),n._v(" "),n.icon&&!n.loading?e("v-icon",{staticClass:"icon",attrs:{name:n.icon}}):n._e(),n._v(" "),e("div",{staticClass:"button-content"},[n._t("default")],2)],1)])},[],!1,null,"73403b12",null);i.options.__file="button.vue";n.a=i.exports},220:function(t,n,o){"use strict";var e=o(202);o.n(e).a},242:function(t,n,o){"use strict";o.r(n);var e=o(210),u=(o(195),{components:{"v-button":e.a},props:{},data:function(){return{content:"\n            <v-button  type='error'>按钮</v-button>\n            <v-button  >按钮</v-button>\n            <v-button  type='info'>按钮</v-button>\n            <v-button  type='success'>按钮</v-button>\n            <v-button  type='primary'>按钮</v-button>\n            <v-button  type='waring'>按钮</v-button>"}},watch:{},methods:{},mounted:function(){}}),i=(o(220),o(0)),a=Object(i.a)(u,function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("section",[o("v-button",{attrs:{type:"error"}},[t._v("按钮")]),t._v(" "),o("v-button",[t._v("按钮")]),t._v(" "),o("v-button",{attrs:{type:"info"}},[t._v("按钮")]),t._v(" "),o("v-button",{attrs:{type:"success"}},[t._v("按钮")]),t._v(" "),o("v-button",{attrs:{type:"primary"}},[t._v("按钮")]),t._v(" "),o("v-button",{attrs:{type:"waring"}},[t._v("按钮")]),t._v(" "),o("pre",[t._v("        "),o("code",[t._v(t._s(t.content))]),t._v("\n    ")])],1)},[],!1,null,"21e0f012",null);a.options.__file="button-type.vue";n.default=a.exports}}]);