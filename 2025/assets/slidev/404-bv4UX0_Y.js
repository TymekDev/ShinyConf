import{d as f,S as m,A as _,f as x,g as o,an as a,t as r,T as v,b as u,i,w as c,a as g,o as n}from"../modules/vue-C3NdDM6C.js";import{u as k,_ as h}from"../index-Df5QIzh5.js";import"../modules/shiki-Dj7Y6q57.js";const N={class:"grid justify-center text-center pt-15% gap-5"},w={class:"text-2xl"},y={class:"op-60"},B={class:"mt-3 flex flex-col gap-2 max-w-xs mx-auto w-full"},C=f({__name:"404",setup(R){const{currentRoute:l}=m(),{total:d}=k(),s=_(()=>{const t=l.value.path.match(/\d+/);if(t){const e=+t[0];if(e>0&&e<=d.value)return e}return null});return(p,t)=>{const e=g("RouterLink");return n(),x("div",N,[o("div",null,[t[2]||(t[2]=o("h1",{class:"text-9xl font-light"}," 404 ",-1)),o("p",w,[t[0]||(t[0]=a(" Page ")),o("code",y,r(v(l).path),1),t[1]||(t[1]=a(" not found "))])]),o("div",B,[s.value!==1?(n(),u(e,{key:0,to:"/",class:"page-link"},{default:c(()=>t[3]||(t[3]=[a(" Go Home ")])),_:1})):i("v-if",!0),s.value?(n(),u(e,{key:1,to:`/${s.value}`,class:"page-link"},{default:c(()=>[a(" Go to Slide "+r(s.value),1)]),_:1},8,["to"])):i("v-if",!0)])])}}}),L=h(C,[["__scopeId","data-v-2af184e6"]]);export{L as default};
