(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d13cb62"],{"000c":function(t,e,n){t.exports=n.p+"assets/img/sponsor.svg"},"0ef2":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"#nameCard[data-v-2f42dfa0]{margin-top:40px;width:90%;height:130px;padding-top:5px;background-color:#fff;border-radius:5px;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);color:#606266}#essentialInfo[data-v-2f42dfa0],#nameCard[data-v-2f42dfa0]{position:relative;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}#essentialInfo[data-v-2f42dfa0]{display:-webkit-box;display:-ms-flexbox;display:flex;height:80px;padding-left:15px;padding-right:15px}#essentialInfo img[data-v-2f42dfa0]{position:relative;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:60px;height:60px;margin-right:10px;border:1px solid #ff7e67;border-radius:4px}#essentialInfo div[data-v-2f42dfa0]{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-top:10px;margin-bottom:10px}#essentialInfo div p[data-v-2f42dfa0]{margin:0;padding:0}#essentialInfo div p[data-v-2f42dfa0]:first-child{-webkit-box-flex:2;-ms-flex:2;flex:2;font-size:20px;font-weight:700}#essentialInfo div p[data-v-2f42dfa0]:nth-child(2){-webkit-box-flex:1;-ms-flex:1;flex:1;color:#909399}#usageInfo[data-v-2f42dfa0]{height:40px;margin-bottom:5px;text-align:center;line-height:40px}#usageInfo[data-v-2f42dfa0],#usageInfo li[data-v-2f42dfa0]{display:-webkit-box;display:-ms-flexbox;display:flex}#usageInfo li[data-v-2f42dfa0]{-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;position:relative}#usageInfo li p[data-v-2f42dfa0]{-webkit-box-flex:1;-ms-flex:1;flex:1;margin:0;padding:0}#usageInfo li p[data-v-2f42dfa0]:first-child{line-height:20px;font-size:18px;font-weight:700}#usageInfo li p[data-v-2f42dfa0]:nth-child(2){line-height:20px;font-size:14px;color:#909399}",""])},"0f3b":function(t,e,n){var r=n("f2d1");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=n("499e").default;o("66dc547e",r,!0,{sourceMap:!1,shadowMode:!1})},"238e":function(t,e,n){t.exports=n.p+"assets/img/basicInfo.svg"},"28a0":function(t,e){"function"===typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},"2cf5":function(t,e,n){var r=n("0ef2");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=n("499e").default;o("03a0f1a7",r,!0,{sourceMap:!1,shadowMode:!1})},3022:function(t,e,n){(function(t){var r=Object.getOwnPropertyDescriptors||function(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++)n[e[r]]=Object.getOwnPropertyDescriptor(t,e[r]);return n},o=/%[sdj%]/g;e.format=function(t){if(!k(t)){for(var e=[],n=0;n<arguments.length;n++)e.push(s(arguments[n]));return e.join(" ")}n=1;for(var r=arguments,i=r.length,a=String(t).replace(o,(function(t){if("%%"===t)return"%";if(n>=i)return t;switch(t){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(e){return"[Circular]"}default:return t}})),l=r[n];n<i;l=r[++n])x(l)||!I(l)?a+=" "+l:a+=" "+s(l);return a},e.deprecate=function(n,r){if("undefined"!==typeof t&&!0===t.noDeprecation)return n;if("undefined"===typeof t)return function(){return e.deprecate(n,r).apply(this,arguments)};var o=!1;function i(){if(!o){if(t.throwDeprecation)throw new Error(r);t.traceDeprecation?console.trace(r):console.error(r),o=!0}return n.apply(this,arguments)}return i};var i,a={};function s(t,n){var r={seen:[],stylize:u};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),b(n)?r.showHidden=n:n&&e._extend(r,n),_(r.showHidden)&&(r.showHidden=!1),_(r.depth)&&(r.depth=2),_(r.colors)&&(r.colors=!1),_(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=l),f(r,t,r.depth)}function l(t,e){var n=s.styles[e];return n?"["+s.colors[n][0]+"m"+t+"["+s.colors[n][1]+"m":t}function u(t,e){return t}function c(t){var e={};return t.forEach((function(t,n){e[t]=!0})),e}function f(t,n,r){if(t.customInspect&&n&&T(n.inspect)&&n.inspect!==e.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,t);return k(o)||(o=f(t,o,r)),o}var i=p(t,n);if(i)return i;var a=Object.keys(n),s=c(a);if(t.showHidden&&(a=Object.getOwnPropertyNames(n)),j(n)&&(a.indexOf("message")>=0||a.indexOf("description")>=0))return d(n);if(0===a.length){if(T(n)){var l=n.name?": "+n.name:"";return t.stylize("[Function"+l+"]","special")}if(O(n))return t.stylize(RegExp.prototype.toString.call(n),"regexp");if(E(n))return t.stylize(Date.prototype.toString.call(n),"date");if(j(n))return d(n)}var u,b="",x=!1,y=["{","}"];if(v(n)&&(x=!0,y=["[","]"]),T(n)){var w=n.name?": "+n.name:"";b=" [Function"+w+"]"}return O(n)&&(b=" "+RegExp.prototype.toString.call(n)),E(n)&&(b=" "+Date.prototype.toUTCString.call(n)),j(n)&&(b=" "+d(n)),0!==a.length||x&&0!=n.length?r<0?O(n)?t.stylize(RegExp.prototype.toString.call(n),"regexp"):t.stylize("[Object]","special"):(t.seen.push(n),u=x?g(t,n,r,s,a):a.map((function(e){return m(t,n,r,s,e,x)})),t.seen.pop(),h(u,b,y)):y[0]+b+y[1]}function p(t,e){if(_(e))return t.stylize("undefined","undefined");if(k(e)){var n="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(n,"string")}return w(e)?t.stylize(""+e,"number"):b(e)?t.stylize(""+e,"boolean"):x(e)?t.stylize("null","null"):void 0}function d(t){return"["+Error.prototype.toString.call(t)+"]"}function g(t,e,n,r,o){for(var i=[],a=0,s=e.length;a<s;++a)L(e,String(a))?i.push(m(t,e,n,r,String(a),!0)):i.push("");return o.forEach((function(o){o.match(/^\d+$/)||i.push(m(t,e,n,r,o,!0))})),i}function m(t,e,n,r,o,i){var a,s,l;if(l=Object.getOwnPropertyDescriptor(e,o)||{value:e[o]},l.get?s=l.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):l.set&&(s=t.stylize("[Setter]","special")),L(r,o)||(a="["+o+"]"),s||(t.seen.indexOf(l.value)<0?(s=x(n)?f(t,l.value,null):f(t,l.value,n-1),s.indexOf("\n")>-1&&(s=i?s.split("\n").map((function(t){return"  "+t})).join("\n").substr(2):"\n"+s.split("\n").map((function(t){return"   "+t})).join("\n"))):s=t.stylize("[Circular]","special")),_(a)){if(i&&o.match(/^\d+$/))return s;a=JSON.stringify(""+o),a.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=t.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=t.stylize(a,"string"))}return a+": "+s}function h(t,e,n){var r=t.reduce((function(t,e){return 0,e.indexOf("\n")>=0&&0,t+e.replace(/\u001b\[\d\d?m/g,"").length+1}),0);return r>60?n[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+n[1]:n[0]+e+" "+t.join(", ")+" "+n[1]}function v(t){return Array.isArray(t)}function b(t){return"boolean"===typeof t}function x(t){return null===t}function y(t){return null==t}function w(t){return"number"===typeof t}function k(t){return"string"===typeof t}function N(t){return"symbol"===typeof t}function _(t){return void 0===t}function O(t){return I(t)&&"[object RegExp]"===S(t)}function I(t){return"object"===typeof t&&null!==t}function E(t){return I(t)&&"[object Date]"===S(t)}function j(t){return I(t)&&("[object Error]"===S(t)||t instanceof Error)}function T(t){return"function"===typeof t}function $(t){return null===t||"boolean"===typeof t||"number"===typeof t||"string"===typeof t||"symbol"===typeof t||"undefined"===typeof t}function S(t){return Object.prototype.toString.call(t)}function z(t){return t<10?"0"+t.toString(10):t.toString(10)}e.debuglog=function(n){if(_(i)&&(i=Object({NODE_ENV:"production",BASE_URL:""}).NODE_DEBUG||""),n=n.toUpperCase(),!a[n])if(new RegExp("\\b"+n+"\\b","i").test(i)){var r=t.pid;a[n]=function(){var t=e.format.apply(e,arguments);console.error("%s %d: %s",n,r,t)}}else a[n]=function(){};return a[n]},e.inspect=s,s.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},s.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=v,e.isBoolean=b,e.isNull=x,e.isNullOrUndefined=y,e.isNumber=w,e.isString=k,e.isSymbol=N,e.isUndefined=_,e.isRegExp=O,e.isObject=I,e.isDate=E,e.isError=j,e.isFunction=T,e.isPrimitive=$,e.isBuffer=n("d60a");var P=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function D(){var t=new Date,e=[z(t.getHours()),z(t.getMinutes()),z(t.getSeconds())].join(":");return[t.getDate(),P[t.getMonth()],e].join(" ")}function L(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.log=function(){console.log("%s - %s",D(),e.format.apply(e,arguments))},e.inherits=n("28a0"),e._extend=function(t,e){if(!e||!I(e))return t;var n=Object.keys(e),r=n.length;while(r--)t[n[r]]=e[n[r]];return t};var A="undefined"!==typeof Symbol?Symbol("util.promisify.custom"):void 0;function C(t,e){if(!t){var n=new Error("Promise was rejected with a falsy value");n.reason=t,t=n}return e(t)}function B(e){if("function"!==typeof e)throw new TypeError('The "original" argument must be of type Function');function n(){for(var n=[],r=0;r<arguments.length;r++)n.push(arguments[r]);var o=n.pop();if("function"!==typeof o)throw new TypeError("The last argument must be of type Function");var i=this,a=function(){return o.apply(i,arguments)};e.apply(this,n).then((function(e){t.nextTick(a,null,e)}),(function(e){t.nextTick(C,e,a)}))}return Object.setPrototypeOf(n,Object.getPrototypeOf(e)),Object.defineProperties(n,r(e)),n}e.promisify=function(t){if("function"!==typeof t)throw new TypeError('The "original" argument must be of type Function');if(A&&t[A]){var e=t[A];if("function"!==typeof e)throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(e,A,{value:e,enumerable:!1,writable:!1,configurable:!0}),e}function e(){for(var e,n,r=new Promise((function(t,r){e=t,n=r})),o=[],i=0;i<arguments.length;i++)o.push(arguments[i]);o.push((function(t,r){t?n(t):e(r)}));try{t.apply(this,o)}catch(a){n(a)}return r}return Object.setPrototypeOf(e,Object.getPrototypeOf(t)),A&&Object.defineProperty(e,A,{value:e,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(e,r(t))},e.promisify.custom=A,e.callbackify=B}).call(this,n("f28c"))},"410d":function(t,e,n){t.exports=n.p+"assets/img/visitor.svg"},4127:function(t,e,n){t.exports=n.p+"assets/img/setting.svg"},6028:function(t,e,n){"use strict";var r=n("2cf5"),o=n.n(r);o.a},"71b9":function(t,e,n){t.exports=n.p+"assets/img/Alipay.jpg"},"7ec3":function(t,e,n){t.exports=n.p+"assets/img/up_w.svg"},"8f06":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"profile"}},[r("div",{attrs:{id:"background"}}),r("name-card"),r("option-list"),r("button",{attrs:{id:"logoutBtn"},on:{click:t.logout}},[t._v("logout")]),r("img",{attrs:{id:"backBtn",src:n("7ec3"),alt:""},on:{click:t.back}})],1)},o=[],i=(n("a481"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"nameCard"}},[n("div",{attrs:{id:"essentialInfo"}},[n("img",{attrs:{src:t.avatarUrl,alt:""}}),n("div",[n("p",[t._v(t._s(t.username))]),n("p",[t._v("Lv : "+t._s(t.level))])])]),n("ul",{attrs:{id:"usageInfo"}},[n("li",[n("p",[t._v(t._s(t.issueNum))]),n("p",[t._v("发布")])]),t._v("|\n        "),n("li",[n("p",[t._v(t._s(t.followNum))]),n("p",[t._v("关注")])]),t._v("|\n        "),n("li",[n("p",[t._v(t._s(t.collectNum))]),n("p",[t._v("收藏")])]),t._v("|\n        "),n("li",[n("p",[t._v(t._s(t.fanNum))]),n("p",[t._v("粉丝")])])])])}),a=[],s={name:"NameCard",data:function(){return{avatarUrl:n("410d"),username:"未登录",level:0,issueNum:0,followNum:0,collectNum:0,fanNum:0}},methods:{},computed:{isLogin:function(){return this.$store.state.isLogin}},watch:{isLogin:function(){1==this.$store.state.isLogin?(this.username=this.$store.state.userInfo.username,this.level=this.$store.state.userInfo.level,this.issueNum=this.$store.state.userInfo.issueNum,this.followNum=this.$store.state.userInfo.followNum,this.collectNum=this.$store.state.userInfo.collectNum,this.fanNum=this.$store.state.userInfo.fanNum):(this.avatarUrl=n("410d"),this.username="未登录",this.level=0,this.issueNum=0,this.followNum=0,this.collectNum=0,this.fanNum=0)}},created:function(){1==this.$store.state.isLogin?(this.username=this.$store.state.userInfo.username,this.level=this.$store.state.userInfo.level,this.issueNum=this.$store.state.userInfo.issueNum,this.followNum=this.$store.state.userInfo.followNum,this.collectNum=this.$store.state.userInfo.collectNum,this.fanNum=this.$store.state.userInfo.fanNum):(this.avatarUrl=n("410d"),this.username="未登录",this.level=0,this.issueNum=0,this.followNum=0,this.collectNum=0,this.fanNum=0)}},l=s,u=(n("6028"),n("2877")),c=Object(u["a"])(l,i,a,!1,null,"2f42dfa0",null),f=c.exports,p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{attrs:{id:"optionList"}},[r("li",{staticClass:"optionItem"},[r("p",{on:{click:function(e){return e.target!==e.currentTarget?null:t.unfold(e)}}},[r("img",{attrs:{src:n("238e"),alt:""}}),t._v("\n            个人信息\n        ")]),r("div")]),r("hr"),r("li",{staticClass:"optionItem"},[r("p",{on:{click:function(e){return e.target!==e.currentTarget?null:t.unfold(e)}}},[r("img",{attrs:{src:n("ce11"),alt:""}}),t._v("\n            账号安全\n        ")]),r("div")]),r("hr"),r("li",{staticClass:"optionItem"},[r("p",{on:{click:function(e){return e.target!==e.currentTarget?null:t.unfold(e)}}},[r("img",{attrs:{src:n("4127"),alt:""}}),t._v("\n            设置\n        ")]),r("div")]),r("hr"),r("li",{staticClass:"optionItem"},[r("p",{on:{click:function(e){return e.target!==e.currentTarget?null:t.unfold(e)}}},[r("img",{attrs:{src:n("dc89"),alt:""}}),t._v("\n            关于\n        ")]),t._m(0)]),r("hr"),r("li",{staticClass:"optionItem"},[r("p",{on:{click:function(e){return e.target!==e.currentTarget?null:t.unfold(e)}}},[r("img",{attrs:{src:n("000c"),alt:""}}),t._v("\n            无偿资助开发者\n        ")]),t._m(1)])])},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n            Version: 1.01 Beta/Preview "),n("br"),t._v("\n            Developer: Morilence"),n("br"),t._v("\n            Contact us(me): 1280659615@qq.com"),n("br"),t._v("\n            Product communication group: "),n("span",{staticStyle:{color:"red"}},[t._v("GUESS")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("img",{attrs:{src:n("71b9"),alt:""}}),r("img",{attrs:{src:n("ef2a"),alt:""}})])}],g=(n("3022"),{name:"OptionList",data:function(){return{lastActiveEl:null}},methods:{unfold:function(t){null!=this.lastActiveEl&&this.lastActiveEl!=t.target&&(this.lastActiveEl.parentNode.getElementsByTagName("div")[0].style.display=""),""==t.target.parentNode.getElementsByTagName("div")[0].style.display?t.target.parentNode.getElementsByTagName("div")[0].style.display="block":t.target.parentNode.getElementsByTagName("div")[0].style.display="",this.lastActiveEl=t.target}}}),m=g,h=(n("d25b"),Object(u["a"])(m,p,d,!1,null,"a750fc3e",null)),v=h.exports,b={name:"Profile",components:{NameCard:f,OptionList:v},data:function(){return{}},methods:{back:function(){this.$router.replace(this.$store.state.latestStay)},logout:function(){this.$store.commit("setIsLogin",!1),this.$store.commit("setUserInfo",{}),this.$router.replace("/")}},created:function(){}},x=b,y=(n("d06a"),Object(u["a"])(x,r,o,!1,null,"e58e40a8",null));e["default"]=y.exports},ce11:function(t,e,n){t.exports=n.p+"assets/img/security.svg"},d06a:function(t,e,n){"use strict";var r=n("0f3b"),o=n.n(r);o.a},d25b:function(t,e,n){"use strict";var r=n("d907"),o=n.n(r);o.a},d60a:function(t,e){t.exports=function(t){return t&&"object"===typeof t&&"function"===typeof t.copy&&"function"===typeof t.fill&&"function"===typeof t.readUInt8}},d699:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"#optionList[data-v-a750fc3e]{position:relative;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:90%;margin-top:15px;margin-bottom:10px;overflow:hidden;background-color:#fff;border-radius:5px;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04)}.optionItem[data-v-a750fc3e]{margin-top:15px;margin-bottom:15px}.optionItem img[data-v-a750fc3e]{display:inline-block;width:22px;height:22px}.optionItem p[data-v-a750fc3e]{margin:0;padding:0;margin-bottom:10px;padding-left:15px;font-size:17px;color:#606266}.optionItem p img[data-v-a750fc3e]{margin-bottom:3px}.optionItem div[data-v-a750fc3e]{display:none;margin-top:15px;padding-left:15px;padding-right:15px;min-height:80px;background-color:#fff;color:#909399;font-size:12px}.optionItem div img[data-v-a750fc3e]{width:auto;height:auto;max-width:95%;max-height:100%}.optionItem div img[data-v-a750fc3e],hr[data-v-a750fc3e]{position:relative;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}hr[data-v-a750fc3e]{margin:0}",""])},d907:function(t,e,n){var r=n("d699");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=n("499e").default;o("95713a8c",r,!0,{sourceMap:!1,shadowMode:!1})},dc89:function(t,e,n){t.exports=n.p+"assets/img/about.svg"},ef2a:function(t,e,n){t.exports=n.p+"assets/img/WeChat.png"},f28c:function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}function l(t){if(r===clearTimeout)return clearTimeout(t);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{return r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(function(){try{n="function"===typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"===typeof clearTimeout?clearTimeout:a}catch(t){r=a}})();var u,c=[],f=!1,p=-1;function d(){f&&u&&(f=!1,u.length?c=u.concat(c):p=-1,c.length&&g())}function g(){if(!f){var t=s(d);f=!0;var e=c.length;while(e){u=c,c=[];while(++p<e)u&&u[p].run();p=-1,e=c.length}u=null,f=!1,l(t)}}function m(t,e){this.fun=t,this.array=e}function h(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new m(t,e)),1!==c.length||f||s(g)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},f2d1:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"#profile[data-v-e58e40a8]{width:100%}#backBtn[data-v-e58e40a8]{position:fixed;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);bottom:10px;width:90%;height:28px;padding-left:22px;padding-right:22px;border-top:1.5px solid #ff7e67;border-radius:30px 30px 10px 10px/30px 30px 10px 10px;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04)}#backBtn[data-v-e58e40a8],#background[data-v-e58e40a8]{background-color:#ff7e67}#background[data-v-e58e40a8]{position:absolute;top:0;width:100%;height:140px;border-radius:0 0 35px 35px/0 0 15px 15px}#logoutBtn[data-v-e58e40a8]{position:relative;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:90%;margin-top:5px;margin-bottom:55px;padding:10px;background-color:#fff;outline:none;border:none;border-radius:5px;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);color:#ff7e67;font-weight:700}",""])}}]);