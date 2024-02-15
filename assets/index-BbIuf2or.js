(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function i(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(n){if(n.ep)return;n.ep=!0;const s=i(n);fetch(n.href,s)}})();const y=document.getElementById("tutorial"),r=y.getContext("2d");r.scale(20,20);window.mobileCheck=function(){let e=!1;return function(o){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(o)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(o.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e};mobileCheck()?document.getElementsByClassName("keyboard")[0].style.display="block":document.getElementsByClassName("keyboard")[0].style.display="none";function B(e){y.getContext&&(r.fillStyle="#000",r.fillRect(0,0,y.width,y.height),e.forEach((o,i)=>{o.forEach((a,n)=>{a===1&&(r.fillStyle="green",r.fillRect(n,i,1,1)),a===2&&(r.fillStyle="indianred",r.fillRect(n,i,1,1)),a===3&&(r.fillStyle="darkgreen",r.fillRect(n,i,1,1)),a===4&&(r.fillStyle="white",r.fillRect(n,i,1,1))})}))}function x(){return Array(40).fill().map(()=>Array(30).fill(0))}function E(e){e[0][1]=2,e[0][2]=1,e[0][3]=1,e[0][4]=1,e[0][5]=1,e[0][6]=1,e[0][7]=1,e[0][8]=1,e[0][9]=1,e[0][10]=3}let u=-1;function d(e){const o=Math.floor(Math.random()*29+0),i=Math.floor(Math.random()*39+0);e[i][o]=4,u++,document.getElementById("score").innerText=u}let t=x();E(t);d(t);let l="right";function p(){new Audio("game-over.wav").play(),t=x(),E(t),d(t),l="none",u=0,document.getElementById("score").innerText=u}function g(){const e=new Audio("get-box.wav");u%10===0&&new Audio("very-good.wav").play(),e.play()}function h(e,o){return t[e][o]===1||t[e][o]===2}function A(){window.setInterval(()=>{if(B(t),l==="right"){const[e,o]=w();e[1]+1>29||h(e[0],e[1]+1)?p():(t[o[0]][o[1]]=0,t[e[0]][e[1]+1]===4?(t[e[0]][e[1]]=1,t[e[0]][e[1]+1]=1,t[e[0]][e[1]+2]=3,d(t),g()):(t[e[0]][e[1]]=1,t[e[0]][e[1]+1]=3))}if(l==="left"){const[e,o]=w();e[1]-1<0||h(e[0],e[1]-1)?p():(t[o[0]][o[1]]=0,t[e[0]][e[1]-1]===4?(t[e[0]][e[1]]=1,t[e[0]][e[1]-1]=3,t[e[0]][e[1]-2]=3,d(t),g()):(t[e[0]][e[1]]=1,t[e[0]][e[1]-1]=3))}if(l==="up"){const[e,o]=w();e[0]-1<0||h(e[0]-1,e[1])?p():(t[o[0]][o[1]]=0,t[e[0]-1][e[1]]===4?(t[e[0]][e[1]]=1,t[e[0]-1][e[1]]=1,t[e[0]-2][e[1]]=3,d(t),g()):(t[e[0]][e[1]]=1,t[e[0]-1][e[1]]=3))}if(l==="down"){const[e,o]=w();e[0]+1>39||h(e[0]+1,e[1])?p():(t[o[0]][o[1]]=0,t[e[0]+1][e[1]]===4?(t[e[0]][e[1]]=1,t[e[0]+1][e[1]]=1,t[e[0]+2][e[1]]=3,d(t),g()):(t[e[0]][e[1]]=1,t[e[0]+1][e[1]]=3))}},100)}A();function w(){const e=[];t.forEach((b,v)=>{let f=[0,0];const m=b.findIndex((k,P)=>k===2);m!==-1&&(f=[v,m],e.push(f))}),t.forEach((b,v)=>{let f=[0,0];const m=b.findLastIndex((k,P)=>k===3);m!==-1&&(f=[v,m],e.push(f))});const o=e[e.length-1],i=e[0];let a=!1,n=!1,s=!1,c=!1;return i[0]>0&&(a=t[i[0]-1][i[1]]===1,a&&(t[i[0]-1][i[1]]=2)),i[0]<39&&(n=t[i[0]+1][i[1]]===1,n&&(t[i[0]+1][i[1]]=2)),i[1]>0&&(s=t[i[0]][i[1]-1]===1,s&&(t[i[0]][i[1]-1]=2)),i[1]<29&&(c=t[i[0]][i[1]+1]===1,c&&(t[i[0]][i[1]+1]=2)),[o,i]}document.onkeydown=function(e){e.preventDefault(),e.key==="ArrowDown"?l!=="up"&&(l="down"):e.key==="ArrowUp"?l!=="down"&&(l="up"):e.key==="ArrowLeft"?l!=="right"&&(l="left"):e.key==="ArrowRight"&&l!=="left"&&(l="right")};document.getElementById("btn_down").addEventListener("touchstart",()=>{l!=="up"&&(l="down")});document.getElementById("btn_up").addEventListener("touchstart",()=>{l!=="down"&&(l="up")});document.getElementById("btn_left").addEventListener("touchstart",()=>{l!=="right"&&(l="left")});document.getElementById("btn_right").addEventListener("touchstart",()=>{l!=="left"&&(l="right")});
