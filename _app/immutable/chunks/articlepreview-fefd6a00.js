import{S as D,i as G,s as H,e as f,k,t as q,c as _,a as d,m as C,h as L,d as b,L as S,b as i,g as J,J as n,j,n as y}from"./index-6be2d9ac.js";function M(v){let e,s,l,h,o,a,t,m,w,u,g,p;return{c(){e=f("a"),s=f("article"),l=f("img"),o=k(),a=f("div"),t=f("h3"),m=q(v[2]),w=k(),u=f("p"),g=q(v[3]),this.h()},l(r){e=_(r,"A",{href:!0,class:!0});var c=d(e);s=_(c,"ARTICLE",{class:!0});var x=d(s);l=_(x,"IMG",{src:!0,alt:!0,class:!0}),o=C(x),a=_(x,"DIV",{class:!0});var E=d(a);t=_(E,"H3",{class:!0});var A=d(t);m=L(A,v[2]),A.forEach(b),w=C(E),u=_(E,"P",{class:!0});var I=d(u);g=L(I,v[3]),I.forEach(b),E.forEach(b),x.forEach(b),c.forEach(b),this.h()},h(){S(l.src,h=v[1])||i(l,"src",h),i(l,"alt",""),i(l,"class","svelte-vpbxt1"),i(t,"class","svelte-vpbxt1"),i(u,"class","svelte-vpbxt1"),i(a,"class","text svelte-vpbxt1"),i(s,"class","svelte-vpbxt1"),i(e,"href",p="/posts/"+v[0]),i(e,"class","svelte-vpbxt1")},m(r,c){J(r,e,c),n(e,s),n(s,l),n(s,o),n(s,a),n(a,t),n(t,m),n(a,w),n(a,u),n(u,g)},p(r,[c]){c&2&&!S(l.src,h=r[1])&&i(l,"src",h),c&4&&j(m,r[2]),c&8&&j(g,r[3]),c&1&&p!==(p="/posts/"+r[0])&&i(e,"href",p)},i:y,o:y,d(r){r&&b(e)}}}function P(v,e,s){let{slug:l}=e,{img:h}=e,{title:o}=e,{subtitle:a}=e;return v.$$set=t=>{"slug"in t&&s(0,l=t.slug),"img"in t&&s(1,h=t.img),"title"in t&&s(2,o=t.title),"subtitle"in t&&s(3,a=t.subtitle)},[l,h,o,a]}class T extends D{constructor(e){super(),G(this,e,P,M,H,{slug:0,img:1,title:2,subtitle:3})}}export{T as A};