(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();var r=cnv.getContext("2d"),l=window.innerWidth,a=window.innerHeight;cnv.width=l;cnv.height=a;r.fillRect(0,0,l,a);function d(){let s=l*Math.random(),n=a*Math.random(),o=2.5*Math.random();r.shadowBlur=5,r.shadowColor="white",r.beginPath(),r.fillStyle="white",r.arc(s,n,o,0,Math.PI*2),r.fill()}var u=setInterval(d,100);setTimeout(()=>{clearInterval(u)},5e3);let f=setInterval(d,100);setTimeout(()=>{clearInterval(f)},2e4);
