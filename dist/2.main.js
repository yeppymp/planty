(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{33:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),c=r(8),l=r(6),o=r.p+"395cce9eb843141a0918fad55720804d.svg";function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var a,n,c=[],l=!0,o=!1;try{for(r=r.call(e);!(l=(a=r.next()).done)&&(c.push(a.value),!t||c.length!==t);l=!0);}catch(e){o=!0,n=e}finally{try{l||null==r.return||r.return()}finally{if(o)throw n}}return c}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}var s=function(e){var t=i(Object(a.useState)("Your cart is empty."),2),r=t[0],c=t[1];return Object(a.useEffect)((function(){e.message&&c(e.message)}),[e.message]),n.a.createElement("div",{className:"empty-container"},n.a.createElement("img",{src:o,alt:"Empty Cart",className:"h-48"}),n.a.createElement("p",{className:"my-6 text-gray-500 font-bold"},r),n.a.createElement(l.b,{to:"/"},n.a.createElement("button",{className:"bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded"},"Shop Some Plants")))};function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var a,n,c=[],l=!0,o=!1;try{for(r=r.call(e);!(l=(a=r.next()).done)&&(c.push(a.value),!t||c.length!==t);l=!0);}catch(e){o=!0,n=e}finally{try{l||null==r.return||r.return()}finally{if(o)throw n}}return c}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}var d=function(e){var t=m(Object(a.useState)({}),2),r=t[0],l=t[1],o=m(Object(a.useState)(r.stock),2),i=o[0],u=o[1],s=m(Object(a.useState)(!1),2),f=s[0],d=s[1],y=Object(a.useContext)(c.c.State);Object(a.useEffect)((function(){e.product&&l(e.product)}),[e.product]),Object(a.useEffect)((function(){var e=y.find((function(e){return e.id===r.id}));u(e?r.stock-e.quantity:r.stock)}),[y,r.stock,r.id]);var b=function(){d(!f)},p=new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"});return n.a.createElement(n.a.Fragment,null,f?n.a.createElement("div",{className:"fixed bottom-5 right-5 w-full px-6 py-3 shadow-2xl flex flex-col items-center border-t sm:w-auto sm:m-4 sm:rounded-lg sm:flex-row sm:border bg-red-600 border-red-600 text-white"},n.a.createElement("div",null," Sorry, there are only ",r.stock," items available for ",r.name,"."),n.a.createElement("div",{className:"flex mt-2 sm:mt-0 sm:ml-4"},n.a.createElement("button",{className:"px-3 py-2 hover:bg-red-700 transition ease-in-out duration-300",onClick:b}," Dismiss "))):"",n.a.createElement("div",{className:"flex justify-between bg-white rounded-lg p-4"},n.a.createElement("div",{className:"flex"},n.a.createElement("img",{className:"h-24 w-24 rounded object-cover object-center",src:r.picture,alt:r.name}),n.a.createElement("div",{className:"mx-4"},n.a.createElement("h3",{className:"font-bold text-black"},r.name),n.a.createElement("p",{className:"line-clamp-1"},r.description),n.a.createElement("button",{className:"text-blue-500",onClick:function(){i>0?e.addQuantity():f||b()}},"Add Qty"),"   |  ",n.a.createElement("button",{className:"text-blue-500",onClick:e.decreaseQuantity},"Decrease Qty"),"   |  ",n.a.createElement("button",{className:"text-blue-500",onClick:e.removeFromCart},"Remove from Cart"))),n.a.createElement("div",{className:"col-span-2 sm:col-span-1 xl:col-span-1 text-right"},n.a.createElement("h1",{className:"text-indigo-500 text-md font-bold"},p.format(r.price*r.quantity)),n.a.createElement("h1",{className:"text-gray-500 text-xs font-semi-bold"},p.format(r.price)," / Product"),r.quantity?n.a.createElement("p",{className:"italic"},"x",r.quantity):"")))};t.default=function(){var e=Object(a.useContext)(c.c.State),t=Object(a.useContext)(c.c.Dispatch),r=e.reduce((function(e,t){var r=e.items,a=e.total,n=t.price,c=t.quantity;return{items:r+c,total:a+c*n}}),{items:0,total:0}),n=r.items,l=r.total,o=new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"});return React.createElement(React.Fragment,null,e.length>0?React.createElement("div",{className:"pt-24 px-8 pb-8"},React.createElement("h1",{className:"font-semibold text-xl mb-4 text-black text-opacity-50"},"Carts"),React.createElement("div",{className:"grid grid-flow-row gap-4"},e.map((function(e){return React.createElement(d,{product:e,key:e.id,removeFromCart:function(){return t({type:c.e,payload:e})},addQuantity:function(){return t({type:c.a,payload:e})},decreaseQuantity:function(){return t({type:c.d,payload:e})}})}))),React.createElement("h3",{className:"mt-4 mb-2"},"Items in Cart: ",React.createElement("strong",null,n)," | Total Cost: ",React.createElement("strong",null,o.format(l))),React.createElement("button",{className:"text-blue-500",onClick:function(){return t({type:c.f})}},"Remove All Items")):React.createElement(s,{message:"Your cart is empty."}))}}}]);