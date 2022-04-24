(()=>{"use strict";var e={578:(e,t,o)=>{o.d(t,{Z:()=>c});var n=o(81),r=o.n(n),i=o(645),a=o.n(i)()(r());a.push([e.id,'*{margin:0;padding:0;box-sizing:border-box;font-family:"Archivo",sans-serif}.block{overflow:hidden}body{background-color:#fafafa}body .background-image{width:600px}body .remove-image{display:none}body .navigation{background-color:#fafafa;box-shadow:0px 5px 8px #b6b6b6}body .container-for-description-element{display:flex;flex-direction:column;align-items:center}body .selector-container{margin:0 auto;max-width:1000px;display:flex;border-radius:20px;height:120px;margin-bottom:70px}body .selector-container .logo{width:20%;display:flex;justify-content:left;align-items:center}body .selector-container .logo img{width:80px;display:block;cursor:pointer}body .selector-container form{display:flex;width:60%;justify-content:center;align-items:center}body .selector-container form .form-container{display:block;max-width:600px;margin:0 auto}body .selector-container form .form-container input{background-color:#fcfcfc;outline:none;padding:15px;font-size:1rem;border:2px solid #232323;border-radius:5px;font-family:"Archivo",sans-serif;max-width:300px;margin-right:20px;transition:ease-in-out .2s}body .selector-container form .form-container input:hover{border:2px solid #ea610e}body .selector-container form .form-container button{padding:15px;font-family:"Archivo",sans-serif;font-weight:700;border:none;color:#fafafa;width:80px;border-radius:5px;background-color:#232323;transition:ease-in-out .2s}body .selector-container form .form-container button:hover{background-color:#ea610e;color:#232323}body .selector-container form .form-container button:active{background-color:#f79c65}body .selector-container .spacing{width:20%}body .container{margin:0 auto;max-width:1000px}body .cover{position:fixed;height:100vh;width:100%;top:0;left:0;z-index:1;background-color:#fafafa;opacity:.8}body .Open-library-link{color:#ea610e;text-decoration:none;cursor:pointer}body .Open-library-link:hover{border-bottom:1px solid #ea610e}body .book-description-container{width:400px;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);z-index:99;background-color:#232323;padding:20px;border-radius:10px}body .book-description-container h3{color:#ea610e;font-size:1.2rem;margin-bottom:10px}body .book-description-container p{color:#fafafa;font-size:1rem}body .library-container{display:grid;gap:30px;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));margin-bottom:100px}body .library-container .alert{margin:30px 0 30px 0;text-align:center;color:#ea610e;font-size:1.6rem}body .library-container .suggestion{text-align:center;color:#232323;font-size:1rem}body .library-container .book-container{background-color:#232323;padding:30px;border-radius:10px;height:280px;cursor:pointer}body .library-container .book-container h3{color:#fafafa;line-height:1.6rem;font-size:1.4rem;font-weight:700;margin-bottom:10px}body .library-container .book-container h5{color:#ea610e;font-size:.8rem;font-weight:300;margin-bottom:3px}body .library-container .book-container:hover{background-color:#ea610e;transition:ease-in-out .2s}body .library-container .book-container:hover h3{color:#232323;transition:ease-in .2s}body .library-container .book-container:hover h5{color:#fcfcfc;transition:ease-in .2s}@media screen and (max-width: 1100px){body .book-description-container{width:350px}body .remove-image{display:none}body .navigation{padding:0 30px 0 30px}body .container{padding:0 30px 0 30px}}@media screen and (max-width: 710px){body .background-image{display:block;width:100%}body .remove-image{display:none}body .selector-container .logo{width:20%}body .selector-container .logo img{width:60px;display:block;cursor:pointer}body .selector-container form{width:80%;justify-content:end;-webkit-justify-content:flex-end}body .selector-container form .form-container{margin:0}body .selector-container form .form-container input{max-width:150px;padding:10px 5px;margin-right:10px}body .selector-container form .form-container button{width:50px}body .selector-container .spacing{width:0%}}@media screen and (max-width: 350px){body .library-container{grid-template-columns:repeat(auto-fit, minmax(200px, 1fr))}body .remove-image{display:none}body .book-description-container{width:230px}body .selector-container .logo{width:30%}body .selector-container .logo img{width:60px;display:block;cursor:pointer}body .selector-container form{width:70%;justify-content:end}body .selector-container form .form-container{margin:0;display:flex;flex-direction:column;align-items:flex-end}body .selector-container form .form-container input{max-width:120px;padding:10px 5px;font-size:.8rem;margin-right:0px;margin-bottom:10px}body .selector-container form .form-container button{width:50px}body .selector-container .spacing{width:0%}}',""]);const c=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o="",n=void 0!==t[5];return t[4]&&(o+="@supports (".concat(t[4],") {")),t[2]&&(o+="@media ".concat(t[2]," {")),n&&(o+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),o+=e(t),n&&(o+="}"),t[2]&&(o+="}"),t[4]&&(o+="}"),o})).join("")},t.i=function(e,o,n,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(n)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);n&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),o&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=o):l[2]=o),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function o(e){for(var o=-1,n=0;n<t.length;n++)if(t[n].identifier===e){o=n;break}return o}function n(e,n){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],d=n.base?s[0]+n.base:s[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var u=o(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=r(m,n);n.byIndex=c,t.splice(c,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function r(e,t){var o=t.domAPI(t);return o.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;o.update(e=t)}else o.remove()}}e.exports=function(e,r){var i=n(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=o(i[a]);t[c].references--}for(var s=n(e,r),d=0;d<i.length;d++){var l=o(i[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=s}}},569:e=>{var t={};e.exports=function(e,o){var n=function(e){if(void 0===t[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}t[e]=o}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(o)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,o)=>{e.exports=function(e){var t=o.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(o){!function(e,t,o){var n="";o.supports&&(n+="@supports (".concat(o.supports,") {")),o.media&&(n+="@media ".concat(o.media," {"));var r=void 0!==o.layer;r&&(n+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),n+=o.css,r&&(n+="}"),o.media&&(n+="}"),o.supports&&(n+="}");var i=o.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,o)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={id:n,exports:{}};return e[n](i,i.exports,o),i.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{let e={body:document.querySelector("body"),libraryContainer:document.querySelector(".library-container"),inputField:document.getElementById("libro"),searchBtn:document.querySelector("button"),form:document.querySelector("form"),logo:document.querySelector(".logo"),container:document.querySelector(".container-for-description-element"),image:document.querySelector(".background-image"),getImage(){e.image=document.querySelector(".background-image")}};const t=e;class n{static displayBooks=function(e){if(n.clearPage(),"error"===e||0===e.length){let e=document.createElement("div");t.libraryContainer.append(e);let o=document.createElement("h3");o.classList.add("alert"),o.textContent="No book matches";let n=document.createElement("h5");return n.classList.add("suggestion"),n.textContent="Please try looking for another category",e.append(o),void o.after(n)}for(let o=0;o<e.length;o++){let n=document.createElement("div");n.classList.add("book-container"),n.setAttribute("data-book",e[o].key),t.libraryContainer.append(n);let r=document.createElement("h3");r.textContent=e[o].title,n.append(r);let i=e[o].authors.length;i>8&&(i=8);for(let t=0;t<i;t++){let i=document.createElement("h5");if(i.textContent=e[o].authors[t].name,r.after(i),7==t){let e=document.createElement("h5");e.textContent="...",n.append(e);break}}}};static displayDescription=function(e){let o=document.createElement("div");o.classList.add("cover");let n=document.createElement("div");n.classList.add("book-description-container");let r=document.createElement("h3");r.textContent="Description";let i=document.createElement("p");if(e.length<=1300)i.textContent=e;else{const t=e.substring(0,1300);i.innerHTML=t+'...<a target="_blank" class="Open-library-link" href="https://openlibrary.org/">(read more on Open Library).</a>'}t.container.prepend(o),t.body.classList.add("block"),o.before(n),n.append(r),r.after(i)};static resetDescription=function(e){e.target.classList.contains("cover")&&(t.container.innerHTML='<img class="background-image remove-image" src="./img/background-image.svg">',t.body.classList.remove("block"))};static loading=function(){let e=document.createElement("h5");e.textContent="Loading...",e.classList.add("suggestion"),t.libraryContainer.append(e)};static clearPage=function(){t.libraryContainer.innerHTML=""};static removeImage=function(){t.image.classList.add("remove-image")};static addImage=function(){t.getImage(),t.image.setAttribute("class","background-image")}}class r{static getList=async function(e){return fetch(e).then((e=>e.ok?e.json():Promise.reject())).then((e=>e.works)).catch((()=>"error"))};static getDescription=async function(e){return fetch(e).then((e=>e.json())).then((e=>"object"==typeof e.description||null==e.description?"Description is not available for this book":e.description))}}var i=o(379),a=o.n(i),c=o(795),s=o.n(c),d=o(569),l=o.n(d),p=o(565),u=o.n(p),m=o(216),f=o.n(m),b=o(589),g=o.n(b),y=o(578),h={};h.styleTagTransform=g(),h.setAttributes=u(),h.insert=l().bind(null,"head"),h.domAPI=s(),h.insertStyleElement=f(),a()(y.Z,h),y.Z&&y.Z.locals&&y.Z.locals,(()=>{function e(){n.removeImage(),n.clearPage(),n.loading();let e=t.inputField.value;e=e.toLowerCase(),e=e.replace(/\s/g,""),r.getList(`https://openlibrary.org/subjects/${e}.json`).then((e=>{n.displayBooks(e)})),t.inputField.value=null}t.libraryContainer.addEventListener("click",(function(e){if(e.target.classList.contains("book-container")){let t=e.target.dataset.book;r.getDescription(`https://openlibrary.org${t}.json`).then((e=>{n.displayDescription(e)}))}else{if(null==e.target||e.target.classList.contains("library-container")||e.target.classList.contains("alert")||e.target.classList.contains("suggestion"))return;{let t=e.target.parentNode.dataset.book;r.getDescription(`https://openlibrary.org${t}.json`).then((e=>{n.displayDescription(e)}))}}})),t.searchBtn.addEventListener("click",e),document.onkeydown=function(o){""!=t.inputField.value&&"Enter"===o.key&&e()},t.form.addEventListener("submit",(e=>{e.preventDefault()})),t.logo.addEventListener("click",(()=>{n.clearPage(),n.addImage()})),document.addEventListener("click",(e=>{n.resetDescription(e)}))})()})()})();