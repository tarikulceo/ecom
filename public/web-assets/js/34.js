/*! For license information please see 34.js.LICENSE.txt?id=a840a1c7ead2e6bc0227 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{eRvf:function(t,e,r){"use strict";r.r(e);var o=r("ta7f"),n=r("51uj"),i=r("L2JU");function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(){a=function(){return e};var t,e={},r=Object.prototype,o=r.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function h(t,e,r,o){var i=e&&e.prototype instanceof y?e:y,s=Object.create(i.prototype),a=new q(o||[]);return n(s,"_invoke",{value:j(t,r,a)}),s}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var p="suspendedStart",m="executing",v="completed",_={};function y(){}function w(){}function g(){}var b={};f(b,c,(function(){return this}));var $=Object.getPrototypeOf,x=$&&$($(S([])));x&&x!==r&&o.call(x,c)&&(b=x);var P=g.prototype=y.prototype=Object.create(b);function O(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){function r(n,i,a,c){var u=d(t[n],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==s(f)&&o.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,o){function n(){return new e((function(e,n){r(t,o,e,n)}))}return i=i?i.then(n,n):n()}})}function j(e,r,o){var n=p;return function(i,s){if(n===m)throw Error("Generator is already running");if(n===v){if("throw"===i)throw s;return{value:t,done:!0}}for(o.method=i,o.arg=s;;){var a=o.delegate;if(a){var c=E(a,o);if(c){if(c===_)continue;return c}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if(n===p)throw n=v,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);n=m;var u=d(e,r,o);if("normal"===u.type){if(n=o.done?v:"suspendedYield",u.arg===_)continue;return{value:u.arg,done:o.done}}"throw"===u.type&&(n=v,o.method="throw",o.arg=u.arg)}}}function E(e,r){var o=r.method,n=e.iterator[o];if(n===t)return r.delegate=null,"throw"===o&&e.iterator.return&&(r.method="return",r.arg=t,E(e,r),"throw"===r.method)||"return"!==o&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+o+"' method")),_;var i=d(n,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,_;var s=i.arg;return s?s.done?(r[e.resultName]=s.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,_):s:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,_)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function q(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function S(e){if(e||""===e){var r=e[c];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function r(){for(;++n<e.length;)if(o.call(e,n))return r.value=e[n],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(s(e)+" is not iterable")}return w.prototype=g,n(P,"constructor",{value:g,configurable:!0}),n(g,"constructor",{value:w,configurable:!0}),w.displayName=f(g,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,f(t,l,"GeneratorFunction")),t.prototype=Object.create(P),t},e.awrap=function(t){return{__await:t}},O(C.prototype),f(C.prototype,u,(function(){return this})),e.AsyncIterator=C,e.async=function(t,r,o,n,i){void 0===i&&(i=Promise);var s=new C(h(t,r,o,n),i);return e.isGeneratorFunction(r)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},O(P),f(P,l,"Generator"),f(P,c,(function(){return this})),f(P,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var o in e)r.push(o);return r.reverse(),function t(){for(;r.length;){var o=r.pop();if(o in e)return t.value=o,t.done=!1,t}return t.done=!0,t}},e.values=S,q.prototype={constructor:q,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(k),!e)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(o,n){return a.type="throw",a.arg=e,r.next=o,n&&(r.method="next",r.arg=t),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var s=this.tryEntries[i],a=s.completion;if("root"===s.tryLoc)return n("end");if(s.tryLoc<=this.prev){var c=o.call(s,"catchLoc"),u=o.call(s,"finallyLoc");if(c&&u){if(this.prev<s.catchLoc)return n(s.catchLoc,!0);if(this.prev<s.finallyLoc)return n(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return n(s.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return n(s.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=t,s.arg=e,i?(this.method="next",this.next=i.finallyLoc,_):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),_},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),_}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var o=r.completion;if("throw"===o.type){var n=o.arg;k(r)}return n}}throw Error("illegal catch attempt")},delegateYield:function(e,r,o){return this.delegate={iterator:S(e),resultName:r,nextLoc:o},"next"===this.method&&(this.arg=t),_}},e}function c(t,e,r,o,n,i,s){try{var a=t[i](s),c=a.value}catch(t){return void r(t)}a.done?e(c):Promise.resolve(c).then(o,n)}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=s(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!=s(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==s(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var h={data:function(){return{mobileInputProps:{inputOptions:{type:"tel",placeholder:"phone number"},dropdownOptions:{showDialCodeInSelection:!1,showFlags:!0,showDialCodeInList:!0},autoDefaultCountry:!1,validCharactersOnly:!0,mode:"international"},form:{email:"",code:"",password:"",confirmPassword:"",invalidPhone:!0,showInvalidPhone:!1},resetWith:"email",loading:!1}},components:{VueTelInput:n.VueTelInput},validations:{form:{email:{requiredIf:Object(o.requiredIf)((function(){return"email"==this.resetWith})),email:o.email},phone:{requiredIf:Object(o.requiredIf)((function(){return"phone"==this.resetWith}))},code:{required:o.required},password:{required:o.required,minLength:Object(o.minLength)(6)},confirmPassword:{required:o.required,sameAsPassword:Object(o.sameAs)("password")}}},computed:l(l(l({},Object(i.c)("app",["availableCountries"])),Object(i.c)("auth",["authSettings"])),{},{emailErrors:function(){var t=[];return this.$v.form.email.$dirty?(!this.$v.form.email.requiredIf&&t.push(this.$i18n.t("this_field_is_required")),!this.$v.form.email.email&&t.push(this.$i18n.t("this_field_is_required_a_valid_email")),t):t},codeErrors:function(){var t=[];return this.$v.form.code.$dirty?(!this.$v.form.code.required&&t.push(this.$i18n.t("this_field_is_required")),t):t},passwordErrors:function(){var t=[];return this.$v.form.password.$dirty?(!this.$v.form.password.required&&t.push(this.$i18n.t("this_field_is_required")),!this.$v.form.password.minLength&&t.push(this.$i18n.t("password_must_be_minimum_6_characters")),t):t},confirmPasswordErrors:function(){var t=[];return this.$v.form.confirmPassword.$dirty?(!this.$v.form.confirmPassword.required&&t.push(this.$i18n.t("this_field_is_required")),!this.$v.form.confirmPassword.sameAsPassword&&t.push(this.$i18n.t("password_and_confirm_password_should_match")),t):t}}),methods:{phoneValidate:function(t){this.form.invalidPhone=!t.valid,t.valid&&(this.form.showInvalidPhone=!1)},resetPassword:function(){var t,e=this;return(t=a().mark((function t(){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.$v.form.$touch(),!e.$v.form.$anyError){t.next=3;break}return t.abrupt("return");case 3:if("phone"!=e.resetWith||!e.form.invalidPhone){t.next=6;break}return e.form.showInvalidPhone=!0,t.abrupt("return");case 6:return e.form.code=e.form.code.replace(/\s/g,""),e.loading=!0,t.next=10,e.call_api("post","auth/password/reset",e.form);case 10:(r=t.sent).data.success?(e.$router.push({name:"Login"}),e.snack({message:r.data.message})):e.snack({message:r.data.message,color:"red"}),e.loading=!1;case 13:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(o,n){var i=t.apply(e,r);function s(t){c(i,o,n,s,a,"next",t)}function a(t){c(i,o,n,s,a,"throw",t)}s(void 0)}))})()}},created:function(){this.$route.params.email&&(this.form.email=this.$route.params.email),this.$route.params.phone?(this.form.phone=this.$route.params.phone,this.resetWith="phone"):("phone"==this.authSettings.customer_login_with||"email_phone"==this.authSettings.customer_login_with&&"phone"==this.authSettings.customer_otp_with)&&(this.resetWith="phone")}},d=r("KHd+"),p=Object(d.a)(h,(function(){var t=this,e=t._self._c;return e("div",[e("v-container",[e("v-row",[e("v-col",{staticClass:"mx-auto",attrs:{cols:"12",lg:"6",md:"8",sm:"10"}},[e("div",{staticClass:"my-5 my-lg-16 rounded-lg pa-5 border overflow-hidden shadow-light"},["email"==t.resetWith?e("div",{staticClass:"info--text mb-3"},[t._v("\n                        "+t._s(t.$t("a_verification_code_has_been_sent_to_your_email"))+"\n                    ")]):e("div",{staticClass:"info--text mb-3"},[t._v("\n                        "+t._s(t.$t("a_verification_code_has_been_sent_to_your_phone_number"))+"\n                    ")]),t._v(" "),e("h1",{staticClass:"text-uppercase lh-1 mb-4"},[e("span",{staticClass:"display-1 primary--text fw-900"},[t._v(t._s(t.$t("reset")))]),t._v(" "),e("span",{staticClass:"d-block display-1 fw-900 grey--text text--darken-3"},[t._v(t._s(t.$t("password")))])]),t._v(" "),"email"==t.resetWith?e("div",{staticClass:"fs-16 fw-500 mb-6"},[t._v(t._s(t.$t("enter_your_email_address_code__new_password")))]):e("div",{staticClass:"fs-16 fw-500 mb-6"},[t._v(t._s(t.$t("enter_your_phone_number_code__new_password")))]),t._v(" "),e("v-form",{ref:"loginForm",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.resetPassword()}}},["email"==t.resetWith?e("div",{staticClass:"mb-4"},[e("div",{staticClass:"mb-1 fs-13 fw-500"},[t._v(t._s(t.$t("email")))]),t._v(" "),e("v-text-field",{attrs:{placeholder:t.$t("email_address"),type:"email","error-messages":t.emailErrors,"hide-details":"auto",required:"",outlined:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1):t._e(),t._v(" "),"phone"==t.resetWith?e("div",{staticClass:"mb-4"},[e("div",{staticClass:"mb-1 fs-13 fw-500"},[t._v("\n                                "+t._s(t.$t("phone_number"))+"\n                            ")]),t._v(" "),e("vue-tel-input",t._b({attrs:{"only-countries":t.availableCountries},on:{validate:t.phoneValidate},scopedSlots:t._u([{key:"arrow-icon",fn:function(){return[e("span",{staticClass:"vti__dropdown-arrow"},[t._v(" ▼")])]},proxy:!0}],null,!1,2578343687),model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}},"vue-tel-input",t.mobileInputProps,!1)),t._v(" "),t.$v.form.phone.$error?e("div",{staticClass:"v-text-field__details mt-2 pl-3"},[e("div",{staticClass:"v-messages theme--light error--text",attrs:{role:"alert"}},[e("div",{staticClass:"v-messages__wrapper"},[e("div",{staticClass:"v-messages__message"},[t._v(t._s(t.$t("this_field_is_required")))])])])]):t._e(),t._v(" "),!t.$v.form.phone.$error&&t.form.showInvalidPhone?e("div",{staticClass:"v-text-field__details mt-2 pl-3"},[e("div",{staticClass:"v-messages theme--light error--text",attrs:{role:"alert"}},[e("div",{staticClass:"v-messages__wrapper"},[e("div",{staticClass:"v-messages__message"},[t._v("\n                                            "+t._s(t.$t("phone_number_must_be_valid"))+"\n                                        ")])])])]):t._e()],1):t._e(),t._v(" "),e("div",{staticClass:"mb-4"},[e("div",{staticClass:"mb-1 fs-13 fw-500"},[t._v(t._s(t.$t("code")))]),t._v(" "),e("v-otp-input",{attrs:{length:"6",type:"number","error-messages":t.codeErrors,"hide-details":"auto",disabled:t.loading,required:""},model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}})],1),t._v(" "),e("div",{staticClass:"mb-4"},[e("div",{staticClass:"mb-1 fs-13 fw-500"},[t._v(t._s(t.$t("password")))]),t._v(" "),e("v-text-field",{staticClass:"input-group--focused",attrs:{placeholder:"* * * * * * * *","error-messages":t.passwordErrors,type:"password","hide-details":"auto",required:"",outlined:""},on:{blur:function(e){return t.$v.form.password.$touch()}},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),t._v(" "),e("div",{staticClass:"mb-4"},[e("div",{staticClass:"mb-1 fs-13 fw-500"},[t._v(t._s(t.$t("confirm_password")))]),t._v(" "),e("v-text-field",{staticClass:"input-group--focused",attrs:{placeholder:"* * * * * * * *","error-messages":t.confirmPasswordErrors,type:"password","hide-details":"auto",required:"",outlined:""},on:{blur:function(e){return t.$v.form.confirmPassword.$touch()}},model:{value:t.form.confirmPassword,callback:function(e){t.$set(t.form,"confirmPassword",e)},expression:"form.confirmPassword"}})],1),t._v(" "),e("v-btn",{staticClass:"px-12 mb-4",attrs:{"x-large":"",elevation:"0",type:"submit",color:"primary",loading:t.loading,disabled:t.loading},on:{click:t.resetPassword}},[t._v(t._s(t.$t("reset_password")))])],1)],1)])],1)],1)],1)}),[],!1,null,null,null);e.default=p.exports}}]);