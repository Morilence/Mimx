(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29044180","chunk-74d793d6","chunk-9401664e","chunk-cf640f7a","chunk-7013bcbc","chunk-1523925a","chunk-1a1cf6b7"],{"121e":function(t,e,a){t.exports=a.p+"assets/img/check_w.svg"},"16c3":function(t,e,a){var n=a("5183");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=a("499e").default;o("3bbf1992",n,!0,{sourceMap:!1,shadowMode:!1})},"196b":function(t,e,a){"use strict";a.d(e,"c",(function(){return o})),a.d(e,"b",(function(){return r})),a.d(e,"a",(function(){return i}));var n=a("1bab");function o(t){return Object(n["a"])({method:"get",url:"/getSearchResults",params:{searchKey:t}})}function r(t){return Object(n["a"])({method:"get",url:"/getRecommendUsers",params:{recommendNum:t}})}function i(t){return Object(n["a"])({method:"get",url:"/getInfo",params:{targetName:t}})}},"1ea0":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,"#about[data-v-15ee899f]{margin-top:65px}#logoPanel[data-v-15ee899f]{position:relative;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:90%;padding-top:20px;padding-bottom:5px}#logoPanel P[data-v-15ee899f]{color:#ff7e67;text-align:center;font-size:55px;font-weight:900;font-family:Franklin Gothic Medium,Arial Narrow,Arial,sans-serif;text-shadow:5px 5px 5px rgba(0,0,0,.15)}ul[data-v-15ee899f]{position:relative;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:90%;margin-top:15px;margin-bottom:10px;overflow:hidden;background-color:#fff;border-radius:5px;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04)}li[data-v-15ee899f]{margin-top:12px;margin-bottom:12px}li p[data-v-15ee899f]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin:0;padding:0;margin-bottom:10px;padding-left:15px;padding-right:15px;font-size:16px;color:#606266}li p span[data-v-15ee899f]:nth-child(2){font-size:14px;color:#909399}li div[data-v-15ee899f]{display:none;margin-top:15px;padding-left:15px;padding-right:15px;min-height:80px;background-color:#fff;color:#909399;font-size:12px}hr[data-v-15ee899f]{margin:0;width:95%}button[data-v-15ee899f],hr[data-v-15ee899f]{position:relative;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}button[data-v-15ee899f]{width:90%;margin-top:10px;margin-bottom:20px;padding:10px;background-color:#fff;outline:none;border:none;border-radius:5px;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);color:#ff7e67;font-weight:700}",""])},2602:function(t,e,a){"use strict";var n=a("cff9"),o=a.n(n);o.a},"37fe":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"background-container"}},[n("div",{attrs:{id:"infoPanel"}},[n("img",{attrs:{src:t.avatarUrl,alt:""}}),n("div",[n("span",[t._v(t._s(t.username))]),n("img",{attrs:{src:t.genderImgUrl,alt:""}}),n("button",{on:{click:t.followSwitch}},[t._v(t._s(t.btnText))])]),n("p",[n("span",[t._v("Lv: "+t._s(t.level))]),t._v("|\n                "),n("span",[t._v("关注: "+t._s(t.followNum))]),t._v("|\n                "),n("span",[t._v("粉丝: "+t._s(t.fanNum))])]),n("p",[t._v("简介: "+t._s(t.intro))])])]),n("div",{attrs:{id:"postPanel"}}),n("title-bar",{attrs:{backImgPath:a("6457"),menuImgPath:a("89ca"),title:"",titleColor:"#fafafa",bgColor:"rgba(255, 126, 103, 0)",isShadow:!1}})],1)},o=[],r=a("196b"),i=a("6251"),s=a("efb4"),l={name:"IndividualSpace",components:{TitleBar:s["a"]},data:function(){return{targetInfo:{},avatarUrl:"",username:"ddddd",gender:"",level:0,followNum:0,fanNum:0,intro:"这个人什么都没有写ε=ε=ε=(~￣▽￣)~",isFollow:!1}},computed:{genderImgUrl:function(){return"男"==this.gender?a("f134"):"女"==this.gender?a("9e09"):a("87e5")},btnText:function(){return this.isFollow?"已关注":"关注"}},watch:{},methods:{followSwitch:function(){var t=this;this.$store.commit("setIsLoading",!0),this.isFollow?Object(i["b"])({aod:!1,follower:this.$store.state.userInfo._id,followee:this.targetInfo._id}).then((function(e){if(t.$store.commit("setIsLoading",!1),e.isOk){t.isFollow=!1,t.fanNum=e.followee_fanNum;var a=t.$store.state.userInfo;a.followNum=e.follower_followNum,t.$store.commit("setUserInfo",a)}else t.$tinyToast({content:"Unfollow failed! (unknown error)",duration:2e3})})):Object(i["b"])({aod:!0,follower:this.$store.state.userInfo._id,followee:this.targetInfo._id}).then((function(e){if(t.$store.commit("setIsLoading",!1),e.isOk){t.isFollow=!0,t.fanNum=e.fanNum;var a=t.$store.state.userInfo;a.followNum=e.follower_followNum,t.$store.commit("setUserInfo",a)}else t.$tinyToast({content:"Follow failed! (unknown error)",duration:2e3})}))}},created:function(){var t=this,e=this;this.$store.commit("setIsLoading",!0);var a=this.$route.params.targetName;Object(r["a"])(a).then((function(a){e.targetInfo=a,e.avatarUrl=e.targetInfo.avatarUrl,e.username=e.targetInfo.username,e.gender=e.targetInfo.gender,e.level=e.targetInfo.level,e.followNum=e.targetInfo.followNum,e.fanNum=e.targetInfo.fanNum,""==e.targetInfo.intro?e.intro="这个人啥都没写ε=ε=ε=(~￣▽￣)~":e.intro=e.targetInfo.intro,Object(i["d"])({follower:t.$store.state.userInfo._id,followee:t.targetInfo._id}).then((function(a){e.isFollow=!!a,t.$store.commit("setIsLoading",!1)}))}))}},d=l,f=(a("c1c2"),a("2877")),c=Object(f["a"])(d,n,o,!1,null,"71b064c9",null);e["default"]=c.exports},"3afb":function(t,e,a){"use strict";var n=a("a79c"),o=a.n(n);o.a},5183:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,"#essentialInfo[data-v-4d172ff4]{margin-top:65px}ul[data-v-4d172ff4]{position:relative;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:90%;margin-top:15px;margin-bottom:10px;overflow:hidden;background-color:#fff;border-radius:5px;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04)}ul[data-v-4d172ff4]:nth-child(2){margin-bottom:20px}li[data-v-4d172ff4]{margin-top:12px;margin-bottom:12px}li[data-v-4d172ff4]:first-child{font-weight:700;font-size:17px}li p[data-v-4d172ff4]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin:0;padding:0;margin-bottom:10px;padding-left:15px;padding-right:15px;font-size:16px;color:#606266}li p span[data-v-4d172ff4]:first-child{white-space:nowrap;color:#909399}li p input[data-v-4d172ff4]{padding-left:15px;text-align:right}li p input[data-v-4d172ff4],li textarea[data-v-4d172ff4]{width:100%;border:none;outline:none;color:#606266}li textarea[data-v-4d172ff4]{height:90px;overflow-y:visible;padding:5px 15px 5px 15px;text-align:center;font-size:15px}hr[data-v-4d172ff4],li textarea[data-v-4d172ff4]{position:relative;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}hr[data-v-4d172ff4]{margin:0;width:95%}",""])},5606:function(t,e,a){var n=a("adb1");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=a("499e").default;o("a6fd4a7c",n,!0,{sourceMap:!1,shadowMode:!1})},6251:function(t,e,a){"use strict";a.d(e,"a",(function(){return o})),a.d(e,"c",(function(){return r})),a.d(e,"d",(function(){return i})),a.d(e,"b",(function(){return s}));var n=a("1bab");function o(t){return Object(n["a"])({method:"post",url:"/changeAvatar",data:t})}function r(t){return Object(n["a"])({method:"post",url:"/changeInfo",data:t})}function i(t){return Object(n["a"])({method:"get",url:"/getFollowRelation",params:{follower:t.follower,followee:t.followee}})}function s(t){return Object(n["a"])({method:"get",url:"/changeFollowRelation",params:{aod:t.aod,follower:t.follower,followee:t.followee}})}},6457:function(t,e,a){t.exports=a.p+"assets/img/left_w.svg"},"71b9":function(t,e,a){t.exports=a.p+"assets/img/Alipay.jpg"},7380:function(t,e,a){"use strict";var n=a("cad3"),o=a.n(n);o.a},"815a":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"sponsor"}},[n("img",{attrs:{src:a("71b9"),alt:""}}),n("img",{attrs:{src:a("ef2a"),alt:""}}),n("title-bar",{attrs:{backImgPath:a("6457"),menuImgPath:a("89ca"),title:"无偿资助开发者",titleColor:"#fafafa",bgColor:"rgba(255, 126, 103, 1)",isShadow:!0}})],1)},o=[],r=a("efb4"),i={name:"",components:{TitleBar:r["a"]}},s=i,l=(a("3afb"),a("2877")),d=Object(l["a"])(s,n,o,!1,null,"8b0b3d06",null);e["default"]=d.exports},"87e5":function(t,e,a){t.exports=a.p+"assets/img/question_w.svg"},"89ca":function(t,e,a){t.exports=a.p+"assets/img/menu_w.svg"},"89d1":function(t,e,a){"use strict";var n=a("5606"),o=a.n(n);o.a},"97a3":function(t,e,a){t.exports=a.p+"assets/img/edit_w.svg"},"9e09":function(t,e,a){t.exports=a.p+"assets/img/woman_w.svg"},a66c:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"about"}},[t._m(0),t._m(1),n("button",{on:{click:function(e){return e.target!==e.currentTarget?null:t.unfold("/options/sponsor")}}},[t._v("无偿资助开发者")]),n("title-bar",{attrs:{backImgPath:a("6457"),menuImgPath:a("89ca"),title:"关于",titleColor:"#fafafa",bgColor:"rgba(255, 126, 103, 1)",isShadow:!0}})],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"logoPanel"}},[a("p",[t._v("MIMX")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("p",[a("span",[t._v("产品名称")]),a("span",[t._v("Mimx")])])]),a("hr"),a("li",[a("p",[a("span",[t._v("当前版本")]),a("span",[t._v("0.10 Beta/Preview")])])]),a("hr"),a("li",[a("p",[a("span",[t._v("开发人员")]),a("span",[t._v("Morilence")])])]),a("hr"),a("li",[a("p",[a("span",[t._v("赞助企业")]),a("span",[t._v("枫华科技")])])]),a("hr"),a("li",[a("p",[t._v("意见反馈")]),a("div")])])}],r=a("efb4"),i={name:"",components:{TitleBar:r["a"]},data:function(){return{}},methods:{unfold:function(t){this.$router.push(t)}}},s=i,l=(a("7380"),a("2877")),d=Object(l["a"])(s,n,o,!1,null,"15ee899f",null);e["default"]=d.exports},a79c:function(t,e,a){var n=a("c361");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=a("499e").default;o("19dcdd2a",n,!0,{sourceMap:!1,shadowMode:!1})},ac42:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"accountSecurity"}},[n("title-bar",{attrs:{backImgPath:a("6457"),menuImgPath:a("89ca"),title:"账号安全",titleColor:"#fafafa",bgColor:"rgba(255, 126, 103, 1)",isShadow:!0}})],1)},o=[],r=a("efb4"),i={name:"",components:{TitleBar:r["a"]}},s=i,l=(a("89d1"),a("2877")),d=Object(l["a"])(s,n,o,!1,null,"1e009eb9",null);e["default"]=d.exports},ad55:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"settings"}},[n("title-bar",{attrs:{backImgPath:a("6457"),menuImgPath:a("89ca"),title:"设置",titleColor:"#fafafa",bgColor:"rgba(255, 126, 103, 1)",isShadow:!0}})],1)},o=[],r=a("efb4"),i={name:"",components:{TitleBar:r["a"]}},s=i,l=(a("2602"),a("2877")),d=Object(l["a"])(s,n,o,!1,null,"7230a463",null);e["default"]=d.exports},adb1:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,"#accountSecurity[data-v-1e009eb9]{margin-top:65px}",""])},b72c:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"essentialInfo"}},[n("ul",[t._m(0),n("hr"),n("li",[n("p",[n("span",[t._v("昵称")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",readonly:!t.isEdit&&"readonly",maxlength:"25"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})])]),n("hr"),n("li",[n("p",[n("span",[t._v("ID")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],attrs:{type:"text",readonly:"readonly"},domProps:{value:t.id},on:{input:function(e){e.target.composing||(t.id=e.target.value)}}})])]),n("hr"),n("li",[n("p",[n("span",[t._v("等级")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.level,expression:"level"}],attrs:{type:"text",readonly:"readonly"},domProps:{value:t.level},on:{input:function(e){e.target.composing||(t.level=e.target.value)}}})])])]),n("ul",[t._m(1),n("hr"),n("li",[n("p",[n("span",[t._v("性别")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.gender,expression:"gender"}],attrs:{type:"text",readonly:!t.isEdit&&"readonly",maxlength:""},domProps:{value:t.gender},on:{input:function(e){e.target.composing||(t.gender=e.target.value)}}})])]),n("hr"),n("li",[n("p",[n("span",[t._v("年龄")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.age,expression:"age"}],attrs:{type:"text",oninput:"value=value.replace(/[^\\d]/g,'')",readonly:!t.isEdit&&"readonly",maxlength:""},domProps:{value:t.age},on:{input:function(e){e.target.composing||(t.age=e.target.value)}}})])]),n("hr"),n("li",[n("p",[n("span",[t._v("邮箱")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",readonly:!t.isEdit&&"readonly",maxlength:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])]),n("hr"),n("li",[t._m(2),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.intro,expression:"intro"}],attrs:{placeholder:"简单介绍一下你自己吧！",readonly:!t.isEdit&&"readonly",maxlength:"60"},domProps:{value:t.intro},on:{input:function(e){e.target.composing||(t.intro=e.target.value)}}})])]),n("title-bar",{attrs:{backImgPath:a("6457"),menuImgPath:t.editImgUrl,title:"基本资料",titleColor:"#fafafa",bgColor:"rgba(255, 126, 103, 1)",isShadow:!0},on:{onReact:t.judgeReact}})],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("p",[t._v("账号信息")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("p",[t._v("个人信息")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("span",[t._v("简介 :")])])}],r=a("efb4"),i=a("6251"),s={name:"",components:{TitleBar:r["a"]},data:function(){return{isEdit:!1,username:"",id:"",level:0,gender:"",age:"",email:"",intro:""}},computed:{editImgUrl:{get:function(){return this.isEdit?a("121e"):a("97a3")}}},watch:{},methods:{judgeReact:function(t){if(1==t)this.isEdit=!0;else{this.isEdit=!1,this.$store.commit("setIsLoading",!0);var e=new FormData;e.append("_id",this.$store.state.userInfo._id),e.append("username",this.username),e.append("gender",this.gender),e.append("age",this.age),e.append("email",this.email),e.append("intro",this.intro),this.$options.methods.uploadInfo.bind(this)(e)}},uploadInfo:function(t){var e=this,a=this;Object(i["c"])(t).then((function(n){if(a.$store.commit("setIsLoading",!1),1==n){var o=a.$store.state.userInfo;o.username=t.get("username"),o.gender=t.get("gender"),o.age=t.get("age"),o.email=t.get("email"),o.intro=t.get("intro"),a.$store.commit("setUserInfo",o),"true"==localStorage.getItem("isRemUP")&&localStorage.setItem("unm",o.username),e.$tinyToast({content:"Modify successfully.",duration:2e3})}else-1==n?e.$tinyToast({content:"Modify failed! (username already exists)",duration:2e3}):e.$tinyToast({content:"Modify failed! (unknown error)",duration:2e3}),a.username=a.$store.state.userInfo.username,a.gender=a.$store.state.userInfo.gender,a.age=a.$store.state.userInfo.age,a.email=a.$store.state.userInfo.email,a.intro=a.$store.state.userInfo.intro}))}},created:function(){this.username=this.$store.state.userInfo.username,this.id=this.$store.state.userInfo._id,this.level=this.$store.state.userInfo.level,this.gender=this.$store.state.userInfo.gender,this.age=this.$store.state.userInfo.age,this.email=this.$store.state.userInfo.email,this.intro=this.$store.state.userInfo.intro}},l=s,d=(a("d180"),a("2877")),f=Object(d["a"])(l,n,o,!1,null,"4d172ff4",null);e["default"]=f.exports},ba69:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,"#settings[data-v-7230a463]{margin-top:65px}",""])},c1c2:function(t,e,a){"use strict";var n=a("ce91"),o=a.n(n);o.a},c361:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,"#sponsor[data-v-8b0b3d06]{margin-top:65px}img[data-v-8b0b3d06]{position:relative;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:90%;height:auto;max-width:95%;max-height:100%}img[data-v-8b0b3d06]:nth-child(2){margin-bottom:25px}",""])},ca18:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"options"}},[a("router-view")],1)},o=[],r=a("37fe"),i=a("b72c"),s=a("ac42"),l=a("ad55"),d=a("a66c"),f=a("815a"),c={name:"Options",components:{IndividualSpace:r["default"],EssentialInfo:i["default"],AccountSecurity:s["default"],Settings:l["default"],About:d["default"],Sponsor:f["default"]}},p=c,u=a("2877"),m=Object(u["a"])(p,n,o,!1,null,"04a133c4",null);e["default"]=m.exports},cad3:function(t,e,a){var n=a("1ea0");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=a("499e").default;o("4afbaf5d",n,!0,{sourceMap:!1,shadowMode:!1})},ce91:function(t,e,a){var n=a("d958");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=a("499e").default;o("efa229f2",n,!0,{sourceMap:!1,shadowMode:!1})},cff9:function(t,e,a){var n=a("ba69");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=a("499e").default;o("30d7587b",n,!0,{sourceMap:!1,shadowMode:!1})},d180:function(t,e,a){"use strict";var n=a("16c3"),o=a.n(n);o.a},d958:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,"p[data-v-71b064c9]{margin:0;padding:0}#background-container[data-v-71b064c9]{position:relative;top:0;background-image:radial-gradient(#ffb478 5%,#ffb478 0,#ff7e67 90%);width:100%;min-height:200px}#infoPanel[data-v-71b064c9]{position:relative;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;padding-top:55px;padding-bottom:15px;text-align:center;text-shadow:4px 4px 5px rgba(0,0,0,.2);color:#fafafa}#infoPanel img[data-v-71b064c9]:first-child{width:55px;height:55px;border:1px solid #fafafa;border-radius:5px;background-color:#fafafa;-webkit-box-shadow:4px 4px 5px rgba(0,0,0,.2);box-shadow:4px 4px 5px rgba(0,0,0,.2)}#infoPanel div[data-v-71b064c9]:nth-child(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:15px}#infoPanel div:nth-child(2) span[data-v-71b064c9]{font-size:18px;font-weight:700}#infoPanel div:nth-child(2) img[data-v-71b064c9]{width:17px;height:17px;padding:1px;margin-left:10px;border:.5px solid #fafafa;border-radius:100%;background-color:#ff7e67}#infoPanel div:nth-child(2) button[data-v-71b064c9]{height:20px;padding:0 5px 0 5px;margin-left:10px;outline:none;border:none;border-radius:4px;color:#ff7e67;font-size:14px;background-color:#fafafa}#infoPanel p[data-v-71b064c9]:nth-child(3){display:-webkit-box;display:-ms-flexbox;display:flex;margin-top:10px;font-size:14px}#infoPanel p:nth-child(3) span[data-v-71b064c9]{padding:0 10px 0 10px}#infoPanel p[data-v-71b064c9]:nth-child(4){padding:0 20px 0 20px;margin-top:10px;word-break:break-all;font-size:14px}#postPanel[data-v-71b064c9]{margin-top:20px}",""])},ef2a:function(t,e,a){t.exports=a.p+"assets/img/WeChat.png"},f134:function(t,e,a){t.exports=a.p+"assets/img/man_w.svg"}}]);