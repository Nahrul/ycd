import{r as d,a9 as f,o as _,c,w as s,b as a,f as g,s as b,g as h,e as V,h as i,v as m,aa as w,I as v,L as $}from"./index.2b3819db.js";import{_ as k,a as A}from"./SectionFullScreen.f60f5125.js";import{_ as L}from"./FormCheckRadio.43e03151.js";import{_ as t}from"./FormField.6fe79e09.js";import{_ as S}from"./BaseButtons.833f0ef4.js";const C={__name:"LoginView",setup(y){const e=d({login:"",pass:"",remember:!0,role:"user"}),n=f(),r=w(),u=()=>{e.login==="nahrul"&&e.pass==="nahrul123"?(n.login("Nahrul","admin"),r.push("/")):e.login==="azril"&&e.pass==="azril123"?(n.login("Azril","user"),r.push("/")):e.login==="nahdevl"&&e.pass==="nahdevl123"?(n.login("Nahdevl","admin","nahdevl"),r.push("/")):alert("Login gagal. Silakan periksa kembali username dan password Anda.")};return(z,l)=>(_(),c(A,null,{default:s(()=>[a(k,{bg:"purplePink"},{default:s(({cardClass:p})=>[a(g,{class:b(p),"is-form":"",onSubmit:h(u,["prevent"])},{footer:s(()=>[a(S,null,{default:s(()=>[a(V,{type:"submit",color:"info",label:"Login"})]),_:1})]),default:s(()=>[a(t,{label:"Login",help:"Please enter your login"},{default:s(()=>[a(i,{modelValue:e.login,"onUpdate:modelValue":l[0]||(l[0]=o=>e.login=o),icon:m(v),name:"login",autocomplete:"username"},null,8,["modelValue","icon"])]),_:1}),a(t,{label:"Password",help:"Please enter your password"},{default:s(()=>[a(i,{modelValue:e.pass,"onUpdate:modelValue":l[1]||(l[1]=o=>e.pass=o),icon:m($),type:"password",name:"password",autocomplete:"current-password"},null,8,["modelValue","icon"])]),_:1}),a(L,{modelValue:e.remember,"onUpdate:modelValue":l[2]||(l[2]=o=>e.remember=o),name:"remember",label:"Remember","input-value":!0},null,8,["modelValue"])]),_:2},1032,["class","onSubmit"])]),_:1})]),_:1}))}};export{C as default};
