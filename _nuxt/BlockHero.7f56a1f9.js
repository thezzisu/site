import"./MDCSlot.977602a1.js";import _ from"./ButtonLink.ecfacbd0.js";import f from"./Terminal.33a2274a.js";import y from"./VideoPlayer.23b374a8.js";import{r as n}from"./slot.288113dc.js";import{d as k,b as o,c as r,e as s,g as a,F as h,V as i,w as v,f as d,t as l,X as $,k as b}from"./entry.82d4b94a.js";import"./node.5e2463bb.js";import"./NuxtImg.vue.dc7cb36d.js";const B={class:"block-hero"},w={class:"layout"},g={class:"content"},H={key:0,class:"announce"},S={class:"title"},V={class:"description"},q={key:1,class:"extra"},x={class:"actions"},A=["href"],C={class:"support"},N=k({__name:"BlockHero",props:{cta:{type:Array,required:!1,default:()=>[]},secondary:{type:Array,required:!1,default:()=>[]},video:{type:String,required:!1,default:""},snippet:{type:[Array,String],required:!1,default:""}},setup(e){return(t,c)=>{const u=_,p=f,m=y;return o(),r("section",B,[s("div",w,[s("div",g,[t.$slots.announce?(o(),r("p",H,[n(t.$slots,"announce",{unwrap:"p"},void 0,!0)])):a("",!0),s("h1",S,[n(t.$slots,"title",{unwrap:"p"},()=>[c[0]||(c[0]=d(" Hero Title "))],!0)]),s("p",V,[n(t.$slots,"description",{unwrap:"p"},()=>[c[1]||(c[1]=d(" Hero default description. "))],!0)]),t.$slots.extra?(o(),r("div",q,[n(t.$slots,"extra",{unwrap:"p"},void 0,!0)])):a("",!0),s("div",x,[t.$slots.actions?n(t.$slots,"actions",{key:0,unwrap:"p"},void 0,!0):(o(),r(h,{key:1},[e.cta?(o(),i(u,{key:0,class:"cta",bold:"",size:"medium",href:e.cta[1]},{default:v(()=>[d(l(e.cta[0]),1)]),_:1},8,["href"])):a("",!0),e.secondary?(o(),r("a",{key:1,href:e.secondary[1],class:"secondary"},l(e.secondary[0]),9,A)):a("",!0)],64))])]),s("div",C,[$(t.$slots,"support",{},()=>[e.snippet?(o(),i(p,{key:0,content:e.snippet},null,8,["content"])):e.video?(o(),i(m,{key:1,src:e.video},null,8,["src"])):a("",!0)],!0)])])])}}});const X=b(N,[["__scopeId","data-v-eb8ec4bb"]]);export{X as default};
