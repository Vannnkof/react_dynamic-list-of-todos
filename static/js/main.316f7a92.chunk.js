(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var a,s=c(7),n=c.n(s),l=c(2),r=c(8),i=c(1),o=(c(13),c(14),c(3)),d=c.n(o),j=c(0),u=function(e){var t=e.todos,c=e.selectedTodo,a=e.setSelectedTodo;return Object(j.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{children:" "})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){var t=e.id,s=e.title,n=e.completed,l=(null===c||void 0===c?void 0:c.id)===t;return Object(j.jsxs)("tr",{"data-cy":"todo",className:d()({"has-background-info-light":l}),children:[Object(j.jsx)("td",{className:"is-vcentered",children:t}),Object(j.jsx)("td",{className:"is-vcentered",children:n&&Object(j.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("td",{className:"is-vcentered is-expanded",children:Object(j.jsx)("p",{className:d()({"has-text-danger":!n,"has-text-success":n}),children:s})}),Object(j.jsx)("td",{className:"has-text-right is-vcentered",children:Object(j.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return a(e)},children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:d()("far",{"fa-eye-slash":l,"fa-eye":!l})})})})})]},t)}))})]})};!function(e){e.All="all",e.Active="active",e.Completed="completed"}(a||(a={}));var b=function(e){var t=e.query,c=e.filterParameter,s=e.onInputChange,n=e.onSelectChange;return Object(j.jsxs)("form",{className:"field has-addons",children:[Object(j.jsx)("p",{className:"control",children:Object(j.jsx)("span",{className:"select",children:Object(j.jsxs)("select",{"data-cy":"statusSelect",value:c,onChange:function(e){return n(e.target.value)},children:[Object(j.jsx)("option",{value:a.All,children:"All"}),Object(j.jsx)("option",{value:a.Active,children:"Active"}),Object(j.jsx)("option",{value:a.Completed,children:"Completed"})]})})}),Object(j.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(j.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){s(e.target.value)}}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-magnifying-glass"})}),t&&Object(j.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(j.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return s("")}})})]})]})},h=(c(16),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})});function m(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var O=function(e){var t=e.todo,c=e.setSelectedTodo,a=Object(i.useState)(null),s=Object(l.a)(a,2),n=s[0],r=s[1],o=Object(i.useState)(!1),u=Object(l.a)(o,2),b=u[0],O=u[1],x=t.id,f=t.title,p=t.completed;return Object(i.useEffect)((function(){var e;O(!0),(e=t.userId,m("/users/".concat(e))).then(r).catch((function(e){console.error(e)})).finally((function(){return O(!1)}))}),[]),Object(j.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(j.jsx)("div",{className:"modal-background"}),b?Object(j.jsx)(h,{}):Object(j.jsxs)("div",{className:"modal-card",children:[Object(j.jsxs)("header",{className:"modal-card-head",children:[Object(j.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(x)}),Object(j.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(null)}})]}),Object(j.jsxs)("div",{className:"modal-card-body",children:[Object(j.jsx)("p",{className:"block","data-cy":"modal-title",children:f}),Object(j.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(j.jsx)("strong",{className:d()({"has-text-danger":!p,"has-text-success":p}),children:p?"Done":"Planned"})," by ",n&&Object(j.jsx)("a",{href:"mailto:".concat(n.email),children:n.name})]})]})]})]})},x=function(){var e=Object(i.useState)(!1),t=Object(l.a)(e,2),c=t[0],s=t[1],n=Object(i.useState)([]),o=Object(l.a)(n,2),d=o[0],x=o[1],f=Object(i.useState)(a.All),p=Object(l.a)(f,2),v=p[0],N=p[1],y=Object(i.useState)(""),g=Object(l.a)(y,2),C=g[0],S=g[1],k=Object(i.useState)(null),T=Object(l.a)(k,2),w=T[0],A=T[1];Object(i.useEffect)((function(){s(!0),m("/todos").then(x).catch((function(e){console.error(e)})).finally((function(){return s(!1)}))}),[]);var P=function(e,t){var c=t.query,s=t.filterParameter,n=Object(r.a)(e);return c&&(n=n.filter((function(e){return e.title.toLowerCase().includes(c.trim().toLowerCase())}))),s!==a.All&&(n=n.filter((function(e){switch(s){case a.Active:return!e.completed;case a.Completed:return e.completed;default:return e}}))),n}(d,{query:C,filterParameter:v});return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("h1",{className:"title",children:"Todos:"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(b,{query:C,filterParameter:v,onInputChange:S,onSelectChange:N})}),Object(j.jsx)("div",{className:"block",children:c?Object(j.jsx)(h,{}):Object(j.jsx)(u,{todos:P,selectedTodo:w,setSelectedTodo:A})})]})})}),w&&Object(j.jsx)(O,{todo:w,setSelectedTodo:A})]})};n.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.316f7a92.chunk.js.map