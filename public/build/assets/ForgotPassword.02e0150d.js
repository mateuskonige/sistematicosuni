import{u,o as r,c as d,w as i,f as a,e as s,H as c,k as _,t as f,p,a as t,g as w,n as g,b}from"./app.1419c855.js";import{_ as y}from"./GuestLayout.992d825e.js";import{_ as k}from"./InputError.3c612af4.js";import{_ as x,a as h}from"./TextInput.af5aa9f2.js";import{_ as V}from"./PrimaryButton.7b8fbc1f.js";import"./ApplicationLogo.47ac5143.js";import"./_plugin-vue_export-helper.cdc0426e.js";const v=t("div",{class:"mb-4 text-sm text-gray-600"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),N={key:0,class:"mb-4 font-medium text-sm text-green-600"},$=["onSubmit"],B={class:"flex items-center justify-end mt-4"},z={__name:"ForgotPassword",props:{status:String},setup(o){const e=u({email:""}),m=()=>{e.post(route("password.email"))};return(F,l)=>(r(),d(y,null,{default:i(()=>[a(s(c),{title:"Forgot Password"}),v,o.status?(r(),_("div",N,f(o.status),1)):p("",!0),t("form",{onSubmit:b(m,["prevent"])},[t("div",null,[a(x,{for:"email",value:"Email"}),a(h,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":l[0]||(l[0]=n=>s(e).email=n),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),a(k,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),t("div",B,[a(V,{class:g({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:i(()=>[w(" Email Password Reset Link ")]),_:1},8,["class","disabled"])])],40,$)]),_:1}))}};export{z as default};
