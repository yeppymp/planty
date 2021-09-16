(this["webpackJsonpreact-shopping-cart"]=this["webpackJsonpreact-shopping-cart"]||[]).push([[4],{37:function(e,t,c){"use strict";c.r(t);var s=c(13),n=c(0),a=c(10),r=c.p+"static/media/empty.de26d59b.svg",o=c(1),i=function(e){var t=Object(n.useState)("No products available."),c=Object(s.a)(t,2),a=c[0],i=c[1];return Object(n.useEffect)((function(){e.message&&i(e.message)}),[e.message]),Object(o.jsxs)("div",{className:"empty-container",children:[Object(o.jsx)("img",{src:r,alt:"Empty Products",className:"h-48"}),Object(o.jsx)("p",{className:"mt-6 text-gray-500",children:a})]})},l=c(19),d=function(e){var t=Object(n.useState)({}),c=Object(s.a)(t,2),r=c[0],i=c[1],d=Object(n.useState)(r.stock),b=Object(s.a)(d,2),j=b[0],m=b[1],u=Object(n.useState)(!1),x=Object(s.a)(u,2),h=x[0],p=x[1],f=Object(n.useContext)(a.c.State);Object(n.useEffect)((function(){e.product&&i(e.product)}),[e.product]),Object(n.useEffect)((function(){var e=f.find((function(e){return e.id===r.id}));m(e?r.stock-e.quantity:r.stock)}),[f,r.stock,r.id]);var O=function(){p(!h)},g=new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"});return Object(o.jsxs)(o.Fragment,{children:[h?Object(o.jsxs)("div",{className:"fixed bottom-5 right-5 w-full px-6 py-3 shadow-2xl flex flex-col items-center border-t sm:w-auto sm:m-4 sm:rounded-lg sm:flex-row sm:border bg-red-600 border-red-600 text-white",children:[Object(o.jsx)("div",{children:" Sorry, the product is out of stock."}),Object(o.jsx)("div",{className:"flex mt-2 sm:mt-0 sm:ml-4",children:Object(o.jsx)("button",{className:"px-3 py-2 hover:bg-red-700 transition ease-in-out duration-300",onClick:O,children:" Dismiss "})})]}):"",Object(o.jsxs)("div",{className:"bg-white p-6 rounded-lg",children:[Object(o.jsx)("img",{className:"lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6",src:r.picture,alt:r.name}),Object(o.jsx)("h1",{className:"text-gray-900 text-xl font-bold",children:r.name}),Object(o.jsxs)("div",{className:"my-4",children:[Object(o.jsx)("span",{className:"text-gray-500 text-sm line-through",children:g.format(r.price)})," \xa0",Object(o.jsx)("span",{className:"text-indigo-500 title-font font-bold",children:g.format(r.priceDiscount)})]}),Object(o.jsxs)("p",{className:"text-sm mb-4 text-gray-500",children:["Stock: x",j]}),Object(o.jsx)("p",{className:"text-base text-justify line-clamp-none xl:line-clamp-3 mb-4",children:r.description}),Object(o.jsxs)("button",{className:"bg-yellow-400 hover:bg-yellow-500 w-full text-white font-bold py-2 px-4 rounded",onClick:function(){j>0?e.addToCart():h||O()},children:[Object(o.jsx)(l.a,{className:"h-6 w-6 text-white hover:text-yellow-100 inline-block"}),"\xa0 Add to Cart"]})]})]})};t.default=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),c=t[0],r=t[1],l=Object(n.useState)(c&&c.length>0),b=Object(s.a)(l,2),j=b[0],m=b[1],u=Object(n.useState)(!1),x=Object(s.a)(u,2),h=x[0],p=x[1],f=Object(n.useContext)(a.c.State),O=Object(n.useContext)(a.c.Dispatch),g=function(){p(!h)};return Object(n.useEffect)((function(){fetch("/data/products.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){r(e),m(e&&e.length>0)}))}),[]),Object(o.jsxs)(o.Fragment,{children:[h?Object(o.jsxs)("div",{className:"fixed bottom-5 right-5 w-full px-6 py-3 shadow-2xl flex flex-col items-center border-t sm:w-auto sm:m-4 sm:rounded-lg sm:flex-row sm:border bg-green-600 border-green-600 text-white",children:[Object(o.jsxs)("div",{children:[" 1 Product added to cart. You have ",f.length," products in cart."]}),Object(o.jsx)("div",{className:"flex mt-2 sm:mt-0 sm:ml-4",children:Object(o.jsx)("button",{className:"px-3 py-2 hover:bg-green-700 transition ease-in-out duration-300",onClick:g,children:" Dismiss "})})]}):"",j?Object(o.jsx)("div",{className:"px-8 pb-8 pt-24",children:Object(o.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4",children:c.map((function(e){return Object(o.jsx)(d,{product:e,addToCart:function(){return function(e){O({type:a.b,payload:e}),h||g()}(e)}},e.id)}))})}):Object(o.jsx)(i,{message:"No available products."})]})}}}]);
//# sourceMappingURL=4.12b2eac6.chunk.js.map