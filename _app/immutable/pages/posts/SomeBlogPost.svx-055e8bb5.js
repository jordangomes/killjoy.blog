import{S as P,i as y,s as b,D as u,x as F,y as S,z as B,A as C,B as m,r as E,p as T,C as j,M as f,e as p,t as d,k,c as g,a as h,h as x,d as _,m as q,g as i,J as $,n as w}from"../../chunks/index-d8d4c810.js";import z from"./PostLayout.svelte-7ae176d5.js";function A(r){let e,s,n,o,t;return{c(){e=p("h1"),s=d("Fuggin Post"),n=k(),o=p("p"),t=d("This do be a post")},l(a){e=g(a,"H1",{});var l=h(e);s=x(l,"Fuggin Post"),l.forEach(_),n=q(a),o=g(a,"P",{});var c=h(o);t=x(c,"This do be a post"),c.forEach(_)},m(a,l){i(a,e,l),$(e,s),i(a,n,l),i(a,o,l),$(o,t)},p:w,d(a){a&&_(e),a&&_(n),a&&_(o)}}}function D(r){let e,s;const n=[r[0],v];let o={$$slots:{default:[A]},$$scope:{ctx:r}};for(let t=0;t<n.length;t+=1)o=u(o,n[t]);return e=new z({props:o}),{c(){F(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,a){B(e,t,a),s=!0},p(t,[a]){const l=a&1?C(n,[a&1&&m(t[0]),a&0&&m(v)]):{};a&2&&(l.$$scope={dirty:a,ctx:t}),e.$set(l)},i(t){s||(E(e.$$.fragment,t),s=!0)},o(t){T(e.$$.fragment,t),s=!1},d(t){j(e,t)}}}const v={title:"Fuggin Post"};function H(r,e,s){return r.$$set=n=>{s(0,e=u(u({},e),f(n)))},e=f(e),[e]}class M extends P{constructor(e){super(),y(this,e,H,D,b,{})}}export{M as default,v as metadata};