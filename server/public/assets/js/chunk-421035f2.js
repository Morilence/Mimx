(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-421035f2","chunk-70be3940","chunk-1dda7f5a"],{1022:function(e,t,a){var r=a("aaf9");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var n=a("499e").default;n("46c2cb71",r,!0,{sourceMap:!1,shadowMode:!1})},"233e":function(e,t,a){var r=a("ae05");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var n=a("499e").default;n("11fe6e14",r,!0,{sourceMap:!1,shadowMode:!1})},2664:function(e,t,a){var r=a("f974");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var n=a("499e").default;n("38c814d6",r,!0,{sourceMap:!1,shadowMode:!1})},"6c5d":function(e,t,a){"use strict";var r=a("1022"),n=a.n(r);n.a},"7cdd":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"registerForm"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.enteredUsername,expression:"enteredUsername"}],attrs:{type:"text",placeholder:"Username",maxlength:"25",autocomplete:"off"},domProps:{value:e.enteredUsername},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.register(t)},input:function(t){t.target.composing||(e.enteredUsername=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.enteredPassword,expression:"enteredPassword"}],attrs:{type:"text",placeholder:"Password",maxlength:"25",autocomplete:"off"},domProps:{value:e.enteredPassword},on:{focus:function(t){return e.pwdGetFocus(t)},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.register(t)},input:function(t){t.target.composing||(e.enteredPassword=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.enteredPwdConfirm,expression:"enteredPwdConfirm"}],attrs:{type:"text",placeholder:"Pwd Confirm",maxlength:"25",autocomplete:"off"},domProps:{value:e.enteredPwdConfirm},on:{focus:function(t){return e.pwdGetFocus(t)},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.register(t)},input:function(t){t.target.composing||(e.enteredPwdConfirm=t.target.value)}}}),a("input",{attrs:{type:"submit",value:"register"},on:{click:function(t){return t.preventDefault(),e.register(t)}}}),a("hr"),a("div",[a("router-link",{attrs:{to:"login"}},[e._v("返回登陆")])],1)])},n=[],o=(a("a481"),a("1bab"));function i(e,t){return Object(o["a"])({method:"post",url:"/register",data:{username:e,password:t}})}var s={name:"",data:function(){return{enteredUsername:"",enteredPassword:"",enteredPwdConfirm:""}},methods:{register:function(){var e=this;""!=this.enteredUsername&&""!=this.enteredPassword?this.enteredPassword==this.enteredPwdConfirm?i(this.enteredUsername,this.enteredPassword).then((function(t){t?(e.$router.replace("/welcome/login"),console.log("Register successfully.")):(alert("The username already exists!"),console.log("Register failed."))})):alert("Entered passwords differ!"):alert("Input cannot be empty!")},pwdGetFocus:function(e){e.target.setAttribute("type","password")}}},d=s,l=(a("6c5d"),a("2877")),p=Object(l["a"])(d,r,n,!1,null,"e5919b10",null);t["default"]=p.exports},"996d":function(e,t,a){"use strict";var r=a("233e"),n=a.n(r);n.a},aaf9:function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,"#registerForm[data-v-e5919b10]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:80%}input[data-v-e5919b10]{position:relative;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:80%}input[data-v-e5919b10]:-webkit-autofill{padding-left:10px;padding-right:10px;background-color:#ff7e67;outline:none;border:none;border-radius:5px;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);color:#fff;font-weight:700}[data-v-e5919b10]::-webkit-input-placeholder{color:hsla(0,0%,100%,.75)}input[type=password][data-v-e5919b10],input[type=text][data-v-e5919b10]:first-child,input[type=text][data-v-e5919b10]:nth-child(2),input[type=text][data-v-e5919b10]:nth-child(3){height:40px;margin-bottom:50px;padding-left:10px;padding-right:10px}input[type=password][data-v-e5919b10],input[type=submit][data-v-e5919b10],input[type=text][data-v-e5919b10]:first-child,input[type=text][data-v-e5919b10]:nth-child(2),input[type=text][data-v-e5919b10]:nth-child(3){background-color:#ff7e67;outline:none;border:none;border-radius:5px;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);color:#fff;font-weight:700}input[type=submit][data-v-e5919b10]{padding:10px}hr[data-v-e5919b10]{width:90%;margin-top:25px;margin-bottom:5px}#registerForm div[data-v-e5919b10],hr[data-v-e5919b10]{position:relative;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}#registerForm div[data-v-e5919b10]{height:32px}a[data-v-e5919b10]{position:relative;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:block;width:80%;height:24px;text-align:right;color:#ff7e67}",""])},ae05:function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,"p[data-v-f9bd3f16]{top:10%;text-align:center;color:#ff7e67;font-size:55px}#loginBtn[data-v-f9bd3f16],p[data-v-f9bd3f16]{position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);font-weight:700}#loginBtn[data-v-f9bd3f16]{top:75%;width:80%;padding:10px;background-color:#ff7e67;outline:none;border:none;border-radius:5px;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);color:#fff}",""])},b131:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"loginForm",action:""}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.enteredUsername,expression:"enteredUsername"}],attrs:{type:"text",placeholder:"Username",maxlength:"25",autocomplete:"off"},domProps:{value:e.enteredUsername},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login(t)},input:function(t){t.target.composing||(e.enteredUsername=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.enteredPassword,expression:"enteredPassword"}],attrs:{type:"text",name:"",placeholder:"Password",maxlength:"25",autocomplete:"off"},domProps:{value:e.enteredPassword},on:{focus:function(t){return e.pwdGetFocus(t)},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login(t)},input:function(t){t.target.composing||(e.enteredPassword=t.target.value)}}}),a("input",{attrs:{type:"button",value:"login"},on:{click:function(t){return t.target!==t.currentTarget?null:e.login(t)}}}),a("hr"),a("div",[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.isChecked,expression:"isChecked"}],attrs:{type:"checkbox",name:"",id:""},domProps:{checked:Array.isArray(e.isChecked)?e._i(e.isChecked,null)>-1:e.isChecked},on:{change:function(t){var a=e.isChecked,r=t.target,n=!!r.checked;if(Array.isArray(a)){var o=null,i=e._i(a,o);r.checked?i<0&&(e.isChecked=a.concat([o])):i>-1&&(e.isChecked=a.slice(0,i).concat(a.slice(i+1)))}else e.isChecked=n}}}),a("p",[e._v("记住登陆信息")])]),a("router-link",{attrs:{to:"register"}},[e._v("立即注册")])],1)])},n=[],o=(a("a481"),a("1bab"));function i(e,t){return Object(o["a"])({method:"post",url:"/login",data:{username:e,password:t}})}var s={name:"",data:function(){return{enteredUsername:"",enteredPassword:"",isChecked:!0}},methods:{login:function(){var e=this;""!=this.enteredUsername&&""!=this.enteredPassword?i(this.enteredUsername,this.enteredPassword).then((function(t){t.isLogin?("true"==localStorage.getItem("isRemUP")&&(localStorage.setItem("unm",e.enteredUsername),localStorage.setItem("pwd",e.enteredPassword)),e.$store.commit("setIsLogin",!0),e.$store.commit("setUserInfo",t),e.$router.replace("/chat"),console.log("Login successfully.")):(alert("Wrong account or password!"),console.log("Login failed."))})):alert("Input cannot be empty!")},pwdGetFocus:function(e){e.target.setAttribute("type","password")}},watch:{isChecked:function(e){1==e?localStorage.setItem("isRemUP",!0):localStorage.setItem("isRemUP",!1)}},created:function(){null===localStorage.getItem("isRemUP")?(localStorage.setItem("isRemUP",!1),this.isChecked=!1):"true"==localStorage.getItem("isRemUP")?(this.isChecked=!0,this.enteredUsername=localStorage.getItem("unm"),this.enteredPassword=localStorage.getItem("pwd")):this.isChecked=!1}},d=s,l=(a("ee6d"),a("2877")),p=Object(l["a"])(d,r,n,!1,null,"b677f0a2",null);t["default"]=p.exports},bac2:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("router-view")],1)},n=[],o=a("b131"),i=a("7cdd"),s={name:"",components:{Login:o["default"],Reigister:i["default"]},data:function(){return{}},methods:{},created:function(){}},d=s,l=(a("996d"),a("2877")),p=Object(l["a"])(d,r,n,!1,null,"f9bd3f16",null);t["default"]=p.exports},ee6d:function(e,t,a){"use strict";var r=a("2664"),n=a.n(r);n.a},f974:function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,"#loginForm[data-v-b677f0a2]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:80%}input[data-v-b677f0a2]{width:80%}button[data-v-b677f0a2],input[data-v-b677f0a2]{position:relative;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}button[data-v-b677f0a2]{width:50%;margin-top:30px;padding:10px;background-color:#ff7e67;outline:none;border:none;border-radius:5px;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);color:#fff;font-weight:700}input[data-v-b677f0a2]:-webkit-autofill{padding-left:10px;padding-right:10px;background-color:#ff7e67;outline:none;border:none;border-radius:5px;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);color:#fff;font-weight:700}[data-v-b677f0a2]::-webkit-input-placeholder{color:hsla(0,0%,100%,.75)}input[type=password][data-v-b677f0a2],input[type=text][data-v-b677f0a2]:first-child,input[type=text][data-v-b677f0a2]:nth-child(2){height:40px;margin-bottom:55px;padding-left:10px;padding-right:10px}input[type=button][data-v-b677f0a2],input[type=password][data-v-b677f0a2],input[type=text][data-v-b677f0a2]:first-child,input[type=text][data-v-b677f0a2]:nth-child(2){background-color:#ff7e67;outline:none;border:none;border-radius:5px;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);color:#fff;font-weight:700}input[type=button][data-v-b677f0a2]{padding:10px}hr[data-v-b677f0a2]{width:90%;margin-top:25px;margin-bottom:5px}#loginForm div[data-v-b677f0a2],hr[data-v-b677f0a2]{position:relative;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}#loginForm div[data-v-b677f0a2]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:80%;height:32px}label[data-v-b677f0a2]{display:-webkit-box;display:-ms-flexbox;display:flex;width:350px}label[data-v-b677f0a2],label p[data-v-b677f0a2]{position:relative;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);height:24px;margin:0}label p[data-v-b677f0a2]{padding-left:3px;color:#ff7e67;line-height:24px;overflow:hidden;white-space:nowrap}label input[type=checkbox][data-v-b677f0a2]{left:0;width:16px;height:16px;margin:0;padding:0}a[data-v-b677f0a2],label input[type=checkbox][data-v-b677f0a2]{position:relative;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}a[data-v-b677f0a2]{display:block;height:24px;text-align:right;color:#ff7e67;white-space:nowrap}",""])}}]);