/*!
* Vue Material v0.7.6
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()})(this,(function(){return (function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=460)})({0:function(e,t){e.exports=function(e,t,n,o,r){var i,a=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(i=e,a=e.default);var u="function"==typeof a?a.options:a;t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),o&&(u._scopeId=o);var c;if(r?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},u._ssrRegister=c):n&&(c=n),c){var d=u.functional,l=d?u.render:u.beforeCreate;d?u.render=function(e,t){return c.call(t),l(e,t)}:u.beforeCreate=l?[].concat(l,c):[c]}return{esModule:i,exports:a,options:u}}},215:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){e.component("md-image",a.default),e.material.styles.push(u.default)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var i=n(216),a=o(i),s=n(220),u=o(s);e.exports=t.default},216:function(e,t,n){function o(e){n(217)}var r=n(0)(n(218),n(219),o,null,null);e.exports=r.exports},217:function(e,t){},218:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(65),r=(function(e){return e&&e.__esModule?e:{default:e}})(o);t.default={name:"md-image",props:{mdSrc:String},data:function(){return{loaded:!1,applyBlack:!0,imageElement:null}},watch:{mdSrc:function(){this.createImage()}},computed:{classes:function(){return{"md-loaded":this.loaded,"md-black-output":this.applyBlack}}},methods:{analyzeLightness:function(e){var t=this,n=function(){t.loaded=!0};(0,r.default)(e,(function(e){(100*Math.abs(256-e)/256+15)/100>=.7&&(t.applyBlack=!0),t.$nextTick(n)}),n)},createImage:function(){this.loaded=!1,this.applyBlack=!1,this.imageElement=null,this.mdSrc&&(this.imageElement=document.createElement("img"),this.imageElement.crossOrigin="",this.imageElement.src=this.mdSrc,this.analyzeLightness(this.imageElement))}},created:function(){this.createImage()}},e.exports=t.default},219:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("img",{staticClass:"md-image",class:e.classes,attrs:{src:e.mdSrc}})},staticRenderFns:[]}},220:function(e,t){e.exports=""},460:function(e,t,n){e.exports=n(215)},65:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t,n){var o=document.createElement("canvas");e.crossOrigin="Anonymous",e.onload=function(){var e=0,n=void 0,r=void 0,i=void 0,a=void 0,s=void 0,u=void 0,c=void 0;o.width=this.width,o.height=this.height,n=o.getContext("2d"),n.drawImage(this,0,0),r=n.getImageData(0,0,o.width,o.height),i=r.data;for(var d=0,l=i.length;d<l;d+=4)a=i[d],s=i[d+1],u=i[d+2],c=Math.floor((a+s+u)/3),e+=c;t(Math.floor(e/(this.width*this.height)))},e.onerror=n};t.default=o,e.exports=t.default}})}));