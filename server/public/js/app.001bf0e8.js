(function(e){function t(t){for(var r,a,i=t[0],u=t[1],c=t[2],d=0,f=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(f.length)f.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},s=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var l=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"01f7":function(e,t,n){},"2e53":function(e,t,n){},3910:function(e,t,n){},"4c44":function(e,t,n){"use strict";n("2e53")},"4c71":function(e,t,n){},"4d77":function(e,t,n){"use strict";n("af4f")},"53d7":function(e,t,n){"use strict";n("01f7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],a=(n("5c0b"),n("2877")),i={},u=Object(a["a"])(i,o,s,!1,null,null,null),c=u.exports,l=n("1da1"),d=(n("96cf"),n("8c4f")),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"nav"},[null!=e.userInfo.userId?n("div",[n("button",{on:{click:e.logout}},[e._v("Log out")])]):n("div",[n("button",{on:{click:e.openModal}},[e._v("Login")]),n("button",{on:{click:e.openModal}},[e._v("Sign up")])])]),n("Generator",{on:{newLink:e.refreshLinks}}),void 0!=e.userInfo.userId?n("UserLinks"):e._e(),e.modal?n("Modal",{attrs:{modal:e.modal},on:{closeModal:e.catchCloseModal}}):e._e(),n("Footer")],1)},p=[],m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Generate new link")]),n("form",{on:{submit:function(t){return t.preventDefault(),e.generateLink(t)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.link,expression:"link"}],attrs:{type:"text",id:"link",name:"link",placeholder:"Shorten your link"},domProps:{value:e.link},on:{input:function(t){t.target.composing||(e.link=t.target.value)}}}),n("button",{attrs:{type:"submit"}},[e._v("Shorten")])]),e.generatedLink?n("h2",[e._v(" Shortened link: "),n("a",{attrs:{href:e.generatedLink}},[e._v(" "+e._s(e.generatedLink)+" ")])]):e._e()])},h=[],g=(n("9911"),n("4d63"),n("ac1f"),n("25f0"),n("d4ec")),v=n("bee2"),k=n("bc3a"),I=n.n(k),b=function(){function e(){Object(g["a"])(this,e)}return Object(v["a"])(e,null,[{key:"generateLink",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n="api/generator/newLink";return I.a.post(n,{link:e,userId:t}).then((function(e){return e.data})).catch((function(e){return console.log(e.response.data),e.response.data}))}}]),e}(),w=b,_={name:"Generator",data:function(){return{link:"",generatedLink:null}},computed:{getUserId:function(){return this.$store.getters.getUserId}},methods:{generateLink:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.link=e.addHttp(e.link),console.log(e.getUserId),""==e.getUserId){t.next=8;break}return t.next=5,w.generateLink(e.link,e.getUserId);case 5:n=t.sent,t.next=11;break;case 8:return t.next=10,w.generateLink(e.link);case 10:n=t.sent;case 11:console.log(n),e.generatedLink="https://houge.ninja/l/".concat(n.shortCode),e.$emit("newLink");case 14:case"end":return t.stop()}}),t)})))()},addHttp:function(e){var t=new RegExp("^(http|https)://","i");return t.test(e)||(e="http://"+e),e}}},L=_,U=Object(a["a"])(L,m,h,!1,null,"43e1f8ce",null),x=U.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Generated links")]),n("table",[e._m(0),e._l(e.userLinks,(function(t,r){return n("tr",{key:r},[n("th",[n("a",{attrs:{href:e.prefixUrl(t.shortCode)}},[e._v(" https://houge.ninja/l/"+e._s(t.shortCode)+" ")])]),n("th",[n("a",{attrs:{href:t.link}},[e._v(e._s(t.link))])]),n("th",[n("p",[e._v(e._s(t.clickCount))])])])}))],2)])},O=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",[n("th",[e._v("Short link")]),n("th",[e._v("Links to")]),n("th",[e._v("Times click")])])}],M={name:"UserLinks",data:function(){return{userInfo:null}},computed:{userLinks:function(){return this.$store.getters.getUserLinks}},methods:{prefixUrl:function(e){return"https://houge.ninja/l/".concat(e)}}},S=M,j=(n("64f9"),Object(a["a"])(S,y,O,!1,null,"7fdb7696",null)),$=j.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modal"},[n("div",{staticClass:"modal-content"},[n("div",{on:{click:e.closeModal}},[n("svg",{staticClass:"backButton",attrs:{viewBox:"0 0 320 512"}},[n("path",{attrs:{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"}})])]),n("div",{staticClass:"grid"},[n("div",[n("LoginForm",{on:{closeModal:e.closeModal}})],1),n("div",[n("SignupForm",{on:{closeModal:e.closeModal}})],1)])])])},N=[],P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"loginForm"},[n("h1",[e._v("Sign in")]),n("form",{on:{submit:function(t){return t.preventDefault(),e.loginToUser(t)}}},[n("label",{attrs:{for:"email"}},[e._v("Email")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"email",autocomplete:"email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),n("label",{attrs:{for:"password"}},[e._v("Password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"password",autocomplete:"current-password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "+e._s(e.errorMsg)+" "),n("button",{staticClass:"button-square",attrs:{type:"submit"}},[e._v("Sign in")])])])},E=[],R=function(){function e(){Object(g["a"])(this,e)}return Object(v["a"])(e,null,[{key:"createNewUser",value:function(e,t){var n="api/account/newUser";return I.a.post(n,{email:e,password:t}).then((function(e){return e.data})).catch((function(e){return console.log(e.response.data),e.response.data}))}},{key:"loginToUser",value:function(e,t){var n="api/account/login";return I.a.post(n,{email:e,password:t}).then((function(e){return e.data})).catch((function(e){return console.log(e.response.data),e.response.data}))}},{key:"getLinks",value:function(e){var t="api/account/allLinks/".concat(e);return I.a.get(t).then((function(e){return e.data})).catch((function(e){return console.log(e.response.data),e.response.data}))}}]),e}(),F=R,J={name:"Login",data:function(){return{email:"",password:"",userInfo:null,errorMsg:null}},beforeMount:function(){null!=localStorage.getItem("userInfo")?this.userInfo=JSON.parse(localStorage.getItem("userInfo")):this.userInfo=[]},methods:{loginToUser:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,F.loginToUser(e.email,e.password);case 2:n=t.sent,console.log(n),n.auth?(e.userInfo={auth:n.auth,userId:n.userId},r=JSON.stringify(e.userInfo),localStorage.setItem("userInfo",r),e.setUserId(n.userId),e.setAllUserLinks(n.userId),e.$emit("closeModal")):e.errorMsg=n.msg;case 5:case"end":return t.stop()}}),t)})))()},setUserId:function(e){this.$store.commit("setUserId",e)},setAllUserLinks:function(e){this.$store.dispatch("setUserLinks",e)}}},T=J,G=(n("ff43"),Object(a["a"])(T,P,E,!1,null,"1073a321",null)),H=G.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"signupForm"},[n("h1",[e._v("Sign up")]),n("form",{on:{submit:function(t){return t.preventDefault(),e.createNewUser(t)}}},[n("label",{attrs:{for:"email"}},[e._v("Email")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"email",autocomplete:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),n("label",{attrs:{for:"password"}},[e._v("Password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"password",autocomplete:"new-password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "+e._s(e.errorMsg)+" "),n("button",{staticClass:"button-square",attrs:{type:"submit"}},[e._v("Sign up")])])])},A=[],B={name:"Signup",data:function(){return{email:"",password:"",userInfo:null,errorMsg:null}},beforeMount:function(){null!=localStorage.getItem("userInfo")?this.userInfo=JSON.parse(localStorage.getItem("userInfo")):this.userInfo=[]},methods:{createNewUser:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,F.createNewUser(e.email,e.password);case 2:n=t.sent,n.auth?(e.userInfo={auth:n.auth,userId:n.userId},r=JSON.stringify(e.userInfo),localStorage.setItem("userInfo",r),e.setUserId(n.userId),e.setAllUserLinks(n.userId),e.$emit("closeModal")):e.errorMsg=n.msg;case 4:case"end":return t.stop()}}),t)})))()},setUserId:function(e){this.$store.commit("setUserId",e)},setAllUserLinks:function(e){this.$store.dispatch("setUserLinks",e)}}},D=B,z=(n("b61c"),Object(a["a"])(D,q,A,!1,null,"cd15e860",null)),V=z.exports,K={components:{SignupForm:V,LoginForm:H},name:"Modal",props:{modal:Boolean},methods:{closeModal:function(){this.$emit("closeModal")}}},Q=K,W=(n("4d77"),Object(a["a"])(Q,C,N,!1,null,"be91baec",null)),X=W.exports,Y=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Z=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[n("p",[e._v(" Made by "),n("a",{attrs:{href:"https://mhouge.dk"}},[e._v("Mads Hougesen")]),e._v(" using Vue.js, Node.js & MongoDB - "),n("a",{attrs:{href:"https://github.com/Hougesen/url-shortener"}},[e._v("Github")])])])}],ee={name:"Footer"},te=ee,ne=(n("53d7"),Object(a["a"])(te,Y,Z,!1,null,null,null)),re=ne.exports,oe={name:"Home",components:{Generator:x,UserLinks:$,Modal:X,Footer:re},data:function(){return{modal:null,userInfo:null}},beforeMount:function(){null!=localStorage.getItem("userInfo")?this.userInfo=JSON.parse(localStorage.getItem("userInfo")):this.userInfo=[],this.checkIfLoggedIn()},computed:{userLinks:function(){return this.$store.getters.getUserLinks}},methods:{checkIfLoggedIn:function(){this.userInfo.auth&&(this.$store.commit("setUserId",this.userInfo.userId),this.$store.dispatch("setUserLinks",this.userInfo.userId))},openModal:function(){this.modal=!0},catchCloseModal:function(){this.modal=!1,null!=localStorage.getItem("userInfo")?this.userInfo=JSON.parse(localStorage.getItem("userInfo")):this.userInfo=[]},logout:function(){localStorage.removeItem("userInfo"),this.userInfo=null,location.reload()},refreshLinks:function(){this.$store.dispatch("setUserLinks",this.userInfo.userId)}}},se=oe,ae=(n("4c44"),Object(a["a"])(se,f,p,!1,null,"057172c4",null)),ie=ae.exports,ue=function(){function e(){Object(g["a"])(this,e)}return Object(v["a"])(e,null,[{key:"redirect",value:function(e){var t="/api/redirector/".concat(e);return I.a.get(t).then((function(e){return e.data})).catch((function(e){return console.log(e.response.data),e.response.data}))}}]),e}(),ce=ue;r["a"].use(d["a"]);var le=[{path:"/",name:"Home",component:ie},{path:"/l/:shortCode",redirect:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.params,!n.shortCode){e.next=7;break}return e.next=4,ce.redirect(n.shortCode);case 4:return r=e.sent,window.location.href=r.to,e.abrupt("return","/redirecting");case 7:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}],de=new d["a"]({mode:"history",routes:le}),fe=de,pe=n("2f62");r["a"].use(pe["a"]);var me=new pe["a"].Store({state:{userId:"",userLinks:[]},mutations:{setUserId:function(e,t){e.userId=t},setUserLinks:function(e,t){e.userLinks=t}},actions:{setUserLinks:function(e,t){return Object(l["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,F.getLinks(t);case 2:r=n.sent,e.commit("setUserLinks",r);case 4:case"end":return n.stop()}}),n)})))()}},modules:{},getters:{getUserId:function(e){return e.userId},getUserLinks:function(e){return e.userLinks}}});r["a"].config.productionTip=!1,new r["a"]({router:fe,store:me,render:function(e){return e(c)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"64f9":function(e,t,n){"use strict";n("bdf5")},"9c0c":function(e,t,n){},af4f:function(e,t,n){},b61c:function(e,t,n){"use strict";n("3910")},bdf5:function(e,t,n){},ff43:function(e,t,n){"use strict";n("4c71")}});
//# sourceMappingURL=app.001bf0e8.js.map