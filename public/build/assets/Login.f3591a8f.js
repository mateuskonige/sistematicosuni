import{j as k,d as w,y as x,e as s,o as n,k as b,z as y,u as v,c,w as d,f as a,H as V,t as $,p as u,a as r,L as B,g as p,n as C,b as L}from"./app.8209e439.js";import{_ as N}from"./GuestLayout.4fe63388.js";import{_ as f}from"./InputError.1027ca78.js";import{_,a as g}from"./TextInput.65cf745a.js";import{_ as R}from"./PrimaryButton.4c337f0f.js";import"./ApplicationLogo.d66f1c30.js";import"./_plugin-vue_export-helper.cdc0426e.js";const S=["value"],U={__name:"Checkbox",props:{checked:{type:[Array,Boolean],default:!1},value:{default:null}},emits:["update:checked"],setup(l,{emit:e}){const i=l,m=k({get(){return i.checked},set(t){e("update:checked",t)}});return(t,o)=>w((n(),b("input",{type:"checkbox",value:l.value,"onUpdate:modelValue":o[0]||(o[0]=h=>y(m)?m.value=h:null),class:"rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"},null,8,S)),[[x,s(m)]])}},q={key:0,class:"mb-4 font-medium text-sm text-green-600"},F=["onSubmit"],P={class:"mt-4"},j={class:"block mt-4"},z={class:"flex items-center"},D=r("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),E={class:"flex items-center justify-end mt-4"},K={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(l){const e=v({email:"",password:"",remember:!1}),i=()=>{e.post(route("login"),{onFinish:()=>e.reset("password")})};return(m,t)=>(n(),c(N,null,{default:d(()=>[a(s(V),{title:"Log in"}),l.status?(n(),b("div",q,$(l.status),1)):u("",!0),r("form",{onSubmit:L(i,["prevent"])},[r("div",null,[a(_,{for:"email",value:"Email"}),a(g,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":t[0]||(t[0]=o=>s(e).email=o),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),a(f,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),r("div",P,[a(_,{for:"password",value:"Password"}),a(g,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":t[1]||(t[1]=o=>s(e).password=o),required:"",autocomplete:"current-password"},null,8,["modelValue"]),a(f,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),r("div",j,[r("label",z,[a(U,{name:"remember",checked:s(e).remember,"onUpdate:checked":t[2]||(t[2]=o=>s(e).remember=o)},null,8,["checked"]),D])]),r("div",E,[l.canResetPassword?(n(),c(s(B),{key:0,href:m.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:d(()=>[p(" Forgot your password? ")]),_:1},8,["href"])):u("",!0),a(R,{class:C(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:d(()=>[p(" Log in ")]),_:1},8,["class","disabled"])])],40,F)]),_:1}))}};export{K as default};
