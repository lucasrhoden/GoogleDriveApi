(this["webpackJsonpgoogledocapi-frontend"]=this["webpackJsonpgoogledocapi-frontend"]||[]).push([[0],{87:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){},97:function(e,t,c){"use strict";c.r(t);var n=c(4),s=c(0),o=c(8),a=c.n(o),i=c(13),l=c(39),r=c(10),j=c(22),d=c.n(j);c(87),c(88);var h=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),c=t[0],o=t[1],a=Object(s.useState)(!0),l=Object(i.a)(a,2),r=l[0],j=l[1];return Object(s.useEffect)((function(){d.a.get("https://mighty-sands-49960.herokuapp.com/token").then((function(e){o(e.data),j(!1)})).catch((function(e){return console.log(e)}))}),[]),Object(n.jsx)("div",{className:"login",children:Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"Welcome to Google Docs App v2"}),r?Object(n.jsx)("p",{children:"Loading..."}):Object(n.jsx)("a",{className:"btn",href:c,children:Object(n.jsxs)("div",{className:"google-btn",children:[Object(n.jsx)("div",{className:"google-icon-wrapper",children:Object(n.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google-icon"})}),Object(n.jsx)("p",{className:"btn-text",children:Object(n.jsx)("b",{children:"Sign in with google"})})]})})]})})},b=c(127),u=c(128),O=c(58),f=c.n(O),m=c(59),g=c.n(m),p=c(56),x=c.n(p);c(89),c(90);var v=function(e){var t=e.title,c=e.id,s="https://docs.google.com/document/d/".concat(c,"/edit");return Object(n.jsx)("div",{className:"results",children:Object(n.jsx)("a",{href:s,children:Object(n.jsxs)("h5",{children:["Title: ",t]})})})};var N=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),c=t[0],o=t[1],a=Object(s.useState)(""),l=Object(i.a)(a,2),j=l[0],h=l[1],O=Object(s.useState)(!1),m=Object(i.a)(O,2),p=m[0],N=m[1],k=Object(s.useState)(!1),y=Object(i.a)(k,2),S=y[0],w=y[1];Object(s.useEffect)((function(){d.a.get("https://mighty-sands-49960.herokuapp.com/profile").then((function(e){console.log(e.data.name),h(e.data.name)})).catch((function(e){return console.log(e)}))}),[]),Object(s.useEffect)((function(){d.a.get("https://mighty-sands-49960.herokuapp.com/files").then((function(e){console.log(e.data.files),o(e.data.files),N(!1)})).catch((function(e){return console.log(e)}))}),[]),Object(s.useCallback)((function(){o(c)}),[c]);var _=c.map((function(e){return Object(n.jsx)(v,{title:e.name,id:e.id},e.id)}));return Object(n.jsxs)("div",{className:"form",children:[S?Object(n.jsx)(r.a,{to:"/"}):null,Object(n.jsxs)("h3",{children:["Hello v2, ",Object(n.jsx)("i",{children:j})]}),Object(n.jsx)(x.a,{onClick:function(){d()({method:"GET",url:"https://mighty-sands-49960.herokuapp.com/logout"}).then((function(e){console.log(e.data)})).catch((function(e){return console.log(e)})),w(!0)}}),Object(n.jsx)("hr",{}),Object(n.jsx)("h5",{children:"Tell us what is your favorite fruit:"}),Object(n.jsxs)("form",{className:"form_body",action:"https://mighty-sands-49960.herokuapp.com/copy",method:"POST",children:[Object(n.jsx)(b.a,{label:"Favorite Fruit",variant:"outlined",type:"text",name:"fruit",size:"small"}),Object(n.jsx)("div",{className:"form_btn",children:Object(n.jsx)(u.a,{type:"submit",variant:"contained",color:"primary",size:"small",startIcon:Object(n.jsx)(f.a,{}),children:"Save doc"})})]}),Object(n.jsx)("h3",{children:"Files"}),Object(n.jsx)("div",{className:"refresh_btn",children:Object(n.jsxs)(u.a,{onClick:function(){return window.location.reload()},children:["Refresh",Object(n.jsx)("span",{className:"refresh_icon",children:Object(n.jsx)(g.a,{})})]})}),Object(n.jsx)("div",{className:"results_table",children:p?Object(n.jsx)("div",{className:"spinner-border text-primary",role:"status"}):_})]})};var k=function(){var e=Object(s.useState)(!0),t=Object(i.a)(e,2),c=t[0],o=t[1];return Object(s.useEffect)((function(){d.a.get("https://mighty-sands-49960.herokuapp.com/auth").then((function(e){console.log(e),o(!0)})).catch((function(e){console.log(e),o(!1)}))}),[]),console.log(c),Object(n.jsx)(l.a,{basename:"/GoogleDriveApi",children:Object(n.jsx)("div",{className:"app-root",children:Object(n.jsx)(r.d,{children:Object(n.jsx)(r.b,{path:"/",children:c?Object(n.jsx)(N,{}):Object(n.jsx)(h,{})})})})})};a.a.render(Object(n.jsx)(k,{}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.61221114.chunk.js.map