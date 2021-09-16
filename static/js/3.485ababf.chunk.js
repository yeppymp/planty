(this["webpackJsonpreact-shopping-cart"]=this["webpackJsonpreact-shopping-cart"]||[]).push([[3],{38:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(10),r=c(13),n=c(8),i=c.p+"static/media/empty_cart.395cce9e.svg",l=c(1),o=function(e){var t=Object(s.useState)("Your cart is empty."),c=Object(r.a)(t,2),a=c[0],o=c[1];return Object(s.useEffect)((function(){e.message&&o(e.message)}),[e.message]),Object(l.jsxs)("div",{className:"empty-container",children:[Object(l.jsx)("img",{src:i,alt:"Empty Cart",className:"h-48"}),Object(l.jsx)("p",{className:"my-6 text-gray-500 font-bold",children:a}),Object(l.jsx)(n.b,{to:"/",children:Object(l.jsx)("button",{className:"bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded",children:"Shop Some Plants"})})]})},d=function(e){var t=Object(s.useState)({}),c=Object(r.a)(t,2),n=c[0],i=c[1],o=Object(s.useState)(n.stock),d=Object(r.a)(o,2),m=d[0],b=d[1],j=Object(s.useState)(!1),u=Object(r.a)(j,2),x=u[0],h=u[1],p=Object(s.useContext)(a.c.State);Object(s.useEffect)((function(){e.product&&i(e.product)}),[e.product]),Object(s.useEffect)((function(){var e=p.find((function(e){return e.id===n.id}));b(e?n.stock-e.quantity:n.stock)}),[p,n.stock,n.id]);var O=function(){h(!x)},f=new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"});return Object(l.jsxs)(l.Fragment,{children:[x?Object(l.jsxs)("div",{className:"fixed bottom-5 right-5 w-full px-6 py-3 shadow-2xl flex flex-col items-center border-t sm:w-auto sm:m-4 sm:rounded-lg sm:flex-row sm:border bg-red-600 border-red-600 text-white",children:[Object(l.jsxs)("div",{children:[" Sorry, there are only ",n.stock," items available for ",n.name,"."]}),Object(l.jsx)("div",{className:"flex mt-2 sm:mt-0 sm:ml-4",children:Object(l.jsx)("button",{className:"px-3 py-2 hover:bg-red-700 transition ease-in-out duration-300",onClick:O,children:" Dismiss "})})]}):"",Object(l.jsxs)("div",{className:"flex justify-between bg-white rounded-lg p-4",children:[Object(l.jsxs)("div",{className:"flex",children:[Object(l.jsx)("img",{className:"h-24 w-24 rounded object-cover object-center",src:n.picture,alt:n.name}),Object(l.jsxs)("div",{className:"mx-4",children:[Object(l.jsx)("h3",{className:"font-bold text-black",children:n.name}),Object(l.jsx)("p",{className:"line-clamp-1",children:n.description}),Object(l.jsx)("button",{className:"text-blue-500",onClick:function(){m>0?e.addQuantity():x||O()},children:"Add Qty"})," \xa0 | \xa0",Object(l.jsx)("button",{className:"text-blue-500",onClick:e.decreaseQuantity,children:"Decrease Qty"})," \xa0 | \xa0",Object(l.jsx)("button",{className:"text-blue-500",onClick:e.removeFromCart,children:"Remove from Cart"})]})]}),Object(l.jsxs)("div",{className:"col-span-2 sm:col-span-1 xl:col-span-1 text-right",children:[Object(l.jsx)("h1",{className:"text-indigo-500 text-md font-bold",children:f.format(n.price*n.quantity)}),Object(l.jsxs)("h1",{className:"text-gray-500 text-xs font-semi-bold",children:[f.format(n.price)," / Product"]}),n.quantity?Object(l.jsxs)("p",{className:"italic",children:["x",n.quantity]}):""]})]})]})};t.default=function(){var e=Object(s.useContext)(a.c.State),t=Object(s.useContext)(a.c.Dispatch),c=e.reduce((function(e,t){var c=e.items,s=e.total,a=t.price,r=t.quantity;return{items:c+r,total:s+r*a}}),{items:0,total:0}),r=c.items,n=c.total,i=new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"});return Object(l.jsx)(l.Fragment,{children:e.length>0?Object(l.jsxs)("div",{className:"pt-24 px-8 pb-8",children:[Object(l.jsx)("h1",{className:"font-semibold text-xl mb-4 text-black text-opacity-50",children:"Carts"}),Object(l.jsx)("div",{className:"grid grid-flow-row gap-4",children:e.map((function(e){return Object(l.jsx)(d,{product:e,removeFromCart:function(){return t({type:a.e,payload:e})},addQuantity:function(){return t({type:a.a,payload:e})},decreaseQuantity:function(){return t({type:a.d,payload:e})}},e.id)}))}),Object(l.jsxs)("h3",{className:"mt-4 mb-2",children:["Items in Cart: ",Object(l.jsx)("strong",{children:r})," | Total Cost: ",Object(l.jsx)("strong",{children:i.format(n)})]}),Object(l.jsx)("button",{className:"text-blue-500",onClick:function(){return t({type:a.f})},children:"Remove All Items"})]}):Object(l.jsx)(o,{message:"Your cart is empty."})})}}}]);
//# sourceMappingURL=3.485ababf.chunk.js.map