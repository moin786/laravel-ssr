import{x as u,c as d,o as r,w as i,a,b as o,f as c,h as f,u as t,g as p,t as w,d as _,n as g,e as y}from"./app-BjtRgYLm.js";import{_ as b}from"./GuestLayout-CR_LzT7-.js";import{_ as x,a as k,b as V}from"./TextInput-D6f5c6S5.js";import{P as v}from"./PrimaryButton-BX87UNM9.js";import"./ApplicationLogo-Dwui-_co.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const B={key:0,class:"mb-4 text-sm font-medium text-green-600"},N={class:"mt-4 flex items-center justify-end"},j={__name:"ForgotPassword",props:{status:{type:String}},setup(l){const e=u({email:""}),m=()=>{e.post(route("password.email"))};return(P,s)=>(r(),d(b,null,{default:i(()=>[a(t(p),{title:"Forgot Password"}),s[2]||(s[2]=o("div",{class:"mb-4 text-sm text-gray-600"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1)),l.status?(r(),c("div",B,w(l.status),1)):f("",!0),o("form",{onSubmit:_(m,["prevent"])},[o("div",null,[a(x,{for:"email",value:"Email"}),a(k,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:t(e).email,"onUpdate:modelValue":s[0]||(s[0]=n=>t(e).email=n),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),a(V,{class:"mt-2",message:t(e).errors.email},null,8,["message"])]),o("div",N,[a(v,{class:g({"opacity-25":t(e).processing}),disabled:t(e).processing},{default:i(()=>s[1]||(s[1]=[y(" Email Password Reset Link ")])),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{j as default};
