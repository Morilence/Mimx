(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6fa2e58c"],{"3cf2":function(e,t,r){t=e.exports=r("2350")(!1),t.push([e.i,"#registerForm[data-v-2b2bb1a1]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:80%}input[data-v-2b2bb1a1]{position:relative;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:80%}input[data-v-2b2bb1a1]:-webkit-autofill{padding-left:10px;padding-right:10px;background-color:#ff7e67;outline:none;border:none;border-radius:5px;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);color:#fff;font-weight:700}[data-v-2b2bb1a1]::-webkit-input-placeholder{color:hsla(0,0%,100%,.75)}input[type=password][data-v-2b2bb1a1],input[type=text][data-v-2b2bb1a1]{height:40px;margin-bottom:40px;padding-left:10px;padding-right:10px}input[type=password][data-v-2b2bb1a1],input[type=submit][data-v-2b2bb1a1],input[type=text][data-v-2b2bb1a1]{background-color:#ff7e67;outline:none;border:none;border-radius:5px;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);color:#fff;font-weight:700}input[type=submit][data-v-2b2bb1a1]{padding:10px}hr[data-v-2b2bb1a1]{margin-top:25px;margin-bottom:5px}a[data-v-2b2bb1a1]{position:relative;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);display:block;width:80%;text-align:right;color:#ff7e67}",""])},"642d":function(e,t,r){var a=r("3cf2");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var o=r("499e").default;o("4ffb88bc",a,!0,{sourceMap:!1,shadowMode:!1})},"6c02":function(e,t,r){"use strict";var a=r("642d"),o=r.n(a);o.a},"7cdd":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{attrs:{id:"registerForm"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.enteredUsername,expression:"enteredUsername"}],attrs:{type:"text",placeholder:"Username",maxlength:"25",autocomplete:"off"},domProps:{value:e.enteredUsername},on:{input:function(t){t.target.composing||(e.enteredUsername=t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.enteredPassword,expression:"enteredPassword"}],attrs:{type:"password",placeholder:"Password",maxlength:"25",autocomplete:"off"},domProps:{value:e.enteredPassword},on:{input:function(t){t.target.composing||(e.enteredPassword=t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.enteredPwdConfirm,expression:"enteredPwdConfirm"}],attrs:{type:"password",placeholder:"Pwd Confirm",maxlength:"25",autocomplete:"off"},domProps:{value:e.enteredPwdConfirm},on:{input:function(t){t.target.composing||(e.enteredPwdConfirm=t.target.value)}}}),r("input",{attrs:{type:"submit",value:"register"},on:{click:function(t){return t.preventDefault(),e.register(t)}}}),r("hr"),r("router-link",{attrs:{to:"login"}},[e._v("返回登陆")])],1)},o=[],n=(r("a481"),r("1bab"));function s(e,t){return Object(n["a"])({method:"post",url:"/register",data:{username:e,password:t}})}var i={name:"",data:function(){return{enteredUsername:"",enteredPassword:"",enteredPwdConfirm:""}},methods:{register:function(){var e=this;""!=this.enteredUsername&&""!=this.enteredPassword?this.enteredPassword==this.enteredPwdConfirm?s(this.enteredUsername,this.enteredPassword).then((function(t){t?(e.$router.replace("/welcome/login"),console.log("Register successfully.")):(alert("Register failed!"),console.log("Register failed."))})):alert("Entered passwords differ!"):alert("Input cannot be empty!")}}},d=i,p=(r("6c02"),r("2877")),l=Object(p["a"])(d,a,o,!1,null,"2b2bb1a1",null);t["default"]=l.exports}}]);