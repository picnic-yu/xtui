(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{171:function(t,n,e){},172:function(t,n,e){},173:function(t,n,e){"use strict";var r=e(2),o=e(12),s=e(16),a=e(65),c=e(63),i=e(5),u=e(85).f,f=e(84).f,l=e(7).f,p=e(174).trim,v=r.Number,h=v,d=v.prototype,g="Number"==s(e(64)(d)),m="trim"in String.prototype,_=function(t){var n=c(t,!1);if("string"==typeof n&&n.length>2){var e,r,o,s=(n=m?n.trim():p(n,3)).charCodeAt(0);if(43===s||45===s){if(88===(e=n.charCodeAt(2))||120===e)return NaN}else if(48===s){switch(n.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+n}for(var a,i=n.slice(2),u=0,f=i.length;u<f;u++)if((a=i.charCodeAt(u))<48||a>o)return NaN;return parseInt(i,r)}}return+n};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function(t){var n=arguments.length<1?0:t,e=this;return e instanceof v&&(g?i(function(){d.valueOf.call(e)}):"Number"!=s(e))?a(new h(_(n)),e,v):_(n)};for(var N,w=e(6)?u(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;w.length>I;I++)o(h,N=w[I])&&!o(v,N)&&l(v,N,f(h,N));v.prototype=d,d.constructor=v,e(10)(r,"Number",v)}},174:function(t,n,e){var r=e(9),o=e(17),s=e(5),a=e(175),c="["+a+"]",i=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),f=function(t,n,e){var o={},c=s(function(){return!!a[t]()||"​"!="​"[t]()}),i=o[t]=c?n(l):a[t];e&&(o[e]=i),r(r.P+r.F*c,"String",o)},l=f.trim=function(t,n){return t=String(o(t)),1&n&&(t=t.replace(i,"")),2&n&&(t=t.replace(u,"")),t};t.exports=f},175:function(t,n){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},179:function(t,n,e){"use strict";var r=e(171);e.n(r).a},180:function(t,n,e){"use strict";var r=e(172);e.n(r).a},181:function(t,n,e){"use strict";var r=e(8),o=(e(173),{name:"v-col",components:{},props:{span:{type:[String,Number]},offset:{type:[String,Number],default:0}},data:function(){return{gutter:0}},computed:{colStyle:function(){return{paddingLeft:this.gutter/2+"px",paddingRight:this.gutter/2+"px"}},colClass:function(){var t=this.createClasses,n=this.span,e=this.offset;return Object(r.a)(t({span:n,offset:e}))}},watch:{},methods:{createClasses:function(t){if(!t)return[];var n=[];return t.span&&n.push("col-".concat(t.span)),t.offset&&n.push("offset-".concat(t.offset)),n}},mounted:function(){}}),s=(e(180),e(0)),a=Object(s.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"col",class:this.colClass,style:this.colStyle},[this._t("default")],2)},[],!1,null,"074097c6",null);a.options.__file="col.vue";n.a=a.exports},182:function(t,n,e){"use strict";e(13),e(173);var r={name:"v-row",components:{},props:{gutter:{type:[Number,String],default:0},align:{type:String,validator:function(t){return["left","right","center"].indexOf(t)>=0}}},data:function(){return{}},watch:{},methods:{},computed:{rowStyle:function(){var t=this.gutter;return{marginLeft:-t/2+"px",marginRight:-t/2+"px"}},rowClass:function(){var t=this.align;return[t&&"align-".concat(t)]}},mounted:function(){var t=this;this.$children.forEach(function(n){n.gutter=t.gutter})}},o=(e(179),e(0)),s=Object(o.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"row",class:this.rowClass,style:this.rowStyle},[this._t("default")],2)},[],!1,null,"2c359aa0",null);s.options.__file="row.vue";n.a=s.exports},208:function(t,n,e){},226:function(t,n,e){"use strict";var r=e(208);e.n(r).a},234:function(t,n,e){"use strict";e.r(n);var r=e(182),o=e(181),s={components:{vRow:r.a,vCol:o.a},props:{},data:function(){return{content:"\n            <v-row >\n                <v-col span='6' >col-6</v-col>\n                <v-col span='6' :offset='6'>col-6</v-col>\n            </v-row>"}},watch:{},methods:{},mounted:function(){}},a=(e(226),e(0)),c=Object(a.a)(s,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("v-row",{staticClass:"demo-row"},[e("v-col",{attrs:{span:"6"}},[e("div",{staticClass:"demo-col"},[t._v("\n                col-6\n            ")])]),t._v(" "),e("v-col",{attrs:{span:"6",offset:6}},[e("div",{staticClass:"demo-col light"},[t._v("\n                col-6\n            ")])])],1),t._v(" "),e("pre",[t._v("        "),e("code",[t._v(t._s(t.content))]),t._v("\n    ")])],1)},[],!1,null,"55759d5c",null);c.options.__file="gird-offset.vue";n.default=c.exports}}]);