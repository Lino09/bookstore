(this.webpackJsonpbookstore=this.webpackJsonpbookstore||[]).push([[0],{29:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var r=c(0),o=c.n(r),s=c(10),n=c.n(s),a=c(9),i=c(2),l=c(8),j=c(1),b=function(e){var t=e.submitBookProps;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({title:e.target.title.value,author:e.target.author.value,category:e.target.category.value}),e.target.title.value="",e.target.author.value=""},className:"form",children:[Object(j.jsx)("h2",{className:"form-title",children:"ADD NEW BOOK"}),Object(j.jsx)("input",{name:"title",required:!0,placeholder:"Book Title"}),Object(j.jsx)("input",{name:"author",required:!0,placeholder:"Author"}),Object(j.jsxs)("select",{name:"category",children:[Object(j.jsx)("option",{value:"Horror",children:"Horror"}),Object(j.jsx)("option",{value:"Fantasy",children:"Fantasy"}),Object(j.jsx)("option",{value:"Psychology",children:"Psychology"}),Object(j.jsx)("option",{value:"Drama",children:"Drama"}),Object(j.jsx)("option",{value:"History",children:"History"})]}),Object(j.jsx)("button",{type:"submit",children:"Submit"})]})})},d=function(e){var t=e.title,c=e.author,r=e.category,o=e.progress,s=e.currentChapter,n=e.removeBookProps,a=e.id;return Object(j.jsxs)("div",{className:"book",children:[Object(j.jsxs)("div",{className:"book-col",children:[Object(j.jsx)("small",{children:r}),Object(j.jsx)("h3",{className:"book-title",children:t}),Object(j.jsx)("small",{className:"book-author",children:c}),Object(j.jsx)("div",{className:"book-opt",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("button",{type:"button",children:"Comments"})}),Object(j.jsx)("li",{children:Object(j.jsx)("button",{type:"button",onClick:function(){return n(a)},children:"Remove"})}),Object(j.jsx)("li",{children:Object(j.jsx)("button",{type:"button",children:"Edit"})})]})})]}),Object(j.jsxs)("div",{className:"book-col",children:["Progress Pie:",o]}),Object(j.jsxs)("div",{className:"book-col",children:[Object(j.jsx)("small",{children:"CURRENT CHAPTER"}),Object(j.jsx)("small",{children:s}),Object(j.jsx)("button",{type:"button",children:"UPDATE PROGRESS"})]})]})},u=c(16),h="bookStore/books/ADD_BOOK",O="bookStore/books/REMOVE_BOOK",x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,c=t.type,r=t.payload;switch(c){case h:return[].concat(Object(u.a)(e),[r]);case O:return e.filter((function(e){return e.id!==r}));default:return e}},m=function(){var e=Object(l.c)((function(e){return e.books})),t=Object(l.b)(),c=function(e){t({type:O,payload:e})};return Object(j.jsx)("div",{className:"container cont-books",children:Object(j.jsx)("div",{className:"centerer",children:Object(j.jsxs)("div",{children:[e.map((function(e){return Object(j.jsx)(d,{title:e.title,id:e.id,author:e.author,category:e.category,progress:e.progress,currentChapter:e.currentChapter,removeBookProps:c},e.id)})),Object(j.jsx)(b,{submitBookProps:function(e){var c={id:Math.floor(999999*Math.random()),title:e.title,author:e.author,currentChapter:"Not started",category:e.category,progress:0};t({type:h,payload:c})}})]})})})},p=c.p+"static/media/uc.30572e17.svg",v=function(){return Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"centerer categories-wrapper",children:[Object(j.jsx)("h1",{children:" Under construction"}),Object(j.jsx)("img",{src:p,alt:"under construction"})]})})},g=function(){return Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("nav",{className:"centerer navbar",children:[Object(j.jsx)("h2",{children:"Bookshop"}),Object(j.jsxs)("ul",{className:"nav-ul",children:[Object(j.jsx)("li",{className:"nav-li",children:Object(j.jsx)(a.b,{to:"/",children:"Home"})}),Object(j.jsx)("li",{className:"nav-li",children:Object(j.jsx)(a.b,{to:"/categories",children:"Categories"})})]})]})})},y=c(11),k=c(15),f=c.n(k),N=Object(y.b)({books:x}),P=Object(y.c)(N,Object(y.a)(f.a));c(29);n.a.render(Object(j.jsxs)(o.a.StrictMode,{children:[Object(j.jsxs)(a.a,{children:[Object(j.jsx)(g,{}),Object(j.jsx)(l.a,{store:P,children:Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{path:"/",element:Object(j.jsx)(m,{})}),Object(j.jsx)(i.a,{path:"categories",element:Object(j.jsx)(v,{})})]})})]}),","]}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.2005484e.chunk.js.map