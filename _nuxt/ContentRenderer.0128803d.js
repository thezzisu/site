import{_ as f}from"./ContentRendererMarkdown.vue.cd58d72f.js";import{d as s,Y as l,Z as d,L as o}from"./entry.82d4b94a.js";import"./node.5e2463bb.js";const h=s({name:"ContentRenderer",props:{value:{type:Object,required:!1,default:()=>({})},excerpt:{type:Boolean,default:!1},tag:{type:String,default:"div"}},setup(t){l(()=>t.excerpt,n=>{var e,a,u;n&&!((e=t.value)!=null&&e.excerpt)&&(console.warn(`No excerpt found for document content/${(a=t==null?void 0:t.value)==null?void 0:a._path}.${(u=t==null?void 0:t.value)==null?void 0:u._extension}!`),console.warn("Make sure to use <!--more--> in your content if you want to use excerpt feature."))},{immediate:!0})},render(t){var i,c;const n=d(),{value:e,excerpt:a,tag:u}=t,r=a?e==null?void 0:e.excerpt:e==null?void 0:e.body;return!((i=r==null?void 0:r.children)!=null&&i.length)&&(n!=null&&n.empty)?n.empty({value:e,excerpt:a,tag:u,...this.$attrs}):n!=null&&n.default?n.default({value:e,excerpt:a,tag:u,...this.$attrs}):(r==null?void 0:r.type)==="root"&&((c=r==null?void 0:r.children)!=null&&c.length)?o(f,{value:e,excerpt:a,tag:u,...this.$attrs}):o("pre",null,JSON.stringify({message:"You should use slots with <ContentRenderer>",value:e,excerpt:a,tag:u},null,2))}}),g=h;export{g as default};
