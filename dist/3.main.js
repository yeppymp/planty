(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{32:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(8),c=r.p+"de26d59b1cd72fa0b782fb69fdd0e773.svg";function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,o=[],c=!0,l=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);c=!0);}catch(e){l=!0,a=e}finally{try{c||null==r.return||r.return()}finally{if(l)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var u=function(e){var t=l(Object(n.useState)("No products available."),2),r=t[0],o=t[1];return Object(n.useEffect)((function(){e.message&&o(e.message)}),[e.message]),a.a.createElement("div",{className:"empty-container"},a.a.createElement("img",{src:c,alt:"Empty Products",className:"h-48"}),a.a.createElement("p",{className:"mt-6 text-gray-500"},r))},s=r(15);function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,o=[],c=!0,l=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);c=!0);}catch(e){l=!0,a=e}finally{try{c||null==r.return||r.return()}finally{if(l)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var d=function(e){var t=m(Object(n.useState)({}),2),r=t[0],c=t[1],l=m(Object(n.useState)(r.stock),2),i=l[0],u=l[1],f=m(Object(n.useState)(!1),2),d=f[0],p=f[1],b=Object(n.useContext)(o.c.State);Object(n.useEffect)((function(){e.product&&c(e.product)}),[e.product]),Object(n.useEffect)((function(){var e=b.find((function(e){return e.id===r.id}));u(e?r.stock-e.quantity:r.stock)}),[b,r.stock,r.id]);var y=function(){p(!d)},h=new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"});return a.a.createElement(a.a.Fragment,null,d?a.a.createElement("div",{className:"fixed bottom-5 right-5 w-full px-6 py-3 shadow-2xl flex flex-col items-center border-t sm:w-auto sm:m-4 sm:rounded-lg sm:flex-row sm:border bg-red-600 border-red-600 text-white"},a.a.createElement("div",null," Sorry, the product is out of stock."),a.a.createElement("div",{className:"flex mt-2 sm:mt-0 sm:ml-4"},a.a.createElement("button",{className:"px-3 py-2 hover:bg-red-700 transition ease-in-out duration-300",onClick:y}," Dismiss "))):"",a.a.createElement("div",{className:"bg-white p-6 rounded-lg"},a.a.createElement("img",{className:"lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6",src:r.picture,alt:r.name}),a.a.createElement("h1",{className:"text-gray-900 text-xl font-bold"},r.name),a.a.createElement("div",{className:"my-4"},a.a.createElement("span",{className:"text-gray-500 text-sm line-through"},h.format(r.price)),"  ",a.a.createElement("span",{className:"text-indigo-500 title-font font-bold"},h.format(r.priceDiscount))),a.a.createElement("p",{className:"text-sm mb-4 text-gray-500"},"Stock: x",i),a.a.createElement("p",{className:"text-base text-justify line-clamp-none xl:line-clamp-3 mb-4"},r.description),a.a.createElement("button",{className:"bg-yellow-400 hover:bg-yellow-500 w-full text-white font-bold py-2 px-4 rounded",onClick:function(){i>0?e.addToCart():d||y()}},a.a.createElement(s.a,{className:"h-6 w-6 text-white hover:text-yellow-100 inline-block"}),"  Add to Cart")))};function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,o=[],c=!0,l=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);c=!0);}catch(e){l=!0,a=e}finally{try{c||null==r.return||r.return()}finally{if(l)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.default=function(){var e=p(Object(n.useState)([]),2),t=e[0],r=e[1],a=p(Object(n.useState)(t&&t.length>0),2),c=a[0],l=a[1],i=p(Object(n.useState)(!1),2),s=i[0],m=i[1],f=Object(n.useContext)(o.c.State),b=Object(n.useContext)(o.c.Dispatch),y=function(){m(!s)};return Object(n.useEffect)((function(){fetch("/data/products.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){r(e),l(e&&e.length>0)}))}),[]),React.createElement(React.Fragment,null,s?React.createElement("div",{className:"fixed bottom-5 right-5 w-full px-6 py-3 shadow-2xl flex flex-col items-center border-t sm:w-auto sm:m-4 sm:rounded-lg sm:flex-row sm:border bg-green-600 border-green-600 text-white"},React.createElement("div",null," 1 Product added to cart. You have ",f.length," products in cart."),React.createElement("div",{className:"flex mt-2 sm:mt-0 sm:ml-4"},React.createElement("button",{className:"px-3 py-2 hover:bg-green-700 transition ease-in-out duration-300",onClick:y}," Dismiss "))):"",c?React.createElement("div",{className:"px-8 pb-8 pt-24"},React.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4"},t.map((function(e){return React.createElement(d,{product:e,key:e.id,addToCart:function(){return function(e){b({type:o.b,payload:e}),s||y()}(e)}})})))):React.createElement(u,{message:"No available products."}))}}}]);