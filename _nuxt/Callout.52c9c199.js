import"./MDCSlot.977602a1.js";import{d as p,r as o,b as _,c as f,e as s,h as v,n,H as l,ao as h,ap as y,aa as g,k as C}from"./entry.82d4b94a.js";import{r}from"./slot.288113dc.js";import"./node.5e2463bb.js";const V={class:"summary"},k={class:"content"},w=p({__name:"Callout",props:{type:{type:String,default:"info",validator(a){return["info","success","warning","danger","primary"].includes(a)}},modelValue:{required:!1,default:()=>o(!1)}},emits:["update:modelValue"],setup(a,{emit:c}){const i=a,u=c,e=o(i.modelValue),d=()=>{e.value=!e.value,u("update:modelValue",e.value)};return(t,x)=>{const m=g;return _(),f("div",{class:n(["callout",[a.type]])},[s("span",{class:"preview",onClick:d},[s("span",V,[r(t.$slots,"summary",{},void 0,!0)]),v(m,{name:"heroicons-outline:chevron-right",class:n(["icon",[l(e)&&"rotate"]])},null,8,["class"])]),h(s("div",k,[r(t.$slots,"content",{},void 0,!0)],512),[[y,l(e)]])],2)}}});const $=C(w,[["__scopeId","data-v-9a0f289d"]]);export{$ as default};
