/*!
* Vue Material v0.7.6
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()})(this,(function(){return (function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=454)})({0:function(e,t){e.exports=function(e,t,r,o,n){var c,i=e=e||{},d=typeof e.default;"object"!==d&&"function"!==d||(c=e,i=e.default);var a="function"==typeof i?i.options:i;t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),o&&(a._scopeId=o);var s;if(n?(s=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(n)},a._ssrRegister=s):r&&(s=r),s){var u=a.functional,l=u?a.render:a.beforeCreate;u?a.render=function(e,t){return s.call(t),l(e,t)}:a.beforeCreate=l?[].concat(l,s):[s]}return{esModule:c,exports:i,options:a}}},1:function(e,t,r){"use strict";function o(e){if(!e)return null;var t=e.mdTheme;return t||"md-theme"!==e.$options._componentTag||(t=e.mdName),t||o(e.$parent)}Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{mdTheme:String},computed:{mdEffectiveTheme:function(){return o(this)||this.$material.currentTheme},themeClass:function(){return this.$material.prefix+this.mdEffectiveTheme}},watch:{mdTheme:function(e){this.$material.useTheme(e)}},beforeMount:function(){var e=this.mdTheme;this.$material.useTheme(e||"default")}},e.exports=t.default},159:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e){e.component("md-checkbox",i.default),e.material.styles.push(a.default)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var c=r(160),i=o(c),d=r(164),a=o(d);e.exports=t.default},160:function(e,t,r){function o(e){r(161)}var n=r(0)(r(162),r(163),o,null,null);e.exports=n.exports},161:function(e,t){},162:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),n=(function(e){return e&&e.__esModule?e:{default:e}})(o);t.default={name:"md-checkbox",props:{name:String,value:[String,Boolean,Array],id:String,disabled:Boolean,mdValue:[String]},mixins:[n.default],data:function(){return{checked:this.value||!1}},computed:{classes:function(){return{"md-checked":this.isArray()?this.value.indexOf(this.mdValue)>=0:this.checked,"md-disabled":this.disabled}}},watch:{value:function(){this.isArray()||(this.checked=!!this.value)}},methods:{toggleCheck:function(e){if(!this.disabled)if(this.isArray()){var t=this.value.indexOf(this.mdValue);t>=0?this.value.splice(t,1):this.value.push(this.mdValue),this.$emit("change",this.value,e),this.$emit("input",this.value,e)}else this.checked=!this.checked,this.$emit("change",this.checked,e),this.$emit("input",this.checked,e)},isArray:function(){return Array.isArray(this.value)}}},e.exports=t.default},163:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"md-checkbox",class:[e.themeClass,e.classes]},[r("div",{staticClass:"md-checkbox-container",attrs:{tabindex:"0"},on:{click:function(t){t.stopPropagation(),e.toggleCheck(t)}}},[r("input",{attrs:{type:"checkbox",name:e.name,id:e.id,disabled:e.disabled,tabindex:"-1"},domProps:{value:e.mdValue,checked:e.checked}}),e._v(" "),r("md-ink-ripple",{attrs:{"md-disabled":e.disabled}})],1),e._v(" "),e.$slots.default?r("label",{staticClass:"md-checkbox-label",attrs:{for:e.id||e.name},on:{click:function(t){t.preventDefault(),e.toggleCheck(t)}}},[e._t("default")],2):e._e()])},staticRenderFns:[]}},164:function(e,t){e.exports=".THEME_NAME.md-checkbox.md-checked .md-checkbox-container{background-color:ACCENT-COLOR;border-color:ACCENT-COLOR}.THEME_NAME.md-checkbox.md-checked .md-checkbox-container:after{border-color:ACCENT-CONTRAST}.THEME_NAME.md-checkbox .md-ink-ripple{color:ACCENT-COLOR}.THEME_NAME.md-checkbox .md-ripple{opacity:.26}.THEME_NAME.md-checkbox.md-primary.md-checked .md-checkbox-container{background-color:PRIMARY-COLOR;border-color:PRIMARY-COLOR}.THEME_NAME.md-checkbox.md-primary.md-checked .md-checkbox-container:after{border-color:PRIMARY-CONTRAST}.THEME_NAME.md-checkbox.md-primary .md-ink-ripple{color:PRIMARY-COLOR}.THEME_NAME.md-checkbox.md-warn.md-checked .md-checkbox-container{background-color:WARN-COLOR;border-color:WARN-COLOR}.THEME_NAME.md-checkbox.md-warn.md-checked .md-checkbox-container:after{border-color:WARN-CONTRAST}.THEME_NAME.md-checkbox.md-warn .md-ink-ripple{color:WARN-COLOR}.THEME_NAME.md-checkbox.md-disabled.md-checked .md-checkbox-container{background-color:rgba(0,0,0,0.26);border-color:transparent}.THEME_NAME.md-checkbox.md-disabled:not(.md-checked) .md-checkbox-container{border-color:rgba(0,0,0,0.26)}\n"},454:function(e,t,r){e.exports=r(159)}})}));