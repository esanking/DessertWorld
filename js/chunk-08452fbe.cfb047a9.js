(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08452fbe"],{"41c9":function(t,s,e){"use strict";var a=e("c973"),n=e.n(a);n.a},"62d5":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"bg-light"},[e("loading",{attrs:{active:t.isloading},on:{"update:active":function(s){t.isloading=s}}}),e("form",{staticClass:"form-signin",on:{submit:function(s){return s.preventDefault(),t.signin(s)}}},[e("h2",{staticClass:" mb-3 font-weight-normal text-white"},[t._v("員工後臺登入系統")]),e("label",{staticClass:"sr-only",attrs:{for:"inputEmail"}},[t._v("Email address")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail",placeholder:"Email address",required:"",autofocus:""},domProps:{value:t.user.username},on:{input:function(s){s.target.composing||t.$set(t.user,"username",s.target.value)}}}),e("label",{staticClass:"sr-only",attrs:{for:"inputPassword"}},[t._v("Password")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"Password",required:""},domProps:{value:t.user.password},on:{input:function(s){s.target.composing||t.$set(t.user,"password",s.target.value)}}}),e("button",{staticClass:"btn btn-lg btn-primary btn-block rounded",attrs:{type:"submit"}},[t._v("登入")]),t.alertMsg?e("div",{staticClass:"alert-msg"},[e("i",{staticClass:"fa fa-exclamation-circle"}),t._v("登入失敗 ")]):t._e()])],1)},n=[],i=(e("99af"),{name:"Login",components:{},data:function(){return{user:{username:"",password:""},alertMsg:!1}},computed:{isloading:function(){return this.$store.state.isloading}},methods:{signin:function(){var t="".concat("https://vue-course-api.hexschool.io","/admin/signin"),s=this;s.$store.dispatch("updateLoading",!0),s.$http.post(t,s.user).then((function(t){if(t.data.success){var e=t.data,a=e.token,n=e.expired;document.cookie="hexToken=".concat(a,"; expires=").concat(new Date(n)),s.$router.push("/products"),s.$store.dispatch("updateLoading",!1),s.alertMsg=!1}else s.alertMsg=!0,s.$store.dispatch("updateLoading",!1)}))}},created:function(){this.$store.dispatch("settimeLoading")}}),o=i,r=(e("41c9"),e("2877")),u=Object(r["a"])(o,a,n,!1,null,"5cf7593c",null);s["default"]=u.exports},c973:function(t,s,e){}}]);
//# sourceMappingURL=chunk-08452fbe.cfb047a9.js.map