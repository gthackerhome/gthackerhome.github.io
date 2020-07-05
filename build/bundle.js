var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function f(){return a(" ")}function m(){return a("")}function d(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function p(t,e){e=""+e,t.data!==e&&(t.data=e)}let h;function g(t){h=t}function $(t){(function(){if(!h)throw new Error("Function called outside component initialization");return h})().$$.on_mount.push(t)}const w=[],y=[],b=[],v=[],_=Promise.resolve();let x=!1;function T(t){b.push(t)}let M=!1;const q=new Set;function E(){if(!M){M=!0;do{for(let t=0;t<w.length;t+=1){const e=w[t];g(e),k(e.$$)}for(w.length=0;y.length;)y.pop()();for(let t=0;t<b.length;t+=1){const e=b[t];q.has(e)||(q.add(e),e())}b.length=0}while(w.length);for(;v.length;)v.pop()();x=!1,M=!1,q.clear()}}function k(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}const z=new Set;let N;function j(){N={r:0,c:[],p:N}}function A(){N.r||o(N.c),N=N.p}function C(t,e){t&&t.i&&(z.delete(t),t.i(e))}function B(t,e,n,o){if(t&&t.o){if(z.has(t))return;z.add(t),N.c.push(()=>{z.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}const D="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function L(t){t&&t.c()}function O(t,n,i){const{fragment:c,on_mount:s,on_destroy:l,after_update:u}=t.$$;c&&c.m(n,i),T(()=>{const n=s.map(e).filter(r);l?l.push(...n):o(n),t.$$.on_mount=[]}),u.forEach(T)}function S(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function W(t,e){-1===t.$$.dirty[0]&&(w.push(t),x||(x=!0,_.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function F(e,r,i,c,s,u,a=[-1]){const f=h;g(e);const m=r.props||{},d=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:a};let p=!1;if(d.ctx=i?i(e,m,(t,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&s(d.ctx[t],d.ctx[t]=r)&&(d.bound[t]&&d.bound[t](r),p&&W(e,t)),n}):[],d.update(),p=!0,o(d.before_update),d.fragment=!!c&&c(d.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);d.fragment&&d.fragment.l(t),t.forEach(l)}else d.fragment&&d.fragment.c();r.intro&&C(e.$$.fragment),O(e,r.target,r.anchor),E()}g(f)}class P{$destroy(){S(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function U(e){let n,o,r,i,m,h,g,$,w,y,b,v,_,x,T,M,q=e[1]+e[2]+1+"",E=e[0].title+"",k=e[4]()+"",z=e[0].author+"",N=e[5]()+"";return{c(){n=u("article"),o=u("span"),r=a(q),i=f(),m=u("h2"),h=u("a"),g=a(E),$=f(),w=u("p"),y=u("a"),b=a(k),_=a(" by "),x=a(z),T=f(),M=a(N),d(o,"class","svelte-iq2nst"),d(h,"target","_blank"),d(h,"href",e[3]),d(h,"class","svelte-iq2nst"),d(m,"class","svelte-iq2nst"),d(y,"href",v="#/item/"+e[0].id),d(y,"class","svelte-iq2nst"),d(w,"class","meta"),d(n,"class","svelte-iq2nst")},m(t,e){s(t,n,e),c(n,o),c(o,r),c(n,i),c(n,m),c(m,h),c(h,g),c(n,$),c(n,w),c(w,y),c(y,b),c(w,_),c(w,x),c(w,T),c(w,M)},p(t,[e]){6&e&&q!==(q=t[1]+t[2]+1+"")&&p(r,q),1&e&&E!==(E=t[0].title+"")&&p(g,E),8&e&&d(h,"href",t[3]),1&e&&v!==(v="#/item/"+t[0].id)&&d(y,"href",v),1&e&&z!==(z=t[0].author+"")&&p(x,z)},i:t,o:t,d(t){t&&l(n)}}}function G(t,e,n){let o,{item:r}=e,{i:i}=e,{offset:c}=e;return t.$set=t=>{"item"in t&&n(0,r=t.item),"i"in t&&n(1,i=t.i),"offset"in t&&n(2,c=t.offset)},t.$$.update=()=>{1&t.$$.dirty&&n(3,o="ask"===r.type?"https://news.ycombinator.com/"+r.url:r.url)},[r,i,c,o,function(){const t=r.descendents;return`${t} ${1===t?"comment":"comments"}`},function(){const t=Math.floor(Date.now()/1e3)-r.time;return t<60?""+t:t<3600?Math.floor(t/60)+" minutes ago":t<86400?Math.floor(t/3600)+" hours ago":Math.floor(t/86400)+" days ago"}]}class H extends P{constructor(t){super(),F(this,t,G,U,i,{item:0,i:1,offset:2})}}function I(t,e,n){const o=t.slice();return o[4]=e[n],o[6]=n,o}function J(e){let n;return{c(){n=u("p"),n.textContent="loading...",d(n,"class","loading svelte-1gm06r8")},m(t,e){s(t,n,e)},p:t,i:t,o:t,d(t){t&&l(n)}}}function K(t){let e,n,o,r=t[1],i=[];for(let e=0;e<r.length;e+=1)i[e]=Q(I(t,r,e));const c=t=>B(i[t],1,1,()=>{i[t]=null});let u=X*(t[0]-1)+X<t[3]&&R(t);return{c(){for(let t=0;t<i.length;t+=1)i[t].c();e=f(),u&&u.c(),n=m()},m(t,r){for(let e=0;e<i.length;e+=1)i[e].m(t,r);s(t,e,r),u&&u.m(t,r),s(t,n,r),o=!0},p(t,o){if(6&o){let n;for(r=t[1],n=0;n<r.length;n+=1){const c=I(t,r,n);i[n]?(i[n].p(c,o),C(i[n],1)):(i[n]=Q(c),i[n].c(),C(i[n],1),i[n].m(e.parentNode,e))}for(j(),n=r.length;n<i.length;n+=1)c(n);A()}X*(t[0]-1)+X<t[3]?u?u.p(t,o):(u=R(t),u.c(),u.m(n.parentNode,n)):u&&(u.d(1),u=null)},i(t){if(!o){for(let t=0;t<r.length;t+=1)C(i[t]);o=!0}},o(t){i=i.filter(Boolean);for(let t=0;t<i.length;t+=1)B(i[t]);o=!1},d(t){!function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(i,t),t&&l(e),u&&u.d(t),t&&l(n)}}}function Q(t){let e,n;return e=new H({props:{item:t[4],i:t[6],offset:t[2]}}),{c(){L(e.$$.fragment)},m(t,o){O(e,t,o),n=!0},p(t,n){const o={};2&n&&(o.item=t[4]),4&n&&(o.offset=t[2]),e.$set(o)},i(t){n||(C(e.$$.fragment,t),n=!0)},o(t){B(e.$$.fragment,t),n=!1},d(t){S(e,t)}}}function R(t){let e,n,o,r,i=t[0]+1+"";return{c(){e=u("a"),n=a("page "),o=a(i),d(e,"href",r="#/top/"+(t[0]+1)),d(e,"class","svelte-1gm06r8")},m(t,r){s(t,e,r),c(e,n),c(e,o)},p(t,n){1&n&&i!==(i=t[0]+1+"")&&p(o,i),1&n&&r!==(r="#/top/"+(t[0]+1))&&d(e,"href",r)},d(t){t&&l(e)}}}function V(t){let e,n,o,r;const i=[K,J],c=[];function u(t,e){return t[1]?0:1}return e=u(t),n=c[e]=i[e](t),{c(){n.c(),o=m()},m(t,n){c[e].m(t,n),s(t,o,n),r=!0},p(t,[r]){let s=e;e=u(t),e===s?c[e].p(t,r):(j(),B(c[s],1,1,()=>{c[s]=null}),A(),n=c[e],n||(n=c[e]=i[e](t),n.c()),C(n,1),n.m(o.parentNode,o))},i(t){r||(C(n),r=!0)},o(t){B(n),r=!1},d(t){c[e].d(t),t&&l(o)}}}const X=40;function Y(t,e,n){let o,r,i,{page:c}=e;return t.$set=t=>{"page"in t&&n(0,c=t.page)},t.$$.update=()=>{1&t.$$.dirty&&fetch("https://greetez.com:4343/item_api/posts").then(t=>t.json()).then(t=>{n(3,i=t.length),n(1,o=t.slice(X*(c-1),X*(c-1)+X)),n(2,r=X*(c-1)),window.scrollTo(0,0)})},[c,o,r,i]}class Z extends P{constructor(t){super(),F(this,t,Y,V,i,{page:0})}}function tt(t){let e,n,o=t[0].item.url+"";return{c(){e=u("small"),n=a(o)},m(t,o){s(t,e,o),c(e,n)},p(t,e){1&e&&o!==(o=t[0].item.url+"")&&p(n,o)},d(t){t&&l(e)}}}function et(e){let n,o,r,i,m,h,g,$,w,y,b,v,_,x,T=e[0].item.title+"",M=e[0].item.author+"",q=e[3]()+"",E=e[0].item.url&&tt(e);return{c(){n=u("a"),o=a("« back"),r=f(),i=u("article"),m=u("a"),h=u("h1"),g=a(T),$=f(),E&&E.c(),w=f(),y=u("p"),b=a("submitted by "),v=a(M),_=f(),x=a(q),d(n,"href",e[1]),d(n,"class","svelte-106zs3f"),d(h,"class","svelte-106zs3f"),d(m,"href",e[2]),d(m,"class","svelte-106zs3f"),d(y,"class","meta"),d(i,"class","svelte-106zs3f")},m(t,e){s(t,n,e),c(n,o),s(t,r,e),s(t,i,e),c(i,m),c(m,h),c(h,g),c(m,$),E&&E.m(m,null),c(i,w),c(i,y),c(y,b),c(y,v),c(y,_),c(y,x)},p(t,[e]){2&e&&d(n,"href",t[1]),1&e&&T!==(T=t[0].item.title+"")&&p(g,T),t[0].item.url?E?E.p(t,e):(E=tt(t),E.c(),E.m(m,null)):E&&(E.d(1),E=null),4&e&&d(m,"href",t[2]),1&e&&M!==(M=t[0].item.author+"")&&p(v,M)},i:t,o:t,d(t){t&&l(n),t&&l(r),t&&l(i),E&&E.d()}}}function nt(t,e,n){let o,{item:r}=e,{returnTo:i}=e;return t.$set=t=>{"item"in t&&n(0,r=t.item),"returnTo"in t&&n(1,i=t.returnTo)},t.$$.update=()=>{1&t.$$.dirty&&n(2,o=r.item.url?r.item.url:"https://gthackerhome.github.io/item/"+r.item.id)},[r,i,o,function(){const t=Math.floor(Date.now()/1e3)-r.time;return t<60?""+t:t<3600?Math.floor(t/60)+" minutes ago":t<86400?Math.floor(t/3600)+" hours ago":Math.floor(t/86400)+" days ago"}]}class ot extends P{constructor(t){super(),F(this,t,nt,et,i,{item:0,returnTo:1})}}const{window:rt}=D;function it(t){let e,n;return e=new Z({props:{page:t[1]}}),{c(){L(e.$$.fragment)},m(t,o){O(e,t,o),n=!0},p(t,n){const o={};2&n&&(o.page=t[1]),e.$set(o)},i(t){n||(C(e.$$.fragment,t),n=!0)},o(t){B(e.$$.fragment,t),n=!1},d(t){S(e,t)}}}function ct(t){let e,n;return e=new ot({props:{item:t[0],returnTo:"#/top/"+t[1]}}),{c(){L(e.$$.fragment)},m(t,o){O(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.item=t[0]),2&n&&(o.returnTo="#/top/"+t[1]),e.$set(o)},i(t){n||(C(e.$$.fragment,t),n=!0)},o(t){B(e.$$.fragment,t),n=!1},d(t){S(e,t)}}}function st(t){let e,n,o,r,i,c;const a=[ct,it],f=[];function m(t,e){return t[0]?0:t[1]?1:-1}return~(n=m(t))&&(o=f[n]=a[n](t)),{c(){e=u("main"),o&&o.c(),d(e,"class","svelte-qquc9")},m(o,l){var u,a,m,d;s(o,e,l),~n&&f[n].m(e,null),r=!0,i||(u=rt,a="hashchange",m=t[2],u.addEventListener(a,m,d),c=()=>u.removeEventListener(a,m,d),i=!0)},p(t,[r]){let i=n;n=m(t),n===i?~n&&f[n].p(t,r):(o&&(j(),B(f[i],1,1,()=>{f[i]=null}),A()),~n?(o=f[n],o||(o=f[n]=a[n](t),o.c()),C(o,1),o.m(e,null)):o=null)},i(t){r||(C(o),r=!0)},o(t){B(o),r=!1},d(t){t&&l(e),~n&&f[n].d(),i=!1,c()}}}function lt(t,e,n){let o,r;async function i(){const t=window.location.hash.slice(1);if(t.startsWith("/item")){const e=t.slice(6);n(0,o=await fetch("https://greetez.com:4343/item_api/"+e).then(t=>t.json())),window.scrollTo(0,0)}else t.startsWith("/top")?(n(1,r=+t.slice(5)),n(0,o=null)):window.location.hash="/top/1"}return $(i),window.onload=showUsername(),[o,r,i]}return new class extends P{constructor(t){super(),F(this,t,lt,st,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
