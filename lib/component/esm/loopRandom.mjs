import"svelte/internal";import{t}from"./Typewriter.mjs";import{o as e}from"./typingInterval.mjs";import{i as r}from"./loopTypewriterEffect.mjs";import{o}from"./cleanChildNodes.mjs";let n=[];const a=t=>{for(;;){const r=e(0,t.length),o="number"==typeof n&&r!==n;if(Array.isArray(n)&&!n.includes(r)||o)return o&&(n=[]),n.push(r),t[r];n.length===t.length&&(n=n.pop())}};export default async({node:e,elements:n},s)=>{for(;s.loopRandom;){const{currentNode:m,text:i}=a(n);o(e);const p=m.tagName.toLowerCase(),l=t(i,p);[...m.attributes].forEach((({name:t,value:e})=>l.setAttribute(t,e))),e.appendChild(l),await r({currentNode:l,text:i},s),o(e)}};
