(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30faa123","chunk-6fe8d9c2","chunk-195c6187"],{"1ef6":function(e,t,r){t=e.exports=r("2350")(!1),t.push([e.i,"#registerForm[data-v-31949753]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:80%}input[data-v-31949753]{position:relative;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:80%}input[data-v-31949753]:-webkit-autofill{padding-left:10px;padding-right:10px;background-color:#ff7e67;outline:none;border:none;border-radius:5px;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);color:#fff;font-weight:700}[data-v-31949753]::-webkit-input-placeholder{color:hsla(0,0%,100%,.75)}input[type=password][data-v-31949753],input[type=text][data-v-31949753]{height:40px;margin-bottom:50px;padding-left:10px;padding-right:10px}input[type=password][data-v-31949753],input[type=submit][data-v-31949753],input[type=text][data-v-31949753]{background-color:#ff7e67;outline:none;border:none;border-radius:5px;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);color:#fff;font-weight:700}input[type=submit][data-v-31949753]{padding:10px}hr[data-v-31949753]{width:90%;margin-top:25px;margin-bottom:5px}#registerForm div[data-v-31949753],hr[data-v-31949753]{position:relative;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}#registerForm div[data-v-31949753]{height:32px}a[data-v-31949753]{position:relative;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:block;width:80%;height:24px;text-align:right;color:#ff7e67}",""])},2852:function(e,t,r){var n=r("1ef6");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=r("499e").default;o("42c2af4c",n,!0,{sourceMap:!1,shadowMode:!1})},"312e":function(e,t,r){"use strict";var n=r("2852"),o=r.n(n);o.a},"3d22":function(e,t,r){var n=r("dc11");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=r("499e").default;o("e7fbfa52",n,!0,{sourceMap:!1,shadowMode:!1})},"7cdd":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"registerForm"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.enteredUsername,expression:"enteredUsername"}],attrs:{type:"text",placeholder:"Username",maxlength:"25",autocomplete:"off"},domProps:{value:e.enteredUsername},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.register(t)},input:function(t){t.target.composing||(e.enteredUsername=t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.enteredPassword,expression:"enteredPassword"}],attrs:{type:"password",readonly:"readonly",placeholder:"Password",maxlength:"25",autocomplete:"off"},domProps:{value:e.enteredPassword},on:{focus:function(t){return e.pwdGetFocus(t)},blur:function(t){return e.pwdLoseFocus(t)},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.register(t)},input:function(t){t.target.composing||(e.enteredPassword=t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.enteredPwdConfirm,expression:"enteredPwdConfirm"}],attrs:{type:"password",readonly:"readonly",placeholder:"Pwd Confirm",maxlength:"25",autocomplete:"off"},domProps:{value:e.enteredPwdConfirm},on:{focus:function(t){return e.pwdGetFocus(t)},blur:function(t){return e.pwdLoseFocus(t)},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.register(t)},input:function(t){t.target.composing||(e.enteredPwdConfirm=t.target.value)}}}),r("input",{attrs:{type:"submit",value:"register"},on:{click:function(t){return t.preventDefault(),e.register(t)}}}),r("hr"),r("div",[r("router-link",{attrs:{to:"login"}},[e._v("返回登陆")])],1)])},o=[],a=(r("a481"),r("1bab"));function i(e,t){return Object(a["a"])({method:"post",url:"/register",data:{username:e,password:t}})}var s={name:"",data:function(){return{enteredUsername:"",enteredPassword:"",enteredPwdConfirm:""}},methods:{register:function(){var e=this;""!=this.enteredUsername&&""!=this.enteredPassword?this.enteredPassword==this.enteredPwdConfirm?(this.$store.commit("setIsLoading",!0),i(this.enteredUsername,this.enteredPassword).then((function(t){e.$store.commit("setIsLoading",!1),t?(e.$router.replace("/welcome/login"),console.log("Register successfully.")):(alert("The username already exists!"),console.log("Register failed."))}))):alert("Entered passwords differ!"):alert("Input cannot be empty!")},pwdGetFocus:function(e){e.target.removeAttribute("readonly")},pwdLoseFocus:function(e){e.target.setAttribute("readonly","readonly")}}},d=s,l=(r("312e"),r("2877")),u=Object(l["a"])(d,n,o,!1,null,"31949753",null);t["default"]=u.exports},"9ccf":function(e,t,r){"use strict";var n=r("3d22"),o=r.n(n);o.a},a822:function(e,t,r){"use strict";var n=r("ce9d"),o=r.n(n);o.a},abf3:function(e,t,r){t=e.exports=r("2350")(!1),t.push([e.i,"#loginForm[data-v-d350127e]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:80%}input[data-v-d350127e]{width:80%}button[data-v-d350127e],input[data-v-d350127e]{position:relative;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}button[data-v-d350127e]{width:50%;margin-top:30px;padding:10px;background-color:#ff7e67;outline:none;border:none;border-radius:5px;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);color:#fff;font-weight:700}input[data-v-d350127e]:-webkit-autofill{padding-left:10px;padding-right:10px;background-color:#ff7e67;outline:none;border:none;border-radius:5px;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);color:#fff;font-weight:700}[data-v-d350127e]::-webkit-input-placeholder{color:hsla(0,0%,100%,.75)}input[type=password][data-v-d350127e],input[type=text][data-v-d350127e]{height:40px;margin-bottom:55px;padding-left:10px;padding-right:10px}input[type=button][data-v-d350127e],input[type=password][data-v-d350127e],input[type=text][data-v-d350127e]{background-color:#ff7e67;outline:none;border:none;border-radius:5px;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);color:#fff;font-weight:700}input[type=button][data-v-d350127e]{padding:10px}hr[data-v-d350127e]{width:90%;margin-top:25px;margin-bottom:5px}#loginForm div[data-v-d350127e],hr[data-v-d350127e]{position:relative;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}#loginForm div[data-v-d350127e]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:80%;height:32px}label[data-v-d350127e]{display:-webkit-box;display:-ms-flexbox;display:flex;width:350px}label[data-v-d350127e],label p[data-v-d350127e]{position:relative;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);height:24px;margin:0}label p[data-v-d350127e]{padding-left:3px;color:#ff7e67;line-height:24px;overflow:hidden;white-space:nowrap}label input[type=checkbox][data-v-d350127e]{left:0;width:16px;height:16px;margin:0;padding:0}a[data-v-d350127e],label input[type=checkbox][data-v-d350127e]{position:relative;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}a[data-v-d350127e]{display:block;height:24px;text-align:right;color:#ff7e67;white-space:nowrap}",""])},b131:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"loginForm",action:""}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.enteredUsername,expression:"enteredUsername"}],attrs:{type:"text",placeholder:"Username",maxlength:"25",autocomplete:"off"},domProps:{value:e.enteredUsername},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login(t)},input:function(t){t.target.composing||(e.enteredUsername=t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.enteredPassword,expression:"enteredPassword"}],attrs:{type:"password",readonly:"readonly",name:"",placeholder:"Password",maxlength:"25",autocomplete:"off"},domProps:{value:e.enteredPassword},on:{focus:function(t){return e.pwdGetFocus(t)},blur:function(t){return e.pwdLoseFocus(t)},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login(t)},input:function(t){t.target.composing||(e.enteredPassword=t.target.value)}}}),r("input",{attrs:{type:"button",value:"login"},on:{click:function(t){return t.target!==t.currentTarget?null:e.login(t)}}}),r("hr"),r("div",[r("label",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.isChecked,expression:"isChecked"}],attrs:{type:"checkbox",name:"",id:""},domProps:{checked:Array.isArray(e.isChecked)?e._i(e.isChecked,null)>-1:e.isChecked},on:{change:function(t){var r=e.isChecked,n=t.target,o=!!n.checked;if(Array.isArray(r)){var a=null,i=e._i(r,a);n.checked?i<0&&(e.isChecked=r.concat([a])):i>-1&&(e.isChecked=r.slice(0,i).concat(r.slice(i+1)))}else e.isChecked=o}}}),r("p",[e._v("记住登陆信息")])]),r("router-link",{attrs:{to:"register"}},[e._v("立即注册")])],1)])},o=[],a=(r("a481"),r("1bab"));function i(e,t){return Object(a["a"])({method:"post",url:"/login",data:{username:e,password:t}})}var s={name:"",data:function(){return{enteredUsername:"",enteredPassword:"",isChecked:!0}},methods:{login:function(){var e=this;""!=this.enteredUsername&&""!=this.enteredPassword?(this.$store.commit("setIsLoading",!0),i(this.enteredUsername,this.enteredPassword).then((function(t){e.$store.commit("setIsLoading",!1),t.isLogin?("true"==localStorage.getItem("isRemUP")&&(localStorage.setItem("unm",e.enteredUsername),localStorage.setItem("pwd",e.enteredPassword)),e.$store.commit("setIsLogin",!0),e.$store.commit("setUserInfo",t),e.$router.replace("/main/chat"),console.log("Login successfully.")):(alert("Wrong account or password!"),console.log("Login failed."))}))):alert("Input cannot be empty!")},pwdGetFocus:function(e){e.target.removeAttribute("readonly")},pwdLoseFocus:function(e){e.target.setAttribute("readonly","readonly")}},watch:{isChecked:function(e){1==e?localStorage.setItem("isRemUP",!0):localStorage.setItem("isRemUP",!1)}},created:function(){null===localStorage.getItem("isRemUP")?(localStorage.setItem("isRemUP",!1),this.isChecked=!1):"true"==localStorage.getItem("isRemUP")?(this.isChecked=!0,this.enteredUsername=localStorage.getItem("unm"),this.enteredPassword=localStorage.getItem("pwd")):this.isChecked=!1}},d=s,l=(r("a822"),r("2877")),u=Object(l["a"])(d,n,o,!1,null,"d350127e",null);t["default"]=u.exports},bac2:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("router-view"),r("a",{attrs:{href:""},on:{click:function(t){return t.preventDefault(),e.skipin(t)}}},[e._v("skipin 4 local dev")])],1)},o=[],a=(r("a481"),r("b131")),i=r("7cdd"),s={name:"",components:{Login:a["default"],Reigister:i["default"]},data:function(){return{}},methods:{skipin:function(){this.$store.commit("setIsLogin",!0),this.$router.replace("/main/chat")}},created:function(){}},d=s,l=(r("9ccf"),r("2877")),u=Object(l["a"])(d,n,o,!1,null,"6974f897",null);t["default"]=u.exports},ce9d:function(e,t,r){var n=r("abf3");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=r("499e").default;o("5961cc00",n,!0,{sourceMap:!1,shadowMode:!1})},dc11:function(e,t,r){t=e.exports=r("2350")(!1),t.push([e.i,"p[data-v-6974f897]{top:10%;text-align:center;color:#ff7e67;font-size:55px}#loginBtn[data-v-6974f897],p[data-v-6974f897]{position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);font-weight:700}#loginBtn[data-v-6974f897]{top:75%;width:80%;padding:10px;background-color:#ff7e67;outline:none;border:none;border-radius:5px;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);color:#fff}a[data-v-6974f897]{position:absolute;top:0;display:block;width:100%;padding-top:5px;padding-left:10px;text-align:left;color:#ff7e67}",""])},f28c:function(e,t){var r,n,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(e){if(r===setTimeout)return setTimeout(e,0);if((r===a||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}function d(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{return n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(function(){try{r="function"===typeof setTimeout?setTimeout:a}catch(e){r=a}try{n="function"===typeof clearTimeout?clearTimeout:i}catch(e){n=i}})();var l,u=[],p=!1,c=-1;function f(){p&&l&&(p=!1,l.length?u=l.concat(u):c=-1,u.length&&m())}function m(){if(!p){var e=s(f);p=!0;var t=u.length;while(t){l=u,u=[];while(++c<t)l&&l[c].run();c=-1,t=u.length}l=null,p=!1,d(e)}}function g(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new g(e,t)),1!==u.length||p||s(m)},g.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}}}]);