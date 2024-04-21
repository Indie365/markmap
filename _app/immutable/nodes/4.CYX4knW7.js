import{_ as C}from"../chunks/preload-helper.D6kgxu3v.js";import{s as mt,e as b,a as S,v as Q,H as ut,h as dt,c as y,d as p,f as R,g as I,i as tt,w as W,x as ft,j as h,G as pt,k as _,l as $,r as _t,y as st,t as ct,o as ht,F as gt,C as z,b as kt,K as J,n as vt}from"../chunks/scheduler.CzL0JPbh.js";import{S as Et,i as bt,c as yt,a as wt,m as At,t as Lt,d as Tt,e as Ct}from"../chunks/index.CZ9WbNVy.js";import{g as It}from"../chunks/globals.D0QH3NT1.js";import{e as K,m as Pt,a as Dt}from"../chunks/common.C1_fZTma.js";import{F as Ot}from"../chunks/footer.D2CZm6zD.js";const St=(l,t)=>{const r=l[t];return r?typeof r=="function"?r():Promise.resolve(r):new Promise((n,o)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(o.bind(null,new Error("Unknown variable dynamic import: "+t)))})};async function Rt(l){return await St(Object.assign({"../docs/faq.md":()=>C(()=>import("../chunks/faq.Chw567Oz.js"),[],import.meta.url),"../docs/json-options.md":()=>C(()=>import("../chunks/json-options.BTmTZagf.js"),[],import.meta.url),"../docs/magic-comments.md":()=>C(()=>import("../chunks/magic-comments.Dv48Zb3t.js"),[],import.meta.url),"../docs/markmap.md":()=>C(()=>import("../chunks/markmap.Sf6EmYKG.js"),[],import.meta.url),"../docs/packages--coc-markmap.md":()=>C(()=>import("../chunks/packages--coc-markmap.AHDe9Q9U.js"),[],import.meta.url),"../docs/packages--markmap-cli.md":()=>C(()=>import("../chunks/packages--markmap-cli.BqYE9tak.js"),[],import.meta.url),"../docs/packages--markmap-lib.md":()=>C(()=>import("../chunks/packages--markmap-lib.DuPyiE3C.js"),[],import.meta.url),"../docs/packages--markmap-render.md":()=>C(()=>import("../chunks/packages--markmap-render.LKbNPjla.js"),[],import.meta.url),"../docs/packages--markmap-toolbar.md":()=>C(()=>import("../chunks/packages--markmap-toolbar.CbAADZq1.js"),[],import.meta.url),"../docs/packages--markmap-view.md":()=>C(()=>import("../chunks/packages--markmap-view.CpJm1q_C.js"),[],import.meta.url)}),`../docs/${l}.md`)}async function $t({params:l}){const t=l.id,{frontmatter:r,html:n}=await Rt(t);return{path:t,frontmatter:r,html:n}}const Kt=Object.freeze(Object.defineProperty({__proto__:null,load:$t},Symbol.toStringTag,{value:"Module"})),{document:G}=It;function et(l,t,r){const n=l.slice();return n[16]=t[r],n}function at(l,t,r){const n=l.slice();return n[19]=t[r],n}function qt(l){let t,r,n=l[16].title+"",o,e,a,m=l[16].path===l[0].path&&l[2]&&rt(l);return{c(){t=b("li"),r=b("a"),o=Q(n),e=S(),m&&m.c(),a=z(),this.h()},l(i){t=y(i,"LI",{class:!0});var c=I(t);r=y(c,"A",{href:!0});var w=I(r);o=W(w,n),w.forEach(p),c.forEach(p),e=R(i),m&&m.l(i),a=z(),this.h()},h(){h(r,"href",l[16].path),J(r,"active",l[16].path===l[0].path),h(t,"class","toc-item")},m(i,c){$(i,t,c),_(t,r),_(r,o),$(i,e,c),m&&m.m(i,c),$(i,a,c)},p(i,c){c&17&&J(r,"active",i[16].path===i[0].path),i[16].path===i[0].path&&i[2]?m?m.p(i,c):(m=rt(i),m.c(),m.m(a.parentNode,a)):m&&(m.d(1),m=null)},d(i){i&&(p(t),p(e),p(a)),m&&m.d(i)}}}function Vt(l){let t,r=l[16].title+"",n,o;return{c(){t=b("li"),n=Q(r),o=S(),this.h()},l(e){t=y(e,"LI",{class:!0});var a=I(t);n=W(a,r),o=R(a),a.forEach(p),this.h()},h(){h(t,"class","toc-sep")},m(e,a){$(e,t,a),_(t,n),_(t,o)},p:vt,d(e){e&&p(t)}}}function rt(l){let t,r=K(l[2]),n=[];for(let o=0;o<r.length;o+=1)n[o]=ot(at(l,r,o));return{c(){for(let o=0;o<n.length;o+=1)n[o].c();t=z()},l(o){for(let e=0;e<n.length;e+=1)n[e].l(o);t=z()},m(o,e){for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(o,e);$(o,t,e)},p(o,e){if(e&12){r=K(o[2]);let a;for(a=0;a<r.length;a+=1){const m=at(o,r,a);n[a]?n[a].p(m,e):(n[a]=ot(m),n[a].c(),n[a].m(t.parentNode,t))}for(;a<n.length;a+=1)n[a].d(1);n.length=r.length}},d(o){o&&p(t),ct(n,o)}}}function ot(l){let t,r,n=l[19].title+"",o,e,a,m;return{c(){t=b("li"),r=b("a"),o=Q(n),a=S(),this.h()},l(i){t=y(i,"LI",{class:!0,style:!0});var c=I(t);r=y(c,"A",{href:!0});var w=I(r);o=W(w,n),w.forEach(p),a=R(c),c.forEach(p),this.h()},h(){h(r,"href",e=`#${l[19].id}`),J(r,"active",l[19]===l[3]),h(t,"class","toc-item toc-heading"),h(t,"style",m=`padding-left: ${8*l[19].depth}px`)},m(i,c){$(i,t,c),_(t,r),_(r,o),_(t,a)},p(i,c){c&4&&n!==(n=i[19].title+"")&&st(o,n),c&4&&e!==(e=`#${i[19].id}`)&&h(r,"href",e),c&12&&J(r,"active",i[19]===i[3]),c&4&&m!==(m=`padding-left: ${8*i[19].depth}px`)&&h(t,"style",m)},d(i){i&&p(t)}}}function lt(l){let t;function r(e,a){return e[16].type==="sep"?Vt:qt}let o=r(l)(l);return{c(){o.c(),t=z()},l(e){o.l(e),t=z()},m(e,a){o.m(e,a),$(e,t,a)},p(e,a){o.p(e,a)},d(e){e&&p(t),o.d(e)}}}function jt(l){var Y,Z;let t,r,n,o,e,a,m="Close",i,c,w="|||",V,P,U,v,j,M=((Y=l[0].frontmatter)==null?void 0:Y.title)+"",H,F,u,s=l[0].html+"",f,k,q,B,N;G.title=t=((Z=l[0].frontmatter)==null?void 0:Z.title)+" - markmap docs";let T=K(l[4]),g=[];for(let d=0;d<T.length;d+=1)g[d]=lt(et(l,T,d));return k=new Ot({}),{c(){r=b("meta"),n=S(),o=b("main"),e=b("aside"),a=b("a"),a.textContent=m,i=S(),c=b("a"),c.textContent=w,V=S(),P=b("ul");for(let d=0;d<g.length;d+=1)g[d].c();U=S(),v=b("div"),j=b("h1"),H=Q(M),F=S(),u=new ut(!1),f=S(),yt(k.$$.fragment),this.h()},l(d){const L=dt("svelte-1uneprz",G.head);r=y(L,"META",{name:!0,content:!0}),L.forEach(p),n=R(d),o=y(d,"MAIN",{class:!0});var A=I(o);e=y(A,"ASIDE",{id:!0,style:!0});var D=I(e);a=y(D,"A",{href:!0,rel:!0,class:!0,"data-svelte-h":!0}),tt(a)!=="svelte-2cccdd"&&(a.textContent=m),i=R(D),c=y(D,"A",{href:!0,rel:!0,class:!0,"data-svelte-h":!0}),tt(c)!=="svelte-1i8d3n7"&&(c.textContent=w),V=R(D),P=y(D,"UL",{class:!0});var E=I(P);for(let X=0;X<g.length;X+=1)g[X].l(E);E.forEach(p),D.forEach(p),U=R(A),v=y(A,"DIV",{class:!0});var O=I(v);j=y(O,"H1",{});var x=I(j);H=W(x,M),x.forEach(p),F=R(O),u=ft(O,!1),f=R(O),wt(k.$$.fragment,O),O.forEach(p),A.forEach(p),this.h()},h(){h(r,"name","Description"),h(r,"content","The documentation of markmap packages."),h(a,"href","#"),h(a,"rel","external"),h(a,"class","backdrop"),h(c,"href","#markmap/sidebar"),h(c,"rel","external"),h(c,"class","toggle"),h(P,"class","toc h-full overflow-auto"),h(e,"id","markmap/sidebar"),pt(e,"width","240px"),u.a=f,h(v,"class","markdown flex-1 min-w-0 p-4 lg:pr-12 overflow-auto"),h(o,"class","relative flex md:fs")},m(d,L){_(G.head,r),$(d,n,L),$(d,o,L),_(o,e),_(e,a),_(e,i),_(e,c),_(e,V),_(e,P);for(let A=0;A<g.length;A+=1)g[A]&&g[A].m(P,null);_(o,U),_(o,v),_(v,j),_(j,H),_(v,F),u.m(s,v),_(v,f),At(k,v,null),l[6](v),q=!0,B||(N=_t(v,"click",l[5]),B=!0)},p(d,[L]){var A,D;if((!q||L&1)&&t!==(t=((A=d[0].frontmatter)==null?void 0:A.title)+" - markmap docs")&&(G.title=t),L&29){T=K(d[4]);let E;for(E=0;E<T.length;E+=1){const O=et(d,T,E);g[E]?g[E].p(O,L):(g[E]=lt(O),g[E].c(),g[E].m(P,null))}for(;E<g.length;E+=1)g[E].d(1);g.length=T.length}(!q||L&1)&&M!==(M=((D=d[0].frontmatter)==null?void 0:D.title)+"")&&st(H,M),(!q||L&1)&&s!==(s=d[0].html+"")&&u.p(s)},i(d){q||(Lt(k.$$.fragment,d),q=!0)},o(d){Tt(k.$$.fragment,d),q=!1},d(d){d&&(p(n),p(o)),p(r),ct(g,d),Ct(k),l[6](null),B=!1,N()}}}const nt="https://cnt.deno.dev",Mt=200;async function Ht(l){const t=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(l)),r=new Uint8Array(t);return Array.from(r,n=>n.toString(16).padStart(2,"0")).join("").slice(0,6)}function it(l){return l&&!l.startsWith(window.location.origin)}function Nt(l,t,r){let n,{data:o}=t,e,a,m;const i=[{title:"markmap",path:"markmap"},{title:"JSON Options",path:"json-options"},{title:"Magic Comments",path:"magic-comments"},{title:"faq",path:"faq"},{title:"Packages",type:"sep"},{title:"markmap-lib",path:"packages--markmap-lib"},{title:"markmap-render",path:"packages--markmap-render"},{title:"markmap-view",path:"packages--markmap-view"},{title:"markmap-cli",path:"packages--markmap-cli"},{title:"markmap-toolbar",path:"packages--markmap-toolbar"},{title:"coc-markmap",path:"packages--coc-markmap"}];function c(){if(!a)return;let u;for(const s of a){if(s.el.getBoundingClientRect().top>100)break;u=s}r(3,m=u||a[0])}const w=new Set;let V;const P=async u=>{const s=await fetch(`${nt}/get/${u}`),{data:f}=await s.json();return f},U=async u=>(w.add(u),V||(V=new Promise(f=>{setTimeout(()=>{V=void 0;const k=[...w].sort().join(",");w.clear(),f(P(k))},Mt)})),(await V)[u]),v=Pt(async u=>{const s=await Ht(u),f=`markmap-url-${s}`,k=await U(f),N={hash:s,data:k,hit:()=>{fetch(`${nt}/hit/${f}`),N.data+=1},update:T=>{T.dataset.uk=s,T.textContent=`${k}`,T.classList[N.data?"remove":"add"]("hidden")}};return N});function j(u){u.forEach(async s=>{s.target="_blank",s.rel="noopener";const f=await v(s.href);if(s.__counting)return;const k=document.createElement("span");k.className="url-badge",s.after(k),f.update(k),s.__counting=f.hash})}async function M(u){const s=u.target.closest("a");if(!s||!it(s.href))return;const f=await v(s.href);f.hit(),document.querySelectorAll(`[data-uk="${f.hash}"]`).forEach(f.update)}function H(){if(!e)return;r(2,a=Array.from(e.querySelectorAll("h2,h3"),s=>({el:s,id:s.id,title:s.textContent,depth:+s.tagName.toLowerCase().slice(1)}))),n=!1;const{hljs:u}=window;if(u){const s=window.location.hash;s&&(window.location.hash=""),e.querySelectorAll("pre code").forEach(f=>{u.highlightElement(f)}),s&&(window.location.hash=s)}c(),j(Array.from(e.querySelectorAll("a[href]")).filter(s=>it(s.href)))}ht(()=>(Dt().then(H),e.addEventListener("scroll",c),()=>e.removeEventListener("scroll",c))),gt(()=>{n&&e&&(e.scrollTo(0,0),H())});function F(u){kt[u?"unshift":"push"](()=>{e=u,r(1,e)})}return l.$$set=u=>{"data"in u&&r(0,o=u.data)},l.$$.update=()=>{l.$$.dirty&1&&(n=!!o)},[o,e,a,m,i,M,F]}class Qt extends Et{constructor(t){super(),bt(this,t,Nt,jt,mt,{data:0})}}export{Qt as component,Kt as universal};