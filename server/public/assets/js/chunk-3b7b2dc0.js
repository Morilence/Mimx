(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b7b2dc0"],{"08b2":function(e,t,a){var n=a("c669");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("499e").default;i("7287afae",n,!0,{sourceMap:!1,shadowMode:!1})},"121e":function(e,t,a){e.exports=a.p+"assets/img/check_w.svg"},"59db":function(e,t,a){"use strict";var n=a("08b2"),i=a.n(n);i.a},6251:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return r}));var n=a("1bab");function i(e){return Object(n["a"])({method:"post",url:"/changeAvatar",data:e})}function r(e){return Object(n["a"])({method:"post",url:"/changeInfo",data:e})}},6457:function(e,t,a){e.exports=a.p+"assets/img/left_w.svg"},"97a3":function(e,t,a){e.exports=a.p+"assets/img/edit_w.svg"},b72c:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"essentialInfo"}},[n("ul",[e._m(0),n("hr"),n("li",[n("p",[n("span",[e._v("昵称")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",readonly:!e.isEdit&&"readonly",maxlength:"25"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})])]),n("hr"),n("li",[n("p",[n("span",[e._v("ID")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.id,expression:"id"}],attrs:{type:"text",readonly:"readonly"},domProps:{value:e.id},on:{input:function(t){t.target.composing||(e.id=t.target.value)}}})])]),n("hr"),n("li",[n("p",[n("span",[e._v("等级")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.level,expression:"level"}],attrs:{type:"text",readonly:"readonly"},domProps:{value:e.level},on:{input:function(t){t.target.composing||(e.level=t.target.value)}}})])])]),n("ul",[e._m(1),n("hr"),n("li",[n("p",[n("span",[e._v("性别")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.gender,expression:"gender"}],attrs:{type:"text",readonly:!e.isEdit&&"readonly",maxlength:""},domProps:{value:e.gender},on:{input:function(t){t.target.composing||(e.gender=t.target.value)}}})])]),n("hr"),n("li",[n("p",[n("span",[e._v("年龄")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.age,expression:"age"}],attrs:{type:"text",oninput:"value=value.replace(/[^\\d]/g,'')",readonly:!e.isEdit&&"readonly",maxlength:""},domProps:{value:e.age},on:{input:function(t){t.target.composing||(e.age=t.target.value)}}})])]),n("hr"),n("li",[n("p",[n("span",[e._v("邮箱")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",readonly:!e.isEdit&&"readonly",maxlength:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})])])]),n("title-bar",{attrs:{backImgPath:a("6457"),menuImgPath:e.editImgUrl,title:"基本资料",titleColor:"#fafafa",bgColor:"rgba(255, 126, 103, 1)",isShadow:!0},on:{onReact:e.judgeReact}})],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[a("p",[e._v("账号信息")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[a("p",[e._v("个人信息")])])}],r=a("efb4"),s=a("6251"),o={name:"",components:{TitleBar:r["a"]},data:function(){return{isEdit:!1,username:"",id:"",level:0,gender:"",age:"",email:""}},computed:{editImgUrl:{get:function(){return this.isEdit?a("121e"):a("97a3")}}},methods:{judgeReact:function(e){if(1==e)this.isEdit=!0;else{this.isEdit=!1,this.$store.commit("setIsLoading",!0);var t=new FormData;t.append("_id",this.$store.state.userInfo._id),t.append("username",this.username),t.append("gender",this.gender),t.append("age",this.age),t.append("email",this.email),this.$options.methods.uploadInfo.bind(this)(t)}},uploadInfo:function(e){var t=this;Object(s["b"])(e).then((function(a){if(t.$store.commit("setIsLoading",!1),1==a){var n=t.$store.state.userInfo;n.username=e.get("username"),n.gender=e.get("gender"),n.age=e.get("age"),n.email=e.get("email"),t.$store.commit("setUserInfo",n),"true"==localStorage.getItem("isRemUP")&&localStorage.setItem("unm",n.username)}else-1==a?alert("修改失败（用户名已存在）！"):alert("修改失败（未知错误）！"),t.username=t.$store.state.userInfo.username,t.gender=t.$store.state.userInfo.gender,t.age=t.$store.state.userInfo.age,t.email=t.$store.state.userInfo.email}))}},created:function(){this.username=this.$store.state.userInfo.username,this.id=this.$store.state.userInfo._id,this.level=this.$store.state.userInfo.level,this.gender=this.$store.state.userInfo.gender,this.age=this.$store.state.userInfo.age,this.email=this.$store.state.userInfo.email}},l=o,d=(a("59db"),a("2877")),p=Object(d["a"])(l,n,i,!1,null,"593b2322",null);t["default"]=p.exports},c669:function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,"#essentialInfo[data-v-593b2322]{margin-top:65px}ul[data-v-593b2322]{position:relative;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:90%;margin-top:15px;margin-bottom:10px;overflow:hidden;background-color:#fff;border-radius:5px;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04)}li[data-v-593b2322]{margin-top:12px;margin-bottom:12px}li[data-v-593b2322]:first-child{font-weight:700;font-size:17px}li p[data-v-593b2322]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin:0;padding:0;margin-bottom:10px;padding-left:15px;padding-right:15px;font-size:16px;color:#606266}li p span[data-v-593b2322]:first-child{white-space:nowrap;color:#909399}li p input[data-v-593b2322]{width:100%;padding-left:15px;border:none;outline:none;text-align:right;color:#606266}hr[data-v-593b2322]{position:relative;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);margin:0;width:95%}",""])}}]);