(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[105],{3999:function(e,t){"use strict";var n=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;t.validate=function(e){if(!e)return!1;if(e.length>254)return!1;if(!n.test(e))return!1;var t=e.split("@");return!(t[0].length>64)&&!t[1].split(".").some((function(e){return e.length>63}))}},316:function(e,t,n){"use strict";t.Z=void 0;var r,a=(r=n(365))&&r.__esModule?r:{default:r},o=n(3999);var s=function(e){var t=e.url,n=e.timeout;return new Promise((function(e,r){return(0,a.default)(t,{param:"c",timeout:n},(function(t,n){t&&r(t),n&&e(n)}))}))},c=function(e){var t="";for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r="group["===n.substring(0,6)?n:n.toUpperCase();t=t.concat("&".concat(r,"=").concat(e[n]))}return t},i=function(e,t,n){var r=(0,o.validate)(e),a=encodeURIComponent(e);if(!r)return Promise.resolve({result:"error",msg:"The email you entered is not valid."});var i="https://qwinn.us11.list-manage.com/subscribe/post?u=8b781f0a06ff35e2ba19fb3d8&amp;id=2b4eac9494&amp;f_id=00f2a3e0f0";arguments.length<3&&"string"==typeof t?i=t:"string"==typeof n&&(i=n),i=i.replace(/\/post/g,"/post-json");var u="&EMAIL=".concat(a).concat(c(t)),l="".concat(i).concat(u);return s({url:l,timeout:3500})};t.Z=i},8871:function(e,t,n){"use strict";n.r(t);var r=n(7294),a=n(7768),o=n(316);t.default=e=>{let{location:t}=e;const n=(0,r.useRef)(null),{0:s,1:c}=(0,r.useState)(""),{0:i,1:u}=(0,r.useState)(""),{0:l,1:m}=(0,r.useState)(""),{0:f,1:d}=(0,r.useState)(!1),{0:p,1:g}=(0,r.useState)(!1),{0:h,1:v}=(0,r.useState)(!1),{0:y,1:w}=(0,r.useState)(!1),b="qwinn-subscribed";(0,r.useEffect)((()=>{if(window){"true"===window.localStorage.getItem(b)&&w(!0)}}),[]);const x=e=>{e.preventDefault();const t=e.target.name,n=e.target.value;switch(t){case"personName":c(n);break;case"personLastName":u(n);break;case"personEmail":m(n)}},E=e=>{console.error(e),d(e),v(!0)};return r.createElement(a.Z,{currentPathname:t.pathname},r.createElement("div",{className:"flex flex-col grow self-center justify-center w-full lg:w-[940px] max-w-[940px] sm:mx-4"},r.createElement("div",{className:"flex flex-col items-center p-8 rounded text-black dark:text-white bg-white dark:bg-slate/50"},r.createElement("p",{className:"text-center"},"Sign up to our mailing list to catch all the latest,"),r.createElement("p",{className:"text-center"},"including news on upcoming releases, and more!"),r.createElement("form",{ref:n,onSubmit:e=>{if(e.preventDefault(),s&&i&&l)if(y)g("You are already on our mailing list :)");else try{(0,o.Z)(l,{FNAME:s,LNAME:i}).then((e=>{var t;"success"===(null==e?void 0:e.result)?(d(!1),g(e.msg),null===(t=window)||void 0===t||t.localStorage.setItem(b,"true")):E(null==e?void 0:e.result)})).catch((e=>E(e)))}catch(t){E(t)}}},r.createElement("div",{className:"flex flex-col mx-auto w-[300px]"},r.createElement("input",{className:"px-8 py-2 mb-2",type:"text",placeholder:"first name",name:"personName",value:s,onChange:x,minLength:3,required:!0}),r.createElement("input",{className:"px-8 py-2 mb-2",type:"text",placeholder:"last name",name:"personLastName",value:i,onChange:x,minLength:3,required:!0}),r.createElement("input",{className:"px-8 py-2",type:"email",placeholder:"email",name:"personEmail",value:l,onChange:x,required:!0})),f&&r.createElement("p",null,""+f),p&&r.createElement("p",null,p),!f&&!p&&r.createElement("p",{className:"text-center text-sm"},"(you can opt-out anytime)"),r.createElement("div",null,r.createElement("input",{className:"text-center",type:"submit",value:"subscribe",disabled:h}))))))}},365:function(e,t,n){var r=n(1445)("jsonp");e.exports=function(e,t,n){"function"==typeof t&&(n=t,t={});t||(t={});var s,c,i=t.prefix||"__jp",u=t.name||i+a++,l=t.param||"callback",m=null!=t.timeout?t.timeout:6e4,f=encodeURIComponent,d=document.getElementsByTagName("script")[0]||document.head;m&&(c=setTimeout((function(){p(),n&&n(new Error("Timeout"))}),m));function p(){s.parentNode&&s.parentNode.removeChild(s),window[u]=o,c&&clearTimeout(c)}return window[u]=function(e){r("jsonp got",e),p(),n&&n(null,e)},e=(e+=(~e.indexOf("?")?"&":"?")+l+"="+f(u)).replace("?&","?"),r('jsonp req "%s"',e),(s=document.createElement("script")).src=e,d.parentNode.insertBefore(s,d),function(){window[u]&&p()}};var a=0;function o(){}},1445:function(e,t,n){function r(){var e;try{e=t.storage.debug}catch(n){}return!e&&"undefined"!=typeof process&&"env"in process&&(e={}.DEBUG),e}(t=e.exports=n(4805)).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),!n)return;var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var a=0,o=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(a++,"%c"===e&&(o=a))})),e.splice(o,0,r)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(n){}},t.load=r,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(r())},4805:function(e,t,n){var r;function a(e){function n(){if(n.enabled){var e=n,a=+new Date,o=a-(r||a);e.diff=o,e.prev=r,e.curr=a,r=a;for(var s=new Array(arguments.length),c=0;c<s.length;c++)s[c]=arguments[c];s[0]=t.coerce(s[0]),"string"!=typeof s[0]&&s.unshift("%O");var i=0;s[0]=s[0].replace(/%([a-zA-Z%])/g,(function(n,r){if("%%"===n)return n;i++;var a=t.formatters[r];if("function"==typeof a){var o=s[i];n=a.call(e,o),s.splice(i,1),i--}return n})),t.formatArgs.call(e,s),(n.log||t.log||console.log.bind(console)).apply(e,s)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=function(e){var n,r=0;for(n in e)r=(r<<5)-r+e.charCodeAt(n),r|=0;return t.colors[Math.abs(r)%t.colors.length]}(e),"function"==typeof t.init&&t.init(n),n}(t=e.exports=a.debug=a.default=a).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"==typeof e?e:"").split(/[\s,]+/),r=n.length,a=0;a<r;a++)n[a]&&("-"===(e=n[a].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(40),t.names=[],t.skips=[],t.formatters={}},40:function(e){var t=1e3,n=60*t,r=60*n,a=24*r,o=365.25*a;function s(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,c){c=c||{};var i,u=typeof e;if("string"===u&&e.length>0)return function(e){if((e=String(e)).length>100)return;var s=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!s)return;var c=parseFloat(s[1]);switch((s[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return c*o;case"days":case"day":case"d":return c*a;case"hours":case"hour":case"hrs":case"hr":case"h":return c*r;case"minutes":case"minute":case"mins":case"min":case"m":return c*n;case"seconds":case"second":case"secs":case"sec":case"s":return c*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:return}}(e);if("number"===u&&!1===isNaN(e))return c.long?s(i=e,a,"day")||s(i,r,"hour")||s(i,n,"minute")||s(i,t,"second")||i+" ms":function(e){if(e>=a)return Math.round(e/a)+"d";if(e>=r)return Math.round(e/r)+"h";if(e>=n)return Math.round(e/n)+"m";if(e>=t)return Math.round(e/t)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}}}]);
//# sourceMappingURL=component---src-pages-subscribe-tsx-5aabf8d574f86fa715e4.js.map