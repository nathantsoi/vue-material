/*!
* Vue Material v0.7.6
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()})(this,(function(){return (function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=459)})({0:function(e,t){e.exports=function(e,t,n,r,o){var i,s=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(i=e,s=e.default);var a="function"==typeof s?s.options:s;t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),r&&(a._scopeId=r);var u;if(o?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},a._ssrRegister=u):n&&(u=n),u){var d=a.functional,f=d?a.render:a.beforeCreate;d?a.render=function(e,t){return u.call(t),f(e,t)}:a.beforeCreate=f?[].concat(f,u):[u]}return{esModule:i,exports:s,options:a}}},1:function(e,t,n){"use strict";function r(e){if(!e)return null;var t=e.mdTheme;return t||"md-theme"!==e.$options._componentTag||(t=e.mdName),t||r(e.$parent)}Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{mdTheme:String},computed:{mdEffectiveTheme:function(){return r(this)||this.$material.currentTheme},themeClass:function(){return this.$material.prefix+this.mdEffectiveTheme}},watch:{mdTheme:function(e){this.$material.useTheme(e)}},beforeMount:function(){var e=this.mdTheme;this.$material.useTheme(e||"default")}},e.exports=t.default},209:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){e.component("md-icon",s.default),e.material.styles.push(a.default)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var i=n(210),s=r(i),c=n(214),a=r(c);e.exports=t.default},210:function(e,t,n){function r(e){n(211)}var o=n(0)(n(212),n(213),r,null,null);e.exports=o.exports},211:function(e,t){},212:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=(function(e){return e&&e.__esModule?e:{default:e}})(r),i={};t.default={name:"md-icon",props:{mdSrc:String,mdIconset:{type:String,default:"material-icons"}},data:function(){return{svgContent:null,imageSrc:null}},mixins:[o.default],watch:{mdSrc:function(){this.svgContent=null,this.imageSrc=null,this.checkSrc()}},methods:{isImage:function(e){return e.indexOf("image")>=0},isSVG:function(e){return e.indexOf("svg")>=0},setSVGContent:function(e){var t=this;this.svgContent=e,this.$nextTick((function(){t.$el.children[0].removeAttribute("fill")}))},loadSVG:function(){if(i[this.mdSrc])this.setSVGContent(i[this.mdSrc]);else{var e=new XMLHttpRequest,t=this;e.open("GET",this.mdSrc,!0),e.onload=function(){var e=this.getResponseHeader("content-type");this.status>=200&&this.status<400&&t.isImage(e)?t.isSVG(e)?(i[t.mdSrc]=this.response,t.setSVGContent(this.response)):t.loadImage():console.warn("The file "+t.mdSrc+" is not a valid image.")},e.send()}},loadImage:function(){this.imageSrc=this.mdSrc},checkSrc:function(){this.mdSrc&&(this.mdSrc.indexOf(".svg")>=0?this.loadSVG():this.loadImage())}},mounted:function(){this.checkSrc()}},e.exports=t.default},213:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.svgContent?n("i",{staticClass:"md-icon",class:[e.themeClass],domProps:{innerHTML:e._s(e.svgContent)}}):e.imageSrc?n("md-image",{staticClass:"md-icon",class:[e.themeClass],attrs:{"md-src":e.imageSrc}}):n("i",{staticClass:"md-icon",class:[e.themeClass,e.mdIconset],attrs:{"aria-hidden":!!e.mdIconset}},[e._t("default")],2)},staticRenderFns:[]}},214:function(e,t){e.exports=".THEME_NAME.md-icon.md-primary{color:PRIMARY-COLOR}.THEME_NAME.md-icon.md-accent{color:ACCENT-COLOR}.THEME_NAME.md-icon.md-warn{color:WARN-COLOR}\n"},459:function(e,t,n){e.exports=n(209)}})}));