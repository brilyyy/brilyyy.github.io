import{r as t}from"./chunks/index.555a8889.js";import{B as l}from"./chunks/BlogPost.1a673ea6.js";import{j as s}from"./chunks/jsx-runtime.72f25693.js";const m=()=>{const[o,r]=t.exports.useState([]),[c,a]=t.exports.useState(!0);return t.exports.useEffect(()=>{(async()=>{const i=await(await fetch("https://brilyyy.kangrosdi.com/api/posts")).json();a(!1),r(i)})()},[]),s.exports.jsxs("div",{className:"mx-auto max-w-screen-lg px-3 py-6",children:[s.exports.jsx("div",{className:"mb-6 text-2xl font-bold",children:s.exports.jsxs("div",{className:"flex items-baseline justify-between",children:[s.exports.jsxs("div",{children:["Recent"," ",s.exports.jsx("span",{className:"bg-gradient-to-br from-teal-500 to-emerald-400 bg-clip-text text-transparent",children:"Posts"})]}),s.exports.jsx("div",{className:"text-sm",children:s.exports.jsx("a",{href:"/blog",children:"View all Posts \u2192"})})]})}),s.exports.jsx("div",{className:"grid grid-cols-1 gap-6 md:grid-cols-3",children:o?.slice(0,3).map(e=>s.exports.jsx(l,{post:e},e.id))})]})};export{m as default};