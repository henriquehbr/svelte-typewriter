import"svelte/internal";import{c as e,l as o}from"./Typewriter.mjs";const t=e=>e.childNodes.forEach((e=>e.remove()));export default async({node:r,elements:a},n)=>{for(;n.loop;)for(const{currentNode:s,text:c}of a){t(r);const a=s.tagName.toLowerCase(),d=e(c,a);r.appendChild(d),await o({currentNode:d,text:c},n),t(r)}};
