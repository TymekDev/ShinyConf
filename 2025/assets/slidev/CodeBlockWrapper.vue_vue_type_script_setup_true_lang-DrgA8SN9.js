import{r as H,s as I}from"../modules/unplugin-icons-BzxFO-lQ.js";import{d as w,r as E,O as N,G as y,L as B,A as v,aI as q,f as _,o as c,j as M,i as V,T as u,b as C,k as $,n as j}from"../modules/vue-C3NdDM6C.js";import{c as k,a8 as z,L as D,ai as K,aj as R}from"../index-Df5QIzh5.js";import{u as G}from"./context-C5MsG-wI.js";const O=["title"],J=w({__name:"CodeBlockWrapper",props:{ranges:{type:Array,default:()=>[]},finally:{type:[String,Number],default:"last"},startLine:{type:Number,default:1},lines:{type:Boolean,default:k.lineNumbers},at:{type:[String,Number],default:"+1"},maxHeight:{type:String,default:void 0}},setup(S){const e=S,{$clicksContext:a}=G(),s=E(),d=z();N(()=>{a.unregister(d)}),y(()=>{var t;(t=s.value)==null||t.classList.toggle("slidev-code-line-numbers",e.lines)}),B(()=>{var r;if(!a||!((r=e.ranges)!=null&&r.length))return;const t=a.calculateSince(e.at,e.ranges.length-1);a.register(d,t);const o=v(()=>t?Math.max(0,a.current-t.start+1):D),n=v(()=>e.finally==="last"?e.ranges.at(-1):e.finally.toString());y(()=>{if(!s.value)return;let i=e.ranges[o.value]??n.value;const g=i==="hide";s.value.classList.toggle(K,g),g&&(i=e.ranges[o.value+1]??n.value);const h=s.value.querySelector(".shiki"),f=Array.from(h.querySelectorAll("code > .line")),L=f.length;if(R(i,L,e.startLine,l=>[f[l]]),e.maxHeight){const l=Array.from(h.querySelectorAll(".line.highlighted"));l.reduce((m,A)=>A.offsetHeight+m,0)>s.value.offsetHeight?l[0].scrollIntoView({behavior:"smooth",block:"start"}):l.length>0&&l[Math.round((l.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}})});const{copied:p,copy:b}=q();function x(){var o,n;const t=(n=(o=s.value)==null?void 0:o.querySelector(".slidev-code"))==null?void 0:n.textContent;t&&b(t)}return(t,o)=>{const n=H,r=I;return c(),_("div",{ref_key:"el",ref:s,class:j(["slidev-code-wrapper relative group",{"slidev-code-line-numbers":e.lines}]),style:$({"max-height":e.maxHeight,"overflow-y":e.maxHeight?"scroll":void 0,"--start":e.startLine})},[M(t.$slots,"default"),u(k).codeCopy?(c(),_("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:u(p)?"Copied":"Copy",onClick:o[0]||(o[0]=i=>x())},[u(p)?(c(),C(n,{key:0,class:"p-2 w-8 h-8"})):(c(),C(r,{key:1,class:"p-2 w-8 h-8"}))],8,O)):V("v-if",!0)],6)}}});export{J as _};
