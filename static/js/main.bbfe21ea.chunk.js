(this["webpackJsonpdialogue-detective"]=this["webpackJsonpdialogue-detective"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(4),s=n(2),i=(n(13),n(1)),r=n(0);function o(){state={index:0};var e=Object(i.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1];Object(i.useEffect)((function(){fetch("data/dialogue.json").then((function(e){return e.json()})).then((function(e){e.forEach((function(e){e.active=!1})),c(e)}))}));var o=Object(i.useState)(""),a=Object(s.a)(o,2),u=a[0],j=a[1],d=n.map((function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:e.text}),Object(r.jsxs)("b",{children:[" ",e.name,": "]}),Object(r.jsx)("button",{className:"btn",onClick:function(){return j(e.responses[0].resptext)},children:e.responses[0].resptext}),Object(r.jsx)("button",{className:"btn",onClick:function(){return j(e.responses[1].resptext)},children:e.responses[1].resptext})]},e.id)}));return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h1",{children:"Hello, welcome to the dialogue detective :)"}),Object(r.jsx)("div",{children:u}),d[0],d[1],d[2],d.slice(0,this.state.index).map((function(e){return Object(r.jsx)("span",{children:e})}))]})}var a=document.getElementById("root");Object(c.createRoot)(a).render(Object(r.jsx)(o,{}))}},[[15,1,2]]]);
//# sourceMappingURL=main.bbfe21ea.chunk.js.map