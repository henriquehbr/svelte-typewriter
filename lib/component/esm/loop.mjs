import"svelte/internal";import{t}from"./Typewriter.mjs";import{o as e,n as r}from"./unwriteEffect.mjs";import{o}from"./typingInterval.mjs";import{o as a}from"./writeEffect.mjs";let n=[];const i=t=>{for(;;){const e=o(0,t.length),r="number"==typeof n&&e!==n;if(Array.isArray(n)&&!n.includes(e)||r)return r&&(n=[]),n.push(e),t[e];n.length===t.length&&(n=n.pop())}},s=async(o,{currentNode:n,text:i},s)=>{e(o);const m=n.tagName.toLowerCase(),f=t(i,m);[...n.attributes].forEach((({name:t,value:e})=>f.setAttribute(t,e))),o.appendChild(f),await a({currentNode:f,text:i},s);const l=i.replaceAll("&","&amp;");f.innerHTML===l&&await r(f,s),e(o)};export default async({node:t,elements:e},r)=>{for(;;)if(r.loop)for(const o of e)await s(t,o,r);else if(r.loopRandom){const o=i(e);await s(t,o,r)}};
