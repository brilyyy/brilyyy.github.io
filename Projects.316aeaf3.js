import{r as p}from"./chunks/index.555a8889.js";var t={exports:{}},l={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d=p.exports,m=Symbol.for("react.element"),x=Symbol.for("react.fragment"),f=Object.prototype.hasOwnProperty,h=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(r,e,o){var s,a={},i=null,n=null;o!==void 0&&(i=""+o),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(n=e.ref);for(s in e)f.call(e,s)&&!u.hasOwnProperty(s)&&(a[s]=e[s]);if(r&&r.defaultProps)for(s in e=r.defaultProps,e)a[s]===void 0&&(a[s]=e[s]);return{$$typeof:m,type:r,key:i,ref:n,props:a,_owner:h.current}}l.Fragment=x;l.jsx=c;l.jsxs=c;t.exports=l;const g=({name:r,technologies:e,image:o,description:s,url:a})=>t.exports.jsxs("div",{className:"flex flex-col items-center gap-x-8 rounded-md bg-zinc-600 p-3 md:flex-row",children:[t.exports.jsx("div",{className:"shrink-0",children:t.exports.jsx("div",{className:"w-36 h-36 flex items-center",children:t.exports.jsx("img",{className:"w-full hover:translate-y-1 rounded-md ",src:o,alt:r,loading:"lazy"})})}),t.exports.jsxs("div",{children:[t.exports.jsxs("div",{className:"flex flex-col items-center gap-y-2 md:flex-row",children:[t.exports.jsx("a",{className:"hover:text-cyan-400 hover:translate-y-1",href:a,target:"_blank",children:t.exports.jsx("div",{className:"text-xl font-semibold",children:r})}),t.exports.jsx("div",{className:"ml-3 flex flex-col w-full sm:w-auto sm:flex-row gap-2",children:e.map((i,n)=>t.exports.jsx("div",{className:"rounded-md px-2 py-1 text-xs font-semibold bg-emerald-300 text-neutral-700",children:i},n))})]}),t.exports.jsx("p",{className:"mt-3 text-gray-400",children:s})]})]}),y=[{name:"Wiyata Academy",technologies:["react","typescript","bootstrap","react-query"],image:"https://wiyata.id/img/logo.svg",url:"https://wiyata.id",description:"a online learning platform for everyone. learn from the best teachers in the world."},{name:"Greenmetric UNS",technologies:["react","typescript","bootstrap","laravel","inertia-js","php"],image:"https://uns.ac.id/id/wp-content/uploads/Logo-UNS-New-04.png",url:"https://greenmetric.uns.ac.id/",description:"an application for surveying the environment of UNS. it is a web application that can be used by the civital staff."},{name:"Smart Information UNS",technologies:["laravel","blade","php","mysql","bootstrap"],image:"https://smartin.uns.ac.id/assets/foxia/images/logo.png",url:"https://smartin.uns.ac.id/",description:"an application for collecting all university data in number. it is a web application that can be used by the civital staff."}],b=()=>t.exports.jsx("div",{className:"flex flex-col gap-6",children:y.map((r,e)=>t.exports.jsx(g,{name:r.name,technologies:r.technologies,image:r.image,description:r.description,url:r.url},e))});export{b as default};