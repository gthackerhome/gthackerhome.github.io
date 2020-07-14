var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode.removeChild(t)}function u(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function a(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function m(){return f(" ")}function d(){return f("")}function h(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t,e){e=""+e,t.data!==e&&(t.data=e)}class ${constructor(t=null){this.a=t,this.e=this.n=null}m(t,e,n=null){this.e||(this.e=a(e.nodeName),this.t=e,this.h(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)l(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(c)}}let w;function y(t){w=t}function b(t){(function(){if(!w)throw new Error("Function called outside component initialization");return w})().$$.on_mount.push(t)}const v=[],x=[],_=[],k=[],M=Promise.resolve();let T=!1;function C(t){_.push(t)}let E=!1;const z=new Set;function q(){if(!E){E=!0;do{for(let t=0;t<v.length;t+=1){const e=v[t];y(e),N(e.$$)}for(v.length=0;x.length;)x.pop()();for(let t=0;t<_.length;t+=1){const e=_[t];z.has(e)||(z.add(e),e())}_.length=0}while(v.length);for(;k.length;)k.pop()();T=!1,E=!1,z.clear()}}function N(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}const j=new Set;let A;function B(){A={r:0,c:[],p:A}}function O(){A.r||o(A.c),A=A.p}function D(t,e){t&&t.i&&(j.delete(t),t.i(e))}function L(t,e,n,o){if(t&&t.o){if(j.has(t))return;j.add(t),A.c.push(()=>{j.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}const P="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function S(t){t&&t.c()}function U(t,n,i){const{fragment:s,on_mount:l,on_destroy:c,after_update:u}=t.$$;s&&s.m(n,i),C(()=>{const n=l.map(e).filter(r);c?c.push(...n):o(n),t.$$.on_mount=[]}),u.forEach(C)}function W(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function H(t,e){-1===t.$$.dirty[0]&&(v.push(t),T||(T=!0,M.then(q)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function I(e,r,i,s,l,u,a=[-1]){const f=w;y(e);const m=r.props||{},d=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:a};let h=!1;if(d.ctx=i?i(e,m,(t,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&l(d.ctx[t],d.ctx[t]=r)&&(d.bound[t]&&d.bound[t](r),h&&H(e,t)),n}):[],d.update(),h=!0,o(d.before_update),d.fragment=!!s&&s(d.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);d.fragment&&d.fragment.l(t),t.forEach(c)}else d.fragment&&d.fragment.c();r.intro&&D(e.$$.fragment),U(e,r.target,r.anchor),q()}y(f)}class K{$destroy(){W(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function F(e){let n,o,r,i,u,d,h,$,w,y,b,v,x,_,k,M,T=e[1]+e[2]+1+"",C=e[0].title+"",E=e[4]()+"",z=e[0].author+"",q=e[5]()+"";return{c(){n=a("article"),o=a("span"),r=f(T),i=m(),u=a("h2"),d=a("a"),h=f(C),$=m(),w=a("p"),y=a("a"),b=f(E),x=f(" by "),_=f(z),k=m(),M=f(q),p(o,"class","svelte-iq2nst"),p(d,"target","_blank"),p(d,"href",e[3]),p(d,"class","svelte-iq2nst"),p(u,"class","svelte-iq2nst"),p(y,"href",v="#/item/"+e[0].id),p(y,"class","svelte-iq2nst"),p(w,"class","meta"),p(n,"class","svelte-iq2nst")},m(t,e){l(t,n,e),s(n,o),s(o,r),s(n,i),s(n,u),s(u,d),s(d,h),s(n,$),s(n,w),s(w,y),s(y,b),s(w,x),s(w,_),s(w,k),s(w,M)},p(t,[e]){6&e&&T!==(T=t[1]+t[2]+1+"")&&g(r,T),1&e&&C!==(C=t[0].title+"")&&g(h,C),8&e&&p(d,"href",t[3]),1&e&&v!==(v="#/item/"+t[0].id)&&p(y,"href",v),1&e&&z!==(z=t[0].author+"")&&g(_,z)},i:t,o:t,d(t){t&&c(n)}}}function G(t,e,n){let o,{item:r}=e,{i:i}=e,{offset:s}=e;return t.$set=t=>{"item"in t&&n(0,r=t.item),"i"in t&&n(1,i=t.i),"offset"in t&&n(2,s=t.offset)},t.$$.update=()=>{1&t.$$.dirty&&n(3,o=r.url?r.url:"https://gthackerhome.github.io/#/item/"+r.id)},[r,i,s,o,function(){const t=r.descendents;return`${t} ${1===t?"comment":"comments"}`},function(){const t=Math.floor(Date.now()/1e3)-r.time;return t<60?"just now":t<3600?Math.floor(t/60)+" minutes ago":t<86400?Math.floor(t/3600)+" hours ago":Math.floor(t/86400)+" days ago"}]}class J extends K{constructor(t){super(),I(this,t,G,F,i,{item:0,i:1,offset:2})}}function Q(t,e,n){const o=t.slice();return o[4]=e[n],o[6]=n,o}function R(e){let n;return{c(){n=a("p"),n.textContent="loading...",p(n,"class","loading svelte-1gm06r8")},m(t,e){l(t,n,e)},p:t,i:t,o:t,d(t){t&&c(n)}}}function X(t){let e,n,o,r=t[1],i=[];for(let e=0;e<r.length;e+=1)i[e]=V(Q(t,r,e));const s=t=>L(i[t],1,1,()=>{i[t]=null});let a=tt*(t[0]-1)+tt<t[3]&&Y(t);return{c(){for(let t=0;t<i.length;t+=1)i[t].c();e=m(),a&&a.c(),n=d()},m(t,r){for(let e=0;e<i.length;e+=1)i[e].m(t,r);l(t,e,r),a&&a.m(t,r),l(t,n,r),o=!0},p(t,o){if(6&o){let n;for(r=t[1],n=0;n<r.length;n+=1){const s=Q(t,r,n);i[n]?(i[n].p(s,o),D(i[n],1)):(i[n]=V(s),i[n].c(),D(i[n],1),i[n].m(e.parentNode,e))}for(B(),n=r.length;n<i.length;n+=1)s(n);O()}tt*(t[0]-1)+tt<t[3]?a?a.p(t,o):(a=Y(t),a.c(),a.m(n.parentNode,n)):a&&(a.d(1),a=null)},i(t){if(!o){for(let t=0;t<r.length;t+=1)D(i[t]);o=!0}},o(t){i=i.filter(Boolean);for(let t=0;t<i.length;t+=1)L(i[t]);o=!1},d(t){u(i,t),t&&c(e),a&&a.d(t),t&&c(n)}}}function V(t){let e,n;return e=new J({props:{item:t[4],i:t[6],offset:t[2]}}),{c(){S(e.$$.fragment)},m(t,o){U(e,t,o),n=!0},p(t,n){const o={};2&n&&(o.item=t[4]),4&n&&(o.offset=t[2]),e.$set(o)},i(t){n||(D(e.$$.fragment,t),n=!0)},o(t){L(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function Y(t){let e,n,o,r,i=t[0]+1+"";return{c(){e=a("a"),n=f("page "),o=f(i),p(e,"href",r="#/top/"+(t[0]+1)),p(e,"class","svelte-1gm06r8")},m(t,r){l(t,e,r),s(e,n),s(e,o)},p(t,n){1&n&&i!==(i=t[0]+1+"")&&g(o,i),1&n&&r!==(r="#/top/"+(t[0]+1))&&p(e,"href",r)},d(t){t&&c(e)}}}function Z(t){let e,n,o,r;const i=[X,R],s=[];function u(t,e){return t[1]?0:1}return e=u(t),n=s[e]=i[e](t),{c(){n.c(),o=d()},m(t,n){s[e].m(t,n),l(t,o,n),r=!0},p(t,[r]){let l=e;e=u(t),e===l?s[e].p(t,r):(B(),L(s[l],1,1,()=>{s[l]=null}),O(),n=s[e],n||(n=s[e]=i[e](t),n.c()),D(n,1),n.m(o.parentNode,o))},i(t){r||(D(n),r=!0)},o(t){L(n),r=!1},d(t){s[e].d(t),t&&c(o)}}}const tt=40;function et(t,e,n){let o,r,i,{page:s}=e;return t.$set=t=>{"page"in t&&n(0,s=t.page)},t.$$.update=()=>{1&t.$$.dirty&&fetch("https://greetez.com:4343/item_api/posts").then(t=>t.json()).then(t=>{n(3,i=t.length),n(1,o=t.slice(tt*(s-1),tt*(s-1)+tt)),n(2,r=tt*(s-1)),window.scrollTo(0,0)})},[s,o,r,i]}class nt extends K{constructor(t){super(),I(this,t,et,Z,i,{page:0})}}function ot(e){let n,o,r,i,s,u,f;return{c(){var t,e,l;n=a("label"),n.textContent="Comment:",o=m(),r=a("textarea"),i=m(),s=a("input"),p(n,"for","commentfield"),p(r,"id","commentfield"),p(r,"name","commentfield"),t="height",e="150px",r.style.setProperty(t,e,l?"important":""),p(s,"type","submit"),s.value="Submit"},m(t,c){l(t,n,c),l(t,o,c),l(t,r,c),l(t,i,c),l(t,s,c),u||(f=h(s,"click",e[2]),u=!0)},p:t,d(t){t&&c(n),t&&c(o),t&&c(r),t&&c(i),t&&c(s),u=!1,f()}}}function rt(e){let n,o,r;return{c(){n=a("p"),n.textContent="reply",p(n,"class","fake-link svelte-1u9y8p")},m(t,i){l(t,n,i),o||(r=h(n,"click",e[1]),o=!0)},p:t,d(t){t&&c(n),o=!1,r()}}}function it(e){let n;function o(t,e){return t[0]?ot:rt}let r=o(e),i=r(e);return{c(){n=a("article"),i.c(),p(n,"class","svelte-1u9y8p")},m(t,e){l(t,n,e),i.m(n,null)},p(t,[e]){r===(r=o(t))&&i?i.p(t,e):(i.d(1),i=r(t),i&&(i.c(),i.m(n,null)))},i:t,o:t,d(t){t&&c(n),i.d()}}}function st(t,e,n){let{parentid:o=""}=e,r=!1;return t.$set=t=>{"parentid"in t&&n(3,o=t.parentid)},[r,function(){n(0,r=!0),console.log(r)},function(){var t={parentid:o,text:document.getElementById("commentfield").value};axios.post("https://greetez.com:4343/item_api/create_comment",t,{withCredentials:!0}).then(t=>{alert("created comment"),window.location.assign("https://gthackerhome.github.io")},t=>{console.log(t),alert("There's been an error, please try using a different username")})},o]}class lt extends K{constructor(t){super(),I(this,t,st,it,i,{parentid:3})}}function ct(t,e,n){const o=t.slice();return o[3]=e[n],o}function ut(t){let e,n;return e=new lt({props:{parentid:t[0].item.id}}),{c(){S(e.$$.fragment)},m(t,o){U(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.parentid=t[0].item.id),e.$set(o)},i(t){n||(D(e.$$.fragment,t),n=!0)},o(t){L(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function at(t){let e,n;return e=new dt({props:{comment:t[3]}}),{c(){S(e.$$.fragment)},m(t,o){U(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.comment=t[3]),e.$set(o)},i(t){n||(D(e.$$.fragment,t),n=!0)},o(t){L(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function ft(t){let e,n,o,r,i,d,h,w,y,b,v,x=t[0].item.author+"",_=t[2]()+"",k=t[0].item.text+"",M=t[1]&&ut(t),T=t[0].descendents,C=[];for(let e=0;e<T.length;e+=1)C[e]=at(ct(t,T,e));const E=t=>L(C[t],1,1,()=>{C[t]=null});return{c(){e=a("article"),n=a("p"),o=f(x),r=m(),i=f(_),d=m(),w=m(),M&&M.c(),y=m(),b=a("div");for(let t=0;t<C.length;t+=1)C[t].c();p(n,"class","meta svelte-m8mokb"),h=new $(w),p(b,"class","replies svelte-m8mokb"),p(e,"class","svelte-m8mokb")},m(t,c){l(t,e,c),s(e,n),s(n,o),s(n,r),s(n,i),s(e,d),h.m(k,e),s(e,w),M&&M.m(e,null),s(e,y),s(e,b);for(let t=0;t<C.length;t+=1)C[t].m(b,null);v=!0},p(t,[n]){if((!v||1&n)&&x!==(x=t[0].item.author+"")&&g(o,x),(!v||1&n)&&k!==(k=t[0].item.text+"")&&h.p(k),t[1]?M?(M.p(t,n),2&n&&D(M,1)):(M=ut(t),M.c(),D(M,1),M.m(e,y)):M&&(B(),L(M,1,1,()=>{M=null}),O()),1&n){let e;for(T=t[0].descendents,e=0;e<T.length;e+=1){const o=ct(t,T,e);C[e]?(C[e].p(o,n),D(C[e],1)):(C[e]=at(o),C[e].c(),D(C[e],1),C[e].m(b,null))}for(B(),e=T.length;e<C.length;e+=1)E(e);O()}},i(t){if(!v){D(M);for(let t=0;t<T.length;t+=1)D(C[t]);v=!0}},o(t){L(M),C=C.filter(Boolean);for(let t=0;t<C.length;t+=1)L(C[t]);v=!1},d(t){t&&c(e),M&&M.d(),u(C,t)}}}function mt(t,e,n){let{comment:o}=e,r=!1;return r=""!=function(t){for(var e=t+"=",n=decodeURIComponent(document.cookie).split(";"),o=0;o<n.length;o++){for(var r=n[o];" "==r.charAt(0);)r=r.substring(1);if(0==r.indexOf(e))return r.substring(e.length,r.length)}return""}("username"),t.$set=t=>{"comment"in t&&n(0,o=t.comment)},[o,r,function(){const t=Math.floor(Date.now()/1e3)-o.item.time;return t<60?"just now":t<3600?Math.floor(t/60)+" minutes ago":t<86400?Math.floor(t/3600)+" hours ago":Math.floor(t/86400)+" days ago"}]}class dt extends K{constructor(t){super(),I(this,t,mt,ft,i,{comment:0})}}function ht(t,e,n){const o=t.slice();return o[7]=e[n],o}function pt(t){let e,n,o=t[0].item.url+"";return{c(){e=a("small"),n=f(o)},m(t,o){l(t,e,o),s(e,n)},p(t,e){1&e&&o!==(o=t[0].item.url+"")&&g(n,o)},d(t){t&&c(e)}}}function gt(t){let e,n;return e=new lt({props:{parentid:t[0].item.id}}),{c(){S(e.$$.fragment)},m(t,o){U(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.parentid=t[0].item.id),e.$set(o)},i(t){n||(D(e.$$.fragment,t),n=!0)},o(t){L(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function $t(t){let e,n;return e=new dt({props:{comment:t[7]}}),{c(){S(e.$$.fragment)},m(t,o){U(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.comment=t[7]),e.$set(o)},i(t){n||(D(e.$$.fragment,t),n=!0)},o(t){L(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function wt(t){let e,n,o,r,i,d,h,$,w,y,b,v,x,_,k,M,T,C,E,z,q=t[0].item.title+"",N=t[0].item.text+"",j=t[0].item.author+"",A=t[3]()+"",P=t[0].item.url&&pt(t),S=t[1]&&gt(t),U=t[0].descendents,W=[];for(let e=0;e<U.length;e+=1)W[e]=$t(ht(t,U,e));const H=t=>L(W[t],1,1,()=>{W[t]=null});return{c(){e=a("a"),e.textContent="« back",n=m(),o=a("article"),r=a("a"),i=a("h1"),d=f(q),h=m(),P&&P.c(),$=m(),w=a("p"),y=f(N),b=m(),v=a("p"),x=f("submitted by "),_=f(j),k=m(),M=f(A),T=m(),S&&S.c(),C=m(),E=a("div");for(let t=0;t<W.length;t+=1)W[t].c();p(e,"href","https://gthackerhome.github.io"),p(e,"class","svelte-106zs3f"),p(i,"class","svelte-106zs3f"),p(r,"href",t[2]),p(r,"class","svelte-106zs3f"),p(v,"class","meta"),p(o,"class","svelte-106zs3f"),p(E,"class","comments")},m(t,c){l(t,e,c),l(t,n,c),l(t,o,c),s(o,r),s(r,i),s(i,d),s(r,h),P&&P.m(r,null),s(o,$),s(o,w),s(w,y),s(o,b),s(o,v),s(v,x),s(v,_),s(v,k),s(v,M),s(v,T),S&&S.m(v,null),l(t,C,c),l(t,E,c);for(let t=0;t<W.length;t+=1)W[t].m(E,null);z=!0},p(t,[e]){if((!z||1&e)&&q!==(q=t[0].item.title+"")&&g(d,q),t[0].item.url?P?P.p(t,e):(P=pt(t),P.c(),P.m(r,null)):P&&(P.d(1),P=null),(!z||4&e)&&p(r,"href",t[2]),(!z||1&e)&&N!==(N=t[0].item.text+"")&&g(y,N),(!z||1&e)&&j!==(j=t[0].item.author+"")&&g(_,j),t[1]?S?(S.p(t,e),2&e&&D(S,1)):(S=gt(t),S.c(),D(S,1),S.m(v,null)):S&&(B(),L(S,1,1,()=>{S=null}),O()),1&e){let n;for(U=t[0].descendents,n=0;n<U.length;n+=1){const o=ht(t,U,n);W[n]?(W[n].p(o,e),D(W[n],1)):(W[n]=$t(o),W[n].c(),D(W[n],1),W[n].m(E,null))}for(B(),n=U.length;n<W.length;n+=1)H(n);O()}},i(t){if(!z){D(S);for(let t=0;t<U.length;t+=1)D(W[t]);z=!0}},o(t){L(S),W=W.filter(Boolean);for(let t=0;t<W.length;t+=1)L(W[t]);z=!1},d(t){t&&c(e),t&&c(n),t&&c(o),P&&P.d(),S&&S.d(),t&&c(C),t&&c(E),u(W,t)}}}function yt(t,e,n){let o=!1;o=""!=getCookie("username");let{item:r}=e,{returnTo:i}=e,{descendents:s=[]}=e;s=r.descendents,console.log(r.descendents.length);let l;return console.log([{id:"J---aiyznGQ",name:"Keyboard Cat"},{id:"z_AbfPXTKms",name:"Maru"},{id:"OUtn3pvWmpg",name:"Henri The Existential Cat"}]),console.log(r.descendents),t.$set=t=>{"item"in t&&n(0,r=t.item),"returnTo"in t&&n(5,i=t.returnTo),"descendents"in t&&n(4,s=t.descendents)},t.$$.update=()=>{1&t.$$.dirty&&n(2,l=r.item.url?r.item.url:"https://gthackerhome.github.io/item/"+r.item.id)},[r,o,l,function(){const t=Math.floor(Date.now()/1e3)-r.item.time;return t<60?"just now":t<3600?Math.floor(t/60)+" minutes ago":t<86400?Math.floor(t/3600)+" hours ago":Math.floor(t/86400)+" days ago"},s,i]}class bt extends K{constructor(t){super(),I(this,t,yt,wt,i,{item:0,returnTo:5,descendents:4})}}const{window:vt}=P;function xt(t){let e,n;return e=new nt({props:{page:t[1]}}),{c(){S(e.$$.fragment)},m(t,o){U(e,t,o),n=!0},p(t,n){const o={};2&n&&(o.page=t[1]),e.$set(o)},i(t){n||(D(e.$$.fragment,t),n=!0)},o(t){L(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function _t(t){let e,n;return e=new bt({props:{item:t[0],returnTo:"#/top/"+t[1]}}),{c(){S(e.$$.fragment)},m(t,o){U(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.item=t[0]),2&n&&(o.returnTo="#/top/"+t[1]),e.$set(o)},i(t){n||(D(e.$$.fragment,t),n=!0)},o(t){L(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function kt(t){let e,n,o,r,i,s;const u=[_t,xt],f=[];function m(t,e){return t[0]?0:t[1]?1:-1}return~(n=m(t))&&(o=f[n]=u[n](t)),{c(){e=a("main"),o&&o.c(),p(e,"class","svelte-qquc9")},m(o,c){l(o,e,c),~n&&f[n].m(e,null),r=!0,i||(s=h(vt,"hashchange",t[2]),i=!0)},p(t,[r]){let i=n;n=m(t),n===i?~n&&f[n].p(t,r):(o&&(B(),L(f[i],1,1,()=>{f[i]=null}),O()),~n?(o=f[n],o||(o=f[n]=u[n](t),o.c()),D(o,1),o.m(e,null)):o=null)},i(t){r||(D(o),r=!0)},o(t){L(o),r=!1},d(t){t&&c(e),~n&&f[n].d(),i=!1,s()}}}function Mt(t,e,n){let o,r;async function i(){const t=window.location.hash.slice(1);if(t.startsWith("/item")){const e=t.slice(6);n(0,o=await fetch("https://greetez.com:4343/item_api/"+e).then(t=>t.json())),window.scrollTo(0,0)}else t.startsWith("/top")?(n(1,r=+t.slice(5)),n(0,o=null)):window.location.hash="/top/1"}return b(i),window.onload=showUsername(),[o,r,i]}return new class extends K{constructor(t){super(),I(this,t,Mt,kt,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
