(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>f});var i=t(81),o=t.n(i),a=t(645),r=t.n(a),s=t(667),c=t.n(s),l=new URL(t(388),t.b),d=new URL(t(907),t.b),p=r()(o()),u=c()(l),h=c()(d);p.push([e.id,`@font-face {\n    font-family: 'HeaderFont';\n    src: url(${u});\n    font-weight: 700;\n}\n\nbody{\n    background-size: cover;\n    background-image: url(${h});\n}\n.whitetext{\n    color: rgb(235, 228, 203);\n}\nmain{\n    margin: auto;\n    margin-top: 20%;\n    width: 30%;\n    text-indent: 2px;\n    word-spacing: 5px;\n    font-size: larger;\n    text-align: center;\n    border: 2px dashed whitesmoke;\n    padding: 8px;\n}\nheader{\n    margin: 24px;\n    font-size: 48px;\n    text-align: center;\n    font-family: 'HeaderFont'\n}\n.buttons{\n    font-size: 48px;\n    font-family: 'HeaderFont';\n}\n.buttons:hover{\n    color: brown;\n}\n.menu{\n    width: 300px;\n    position: relative;\n    top: 120px;\n    left: 350px; \n    transform:scaleY(1.7); \n}\n.info{\n    width: 200px;\n    position: relative;\n    top: 40px;\n    left: 991px;\n    font-size: 44px;\n    transform:scaleY(1.2); \n}\n.escape{\n    width: 300px;\n    position: relative;\n    top: 260px;\n    left: 1421px;\n    font-size: 54px;\n    transform:scaleY(2); \n}\n#dashed{\n    text-decoration: line-through;\n}\nul{\n    font-size: larger;\n}\n.menu-items{\n    width:20%;\n    font-family: 'HeaderFont';\n}`,""]);const f=p},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",i=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),i&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),i&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,i,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(i)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(r[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);i&&r[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,i=0;i<n.length;i++)if(n[i].identifier===e){t=i;break}return t}function i(e,i){for(var a={},r=[],s=0;s<e.length;s++){var c=e[s],l=i.base?c[0]+i.base:c[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=t(p),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(h);else{var f=o(h,i);i.byIndex=s,n.splice(s,0,{identifier:p,updater:f,references:1})}r.push(p)}return r}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=i(e=e||[],o=o||{});return function(e){e=e||[];for(var r=0;r<a.length;r++){var s=t(a[r]);n[s].references--}for(var c=i(e,o),l=0;l<a.length;l++){var d=t(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=c}}},569:e=>{var n={};e.exports=function(e,t){var i=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,o&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(i,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},388:(e,n,t)=>{e.exports=t.p+"40b9ce5b09d204d4e6a3.woff2"},907:(e,n,t)=>{e.exports=t.p+"876c0fa9d4ddc9eef889.jpg"}},n={};function t(i){var o=n[i];if(void 0!==o)return o.exports;var a=n[i]={id:i,exports:{}};return e[i](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var i=n.getElementsByTagName("script");if(i.length)for(var o=i.length-1;o>-1&&!e;)e=i[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),i=t(795),o=t.n(i),a=t(569),r=t.n(a),s=t(565),c=t.n(s),l=t(216),d=t.n(l),p=t(589),u=t.n(p),h=t(426),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=r().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),n()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;const m=t.p+"ceccb90f9df4bdadfaaa.jpg";let g=document.createElement("header");g.innerText="Peppinos Pizza",g.classList.add("whitetext");let b=function(){let e=document.createElement("main");return e.innerText="Peppino is a portly Italian chef wearing a black T-shirt, black pants, a white tank top, and a chef's hat. He also has black hair and a small mustache under his long nose. He shows signs of both anger and fear, frequently shifting between the two. He is only shown to be happy when he accomplishes something. He is the owner of Peppino's Pizza, named after himself. The restaurant is implied to be in rough shape, with buckets of water spilled on the floor (with a stray bucket), and pizza sliding off the counter.  As shown in the game's intro, running the restaurant seems to be putting Peppino in a bit of debt, with little to no money shown in the shop. Additionally, in the game's ending, Mr. Stick can be seen running off with a bag of money, behind what is assumed to be Peppino's Pizza. This could be the reason behind Peppino's large amounts of debt.Despite their rivalry,Mr. Stick is still considered to be one of Peppino's friends.",e.classList.add("whitetext"),e.id="main",e}(),v=document.createElement("div"),w=document.createElement("div"),y=document.createElement("div");v.innerText="MENU",w.innerText="INFO",y.innerText="ESCAPE",v.classList.add("whitetext","buttons","menu"),w.classList.add("whitetext","buttons","info"),y.classList.add("whitetext","buttons","escape"),v.addEventListener("click",(function(){const e=document.getElementById("content"),n=document.getElementById("main");e.removeChild(n);let t=document.createElement("main");t.innerHTML="<ul><li>Pepperoni  Pizza</li><li>Pineapple  Pizza</li><li>Brunos  Salad</li><li id='dashed'>Noises  favorite</li><li class='large'>BEANS</li></ul>",t.classList.add("whitetext","menu-items"),t.id="main",e.appendChild(t),console.log("works")})),w.addEventListener("click",(function(){const e=document.getElementById("content"),n=document.getElementById("main");e.removeChild(n);let t=document.createElement("main");t.innerText="Peppino is a portly Italian chef wearing a black T-shirt, black pants, a white tank top, and a chef's hat. He also has black hair and a small mustache under his long nose. He shows signs of both anger and fear, frequently shifting between the two. He is only shown to be happy when he accomplishes something. He is the owner of Peppino's Pizza, named after himself. The restaurant is implied to be in rough shape, with buckets of water spilled on the floor (with a stray bucket), and pizza sliding off the counter.  As shown in the game's intro, running the restaurant seems to be putting Peppino in a bit of debt, with little to no money shown in the shop. Additionally, in the game's ending, Mr. Stick can be seen running off with a bag of money, behind what is assumed to be Peppino's Pizza. This could be the reason behind Peppino's large amounts of debt.Despite their rivalry,Mr. Stick is still considered to be one of Peppino's friends.",t.classList.add("whitetext"),t.id="main",e.appendChild(t),console.log("works")})),y.addEventListener("click",(function(){E.innerHTML='<audio id="audio" src="../src/sound.mp3" autostart="false" ></audio>',document.getElementById("audio").play(),E.style.background="url(../src/images/jumpscare.jpg)",E.style.backgroundSize="cover"}));const x=document.getElementById("content");let E=document.body;x.appendChild(g),x.appendChild(v),x.appendChild(w),x.appendChild(y),x.appendChild(b);const P=new Image;P.src=m,x.appendChild(P)})()})();