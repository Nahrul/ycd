import{Q as h,a as u,u as v,m as f,R as b,o as r,c as S,w as c,b as t,d as g,v as d,p as s,N as x,S as w,n as _,T as y,U as k,e as D,f as E,k as M,_ as V,A as B,t as I}from"./index.2b3819db.js";import"./BaseButtons.833f0ef4.js";const N={class:"flex gap-2 items-center justify-between mt-4"},$=["value"],P={class:"monitor-suhu"},C=["src"],F={__name:"SuhuView",setup(L){const m=u("https://docs.google.com/spreadsheets/d/1OJIyIdIhfDlZPl0yP53FMuPMlzL2gEOk7vGxNXEw1a0/preview"),o=v(),l=f(()=>o.availableSheets),e=u("");b(async()=>{await o.getSheetName();const n=new Date().toLocaleString("id-ID",{month:"long",year:"numeric"});e.value=l.value.includes(n)?n:l.value[0]||""});const p=()=>{if(!e.value){alert("Pilih bulan terlebih dahulu.");return}o.exports(e.value)};return(n,i)=>(r(),S(V,null,{default:c(()=>[t(M,null,{default:c(()=>[t(g,{icon:d(B),title:"Monitor Suhu Freezer Yogya Ciledug",main:""},null,8,["icon"]),s("div",N,[x(s("select",{"onUpdate:modelValue":i[0]||(i[0]=a=>e.value=a),class:"border p-2 rounded"},[(r(!0),_(k,null,y(d(l),a=>(r(),_("option",{key:a,value:a},I(a),9,$))),128))],512),[[w,e.value]]),t(D,{onClick:p,color:"primary",label:"Export ke Excel"})]),t(E,{class:"mb-6","has-table":""},{default:c(()=>[s("div",P,[s("iframe",{src:m.value,width:"100%",height:"600px",style:{border:"none"}},null,8,C)])]),_:1})]),_:1})]),_:1}))}},z=h(F,[["__scopeId","data-v-965131e8"]]);export{z as default};
