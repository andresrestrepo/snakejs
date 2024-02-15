(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function i(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=i(n);fetch(n.href,r)}})();const w=document.getElementById("tutorial"),f=w.getContext("2d");f.scale(20,20);function v(e){w.getContext&&(f.fillStyle="#000",f.fillRect(0,0,w.width,w.height),e.forEach((o,i)=>{o.forEach((s,n)=>{s===1&&(f.fillStyle="green",f.fillRect(n,i,1,1)),s===2&&(f.fillStyle="indianred",f.fillRect(n,i,1,1)),s===3&&(f.fillStyle="darkgreen",f.fillRect(n,i,1,1)),s===4&&(f.fillStyle="white",f.fillRect(n,i,1,1))})}))}function L(){return Array(40).fill().map(()=>Array(30).fill(0))}function A(e){e[0][1]=2,e[0][2]=1,e[0][3]=1,e[0][4]=1,e[0][5]=1,e[0][6]=1,e[0][7]=1,e[0][8]=1,e[0][9]=1,e[0][10]=3}let h=-1;function d(e){const o=Math.floor(Math.random()*29+0),i=Math.floor(Math.random()*39+0);e[i][o]=4,h++,document.getElementById("score").innerText=h}let t=L();A(t);d(t);let l="right";function g(){new Audio("game-over.wav").play(),t=L(),A(t),d(t),l="none",h=0,document.getElementById("score").innerText=h}function m(){const e=new Audio("get-box.wav");h%10===0&&new Audio("very-good.wav").play(),e.play()}function p(e,o){return t[e][o]===1||t[e][o]===2}function S(){window.setInterval(()=>{if(v(t),l==="right"){const[e,o]=y();e[1]+1>29||p(e[0],e[1]+1)?g():(t[o[0]][o[1]]=0,t[e[0]][e[1]+1]===4?(t[e[0]][e[1]]=1,t[e[0]][e[1]+1]=1,t[e[0]][e[1]+2]=3,d(t),m()):(t[e[0]][e[1]]=1,t[e[0]][e[1]+1]=3))}if(l==="left"){const[e,o]=y();e[1]-1<0||p(e[0],e[1]-1)?g():(t[o[0]][o[1]]=0,t[e[0]][e[1]-1]===4?(t[e[0]][e[1]]=1,t[e[0]][e[1]-1]=3,t[e[0]][e[1]-2]=3,d(t),m()):(t[e[0]][e[1]]=1,t[e[0]][e[1]-1]=3))}if(l==="up"){const[e,o]=y();e[0]-1<0||p(e[0]-1,e[1])?g():(t[o[0]][o[1]]=0,t[e[0]-1][e[1]]===4?(t[e[0]][e[1]]=1,t[e[0]-1][e[1]]=1,t[e[0]-2][e[1]]=3,d(t),m()):(t[e[0]][e[1]]=1,t[e[0]-1][e[1]]=3))}if(l==="down"){const[e,o]=y();e[0]+1>39||p(e[0]+1,e[1])?g():(t[o[0]][o[1]]=0,t[e[0]+1][e[1]]===4?(t[e[0]][e[1]]=1,t[e[0]+1][e[1]]=1,t[e[0]+2][e[1]]=3,d(t),m()):(t[e[0]][e[1]]=1,t[e[0]+1][e[1]]=3))}},100)}S();function y(){const e=[];t.forEach((E,P)=>{let a=[0,0];const u=E.findIndex((B,I)=>B===2);u!==-1&&(a=[P,u],e.push(a))}),t.forEach((E,P)=>{let a=[0,0];const u=E.findLastIndex((B,I)=>B===3);u!==-1&&(a=[P,u],e.push(a))});const o=e[e.length-1],i=e[0];let s=!1,n=!1,r=!1,c=!1;return i[0]>0&&(s=t[i[0]-1][i[1]]===1,s&&(t[i[0]-1][i[1]]=2)),i[0]<39&&(n=t[i[0]+1][i[1]]===1,n&&(t[i[0]+1][i[1]]=2)),i[1]>0&&(r=t[i[0]][i[1]-1]===1,r&&(t[i[0]][i[1]-1]=2)),i[1]<29&&(c=t[i[0]][i[1]+1]===1,c&&(t[i[0]][i[1]+1]=2)),[o,i]}document.onkeydown=function(e){e.key==="ArrowDown"?l!=="up"&&(l="down"):e.key==="ArrowUp"?l!=="down"&&(l="up"):e.key==="ArrowLeft"?l!=="right"&&(l="left"):e.key==="ArrowRight"&&l!=="left"&&(l="right")};document.getElementById("btn_down").addEventListener("touchstart",()=>{l!=="up"&&(l="down")});document.getElementById("btn_up").addEventListener("touchstart",()=>{l!=="down"&&(l="up")});document.getElementById("btn_left").addEventListener("touchstart",()=>{l!=="right"&&(l="left")});document.getElementById("btn_right").addEventListener("clitouchstartk",()=>{l!=="left"&&(l="right")});