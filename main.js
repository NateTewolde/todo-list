(()=>{"use strict";var t={890:(t,e,n)=>{n.d(e,{Z:()=>d});var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap);"]),a.push([t.id,'* {\n  margin: 0;\n  padding: 0;\n}\n\n#container {\n  height: 100vh;\n  overflow: auto;\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  font-family: "Roboto", sans-serif;\n  color: #202020;\n}\n\n.sidebar {\n  color: #ecfdf5;\n  font-weight: 500;\n  font-size: 1.5rem;\n  background-color: #047857;\n  padding: 32px;\n  border: solid 2px #047857;\n  border-top-right-radius: 8px;\n  border-bottom-right-radius: 8px;\n  display: grid;\n  grid-template-rows: 4rem 8fr 100%;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  font-size: 3rem;\n  min-width: max-content;\n  color: #ecfdf5;\n  padding-right: 5px;\n  padding-top: 0px;\n  grid-area: 1/1/2/2;\n}\n\n.home-tab {\n  padding-bottom: 8px;\n  font-size: 1.7rem;\n}\n\n.today-tab {\n  padding-bottom: 8px;\n  font-size: 1.7rem;\n}\n\n.this-week-tab {\n  padding-bottom: 24px;\n  font-size: 1.7rem;\n}\n\n.projects-tab {\n  grid-area: 2/1/-1/2;\n  display: flex;\n  flex-direction: column;\n}\n\n.projects-header {\n  display: flex;\n  justify-content: space-between;\n  font-size: 2rem;\n  font-weight: 900;\n}\n\n.add-projects-button {\n  margin-right: -5px;\n}\n\n.projects {\n  margin-top: 16px;\n  font-size: 2.2rem;\n}\n\n.project-tab {\n  display: flex;\n  justify-content: space-between;\n}\n\n.tab {\n  display: flex;\n  align-items: start;\n  column-gap: 12px;\n}\n\n#content {\n  width: 100%;\n  background-color: #ecfdf5;\n  box-sizing: border-box;\n  padding: 32px 64px;\n  display: grid;\n  grid-template-rows: 4rem min-content min-content 100%;\n  position: relative;\n}\n.tab-section {\n  margin-top: 24px;\n}\n\n.header-section {\n  grid-area: 1/1/2/2;\n  display: flex;\n  align-items: center;\n  column-gap: 24px;\n}\n\n.header-title {\n  font-size: 4rem;\n  font-weight: 600;\n}\n\n.header-date {\n  font-size: 1.5rem;\n  font-weight: 500;\n  padding-top: 8px;\n}\n\n#tasks-container {\n  margin-top: 20px;\n}\n\n.priority-container {\n  padding: 24px 0px;\n}\n\n.priority-container:first-of-type {\n  padding-top: 0px;\n}\n\n.task-row {\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 16px;\n  padding-right: 24px;\n  border-radius: 2px;\n}\n\n.priority1-tasks .task-row {\n  border-bottom: 2px solid #ec6767;\n}\n.priority2-tasks .task-row {\n  border-bottom: 2px solid #ec9a57;\n}\n.priority3-tasks .task-row {\n  border-bottom: 2px solid #f0d362;\n}\n.priority4-tasks .task-row {\n  border-bottom: 2px solid #047857;\n}\n\n.task-items {\n  display: grid;\n  grid-template-columns: max-content 2fr 4fr max-content;\n  align-items: center;\n  width: 100%;\n}\n\n.task-title {\n  font-weight: 500px;\n  font-size: 1.1rem;\n  padding: 0px 8px;\n}\n\n.task-description {\n  font-weight: 300px;\n  font-size: 1rem;\n  padding: 0px 8px;\n}\n\n.task-due-date {\n  width: 12ch;\n  padding: 0px 8px;\n  text-align: center;\n}\n\n.revision-items {\n  display: flex;\n  column-gap: 8px;\n  align-items: center;\n  padding-left: 8px;\n}\n\n.priority1-tasks .task-due-date,\n.priority1-tasks .task-description,\n.priority1-tasks .revision-items {\n  border-left: 1px solid #ec6767;\n}\n.priority2-tasks .task-due-date,\n.priority2-tasks .task-description,\n.priority2-tasks .revision-items {\n  border-left: 1px solid #ec9a57;\n}\n\n.priority3-tasks .task-due-date,\n.priority3-tasks .task-description,\n.priority3-tasks .revision-items {\n  border-left: 1px solid #f0d362;\n}\n\n.priority4-tasks .task-due-date,\n.priority4-tasks .task-description,\n.priority4-tasks .revision-items,\n.due-date-field,\n.form-btns,\n.description-field {\n  border-left: 1px solid #047857;\n}\n\n.add-task-btn {\n  font-size: 1.1rem;\n  font-weight: 450;\n  color: #ecfdf5;\n  padding: 6px 16px;\n  border-radius: 8px;\n  border: 2px solid #047857;\n  background-color: #047857;\n  display: flex;\n  column-gap: 8px;\n  align-items: center;\n  justify-content: center;\n}\n\ntextarea:focus,\ninput:focus {\n  outline: none;\n}\n\n.form-fields {\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 16px;\n  padding-right: 24px;\n\n  border-radius: 2px;\n  border-bottom: 2px solid #047857;\n}\n\n.form-items {\n  display: grid;\n  grid-template-columns: max-content 2fr 4fr max-content;\n  align-items: center;\n  width: 100%;\n}\n.priority-field {\n  max-width: 2ch;\n  margin-left: -5px;\n}\n\n.title-field {\n  font-weight: 500px;\n  font-size: 1.1rem;\n  padding: 0px 8px;\n}\n\n.description-field {\n  font-weight: 300px;\n  font-size: 1rem;\n  padding: 0px 8px;\n}\n\n.due-date-field {\n  width: 12ch;\n  padding: 0px 8px;\n  text-align: center;\n}\n\n#title {\n  font-weight: 500px;\n  font-size: 1.1rem;\n  width: 100%;\n  background-color: #ecfdf5;\n  border: 1px solid #ecfdf5;\n}\n#description {\n  font-weight: 300px;\n  font-size: 1rem;\n  width: 100%;\n  background-color: #ecfdf5;\n  border: 1px solid #ecfdf5;\n}\n\n#due-date {\n  width: 13ch;\n  box-sizing: border-box;\n  background-color: #ecfdf5;\n  border: 1px solid #ecfdf5;\n}\n\n#priority {\n  width: 100%;\n}\n\n#new_project_form {\n  display: flex;\n  justify-content: space-between;\n}\n\n.project-form-items {\n  display: flex;\n  align-items: start;\n  column-gap: 12px;\n}\n\n#project-input-name {\n  color: #047857;\n  font-weight: 600;\n  font-size: 1.5rem;\n  background-color: #ecfdf5;\n  border: 1px solid #ecfdf5;\n  border-radius: 2px;\n  width: 75%;\n  padding-left: 5px;\n  margin-left: -1px;\n}\n\n.add-project-btns {\n  display: flex;\n  justify-content: center;\n}\n\n.priority1-option {\n  background-color: #ecfdf5;\n  color: #ef4444;\n  text-align: center;\n  font-size: 1.1rem;\n  font-weight: 700;\n}\n.priority2-option {\n  background-color: #ecfdf5;\n  color: #f97316;\n  text-align: center;\n  font-size: 1.1rem;\n  font-weight: 700;\n}\n.priority3-option {\n  background-color: #ecfdf5;\n  color: #fbbf24;\n  text-align: center;\n  font-size: 1.1rem;\n  font-weight: 700;\n}\n.priority4-option {\n  background-color: #ecfdf5;\n}\n\n.form-btns {\n  display: flex;\n  column-gap: 8px;\n  align-items: center;\n  padding-left: 8px;\n}\n\ninput[type="checkbox"]:checked ~ div {\n  text-decoration: line-through;\n  text-decoration-color: #047857;\n}\n\ninput[type="option"] {\n  accent-color: #047857;\n}\n\ninput[type="checkbox"] {\n  background-color: #047857;\n}\n\n.footer-section {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 2.5rem;\n}\n\n.github-section {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  column-gap: 8px;\n  font-size: 1.2rem;\n  font-weight: 500;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n}\n\n.task-row:hover {\n  background-color: #d1fae5;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n}\n\n.add-task-btn:hover {\n  transition: all 0.2s;\n  transform-origin: 50% 50%;\n  transform: scale(1.05);\n}\n\n.tab:hover,\n.add-projects-button:hover,\n.delete-project-btn:hover,\n.delete-button:hover,\n.edit-button:hover,\n.submit-form-btn:hover,\n.cancel-form-btn:hover,\n.add-project-btn:hover,\n.cancel-project-btn:hover {\n  transition: all 0.4s;\n  transform-origin: 50% 50%;\n  transform: scale(1.2);\n}\n\n.tab:active,\n.add-projects-button:active,\n.delete-project-btn:active,\n.delete-button:active,\n.edit-button:active,\n.add-task-btn:active,\ninput[type="checkbox"]:checked ~ div,\ninput[type="checkbox"]:checked {\n  opacity: 0.5;\n}\n',""]);const d=a},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(a[c]=!0)}for(var s=0;s<t.length;s++){var l=[].concat(t[s]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var i={},a=[],d=0;d<t.length;d++){var c=t[d],s=r.base?c[0]+r.base:c[0],l=i[s]||0,u="".concat(s," ").concat(l);i[s]=l+1;var p=n(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=o(m,r);r.byIndex=d,e.splice(d,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var d=n(i[a]);e[d].references--}for(var c=r(t,o),s=0;s<i.length;s++){var l=n(i[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=c}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.nc=void 0,(()=>{function t(){return!!function(t){let e;try{e=window.localStorage;const t="__storage_test__";return e.setItem(t,t),e.removeItem(t),!0}catch(t){return t instanceof DOMException&&(22===t.code||1014===t.code||"QuotaExceededError"===t.name||"NS_ERROR_DOM_QUOTA_REACHED"===t.name)&&e&&0!==e.length}}()||(console.log("No local storage available"),!1)}function e(e,n){t()&&localStorage.setItem(e,JSON.stringify(n))}function r(t){return JSON.parse(localStorage.getItem(t||"[]"))}const o=[],i=[];function a(t){let e=Object.create(d);return e.title=t.title,e.description=t.description,e.dueDate=t.dueDate,e.priority=t.priority,e.projectId=t.projectId,e.completedTracker=t.completedTracker,e.taskId=t.taskId,e}const d={getTitle(){return this.title},getDescription(){return this.description},getDueDate(){return this.dueDate},getPriority(){return this.priority},getId(){return this.taskId},updateCompleteTask(){this.completedTracker[this.completedTracker.length-1]?this.completedTracker.push(!1):this.completedTracker.push(!0)},getCompleted(){return this.completedTracker[this.completedTracker.length-1]},getProjectId(){return this.projectId}};function c(){t()&&(localStorage.clear(),e("taskArray",o),e("projectArray",i))}function s(){if(!t())return;o.splice(0,o.length);const e=function(){if(null==r("taskArray"))return o;return r("taskArray").slice(0).map((t=>a(t)))}();if(o.push(...e),null==r("projectArray"))return;i.splice(0,i.length);const n=r("projectArray").slice(0);i.push(...n)}function l(){return s(),o}function u(){return l().sort(((t,e)=>new Date(t.getDueDate())-new Date(e.getDueDate())))}function p(t){let e=o.findIndex((e=>function(t,e){return t.getId()==e}(e,t)));return e}function m(){return s(),i}function f(t){return i.includes(t)}function h(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function g(t){h(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function b(t){h(1,arguments);var e=g(t);return e.setHours(0,0,0,0),e}function y(t,e){h(2,arguments);var n=b(t),r=b(e);return n.getTime()===r.getTime()}function v(t){return h(1,arguments),y(t,Date.now())}const x=function(){document.querySelector("#content");const t=document.querySelector(".sidebar");ut(),t.classList.add("today-page"),t.classList.add("current-tab"),function(){const t=document.createElement("div");t.classList.add("header-section");const e=document.createElement("div");e.classList.add("header-title"),e.textContent="Today";const n=(new Date).toLocaleDateString("en-us",{year:"numeric",month:"short",day:"numeric"}),r=document.createElement("div");r.classList.add("header-date"),r.textContent=n,t.appendChild(e),t.appendChild(r),content.appendChild(t)}();const e=function(){const t=u(),e=[];for(let n=0;n<t.length;n++)v(new Date(t[n].getDueDate()))&&e.push(t[n]);return e}();ot(e)};function k(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}var E={};function C(){return E}function w(t,e){var n,r,o,i,a,d,c,s;h(1,arguments);var l=C(),u=k(null!==(n=null!==(r=null!==(o=null!==(i=null==e?void 0:e.weekStartsOn)&&void 0!==i?i:null==e||null===(a=e.locale)||void 0===a||null===(d=a.options)||void 0===d?void 0:d.weekStartsOn)&&void 0!==o?o:l.weekStartsOn)&&void 0!==r?r:null===(c=l.locale)||void 0===c||null===(s=c.options)||void 0===s?void 0:s.weekStartsOn)&&void 0!==n?n:0);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var p=g(t),m=p.getDay(),f=(m<u?7:0)+m-u;return p.setDate(p.getDate()-f),p.setHours(0,0,0,0),p}function L(t,e,n){h(2,arguments);var r=w(t,n),o=w(e,n);return r.getTime()===o.getTime()}function j(t,e){return h(1,arguments),L(t,Date.now(),e)}const A=function(){document.querySelector("#content");const t=document.querySelector(".sidebar");ut(),t.classList.add("week-page"),t.classList.add("current-tab"),function(){const t=document.createElement("div");t.classList.add("header-section");const e=document.createElement("div");e.classList.add("header-title"),e.textContent="This Week";const n=(new Date).toLocaleDateString("en-us",{year:"numeric",month:"short",day:"numeric"}),r=document.createElement("div");r.classList.add("header-date"),r.textContent=n,t.appendChild(e),t.appendChild(r),content.appendChild(t)}();const e=function(){const t=u(),e=[];for(let n=0;n<t.length;n++)j(new Date(t[n].getDueDate()))&&e.push(t[n]);return e}();ot(e)};var S=n(379),D=n.n(S),I=n(795),T=n.n(I),q=n(569),N=n.n(q),z=n(565),M=n.n(z),_=n(216),O=n.n(_),B=n(589),P=n.n(B),R=n(890),H={};H.styleTagTransform=P(),H.setAttributes=M(),H.insert=N().bind(null,"head"),H.domAPI=T(),H.insertStyleElement=O(),D()(R.Z,H),R.Z&&R.Z.locals&&R.Z.locals;const Z=function(){const t=document.querySelector(".sidebar");ut(),t.classList.add("home-page"),t.classList.add("current-tab"),pt(),function(){const t=document.createElement("div");t.classList.add("header-section");const e=document.createElement("div");e.classList.add("header-title"),e.textContent="Home";const n=(new Date).toLocaleDateString("en-us",{year:"numeric",month:"short",day:"numeric"}),r=document.createElement("div");r.classList.add("header-date"),r.textContent=n,t.appendChild(e),t.appendChild(r),content.appendChild(t)}(),ot(),it(),at()},F=n.p+"4948b10606a53653c2df.svg",$=document.querySelector("#content"),J=document.querySelector(".projects-container");function U(){mt(J),function(){const t=m();for(let e=0;e<=t.length;e++){if(null==t[e])return;let n=document.createElement("div");n.classList.add("project-tab"),n.setAttribute("data-project",t[e]);let r=document.createElement("div");r.classList.add("project-tab-items"),r.classList.add("tab");let o=document.createElement("img");o.src="../src/styles/images/format-list-checkbox.svg";let i=document.createElement("div");i.textContent=t[e];let a=document.createElement("img");a.classList.add("delete-project-btn"),a.src="../src/styles/images/trash-can-outline.svg",r.appendChild(o),r.appendChild(i),n.appendChild(r),n.appendChild(a),J.appendChild(n)}}(),document.querySelectorAll("[data-project]").forEach((t=>{null!=t&&t.addEventListener("click",(()=>{let e=t.getAttribute("data-project");f(e)&&(W(),function(t){document.querySelector(".projects-tab-title").setAttribute("data-current-project",t)}(e),pt(),G(e))}))})),document.querySelectorAll(".delete-project-btn").forEach((t=>{null!=t&&t.addEventListener("click",(()=>{let e=t.parentNode.getAttribute("data-project");if(t.parentNode.remove(),function(t){for(let e=0;e<i.length;e++)i[e]===t&&i.splice(e,1);c(),s()}(e),function(t){let e=[!0];for(;e[e.length-1];)for(let n=0;n<o.length;n++){if(o[n].projectId===t){o.splice(n,1),e.push(!0);break}e.push(!1)}c(),s()}(e),!0===tt())return pt(),void x();if(1==et())return pt(),void A();if(1==nt()){let t=document.querySelector("[data-current-project]").getAttribute("data-current-project");return e===t?(pt(),void Z()):(pt(),void G(t))}pt(),Z()}))})),Q(),at()}function Q(){const t=document.querySelector(".add-project-btn");null!=t&&t.addEventListener("click",(()=>{const t=document.getElementById("project-input-name").value;var e;null!=t&&null!=t&&(f(t)?alert("Names taken bub"):(e=t,i.push(e),c()),U())}))}function G(t){pt(),function(t){const e=document.createElement("div");e.classList.add("header-section");const n=document.createElement("div");n.classList.add("header-title"),n.textContent=t;const r=(new Date).toLocaleDateString("en-us",{year:"numeric",month:"short",day:"numeric"}),o=document.createElement("div");o.classList.add("header-date"),o.textContent=r,e.appendChild(n),e.appendChild(o),$.appendChild(e)}(t);const e=function(t){return u().filter((e=>e.getProjectId()===t))}(t);ot(e),U(),it(),at()}function W(){let t=document.querySelector("[data-current-project]");null!=t&&t.removeAttribute("data-current-project")}function Y(){!function(){if(!0===V())return-1;const t=document.querySelector("#content"),e=document.createElement("div");e.setAttribute("id","form-section"),!0===X()&&e.classList.add("editing-form");const n=document.createElement("form");n.setAttribute("action",""),n.setAttribute("method","post"),n.setAttribute("id","new_task_form"),n.setAttribute("class","form-fields");const r=document.createElement("div");r.classList.add("form-items");const o=document.createElement("div");o.classList.add("form-field"),o.classList.add("priority-field");const i=document.createElement("label");i.setAttribute("for","priority");const a=document.createElement("select");a.setAttribute("id","priority");const d=document.createElement("option");d.setAttribute("value","1"),d.classList.add("priority1-option"),d.textContent="!!!";const c=document.createElement("option");c.setAttribute("value","2"),c.classList.add("priority2-option"),c.textContent="!!";const s=document.createElement("option");s.setAttribute("value","3"),s.classList.add("priority3-option"),s.textContent="!";const l=document.createElement("option");l.setAttribute("value",""),l.setAttribute("selected",""),l.classList.add("priority4-option"),l.textContent="",a.appendChild(d),a.appendChild(c),a.appendChild(s),a.appendChild(l),o.appendChild(i),o.appendChild(a),r.appendChild(o);const u=document.createElement("div");u.classList.add("form-field"),u.classList.add("title-field");const p=document.createElement("label");p.setAttribute("for","title");const m=document.createElement("input");m.setAttribute("type","text"),m.setAttribute("name","title"),m.setAttribute("id","title"),m.setAttribute("placeholder","Title"),u.appendChild(p),u.appendChild(m),r.appendChild(u);const f=document.createElement("div");f.classList.add("form-field"),f.classList.add("description-field");const h=document.createElement("label");h.setAttribute("for","description");const g=document.createElement("input");g.setAttribute("type","text"),g.setAttribute("name","description"),g.setAttribute("id","description"),g.setAttribute("placeholder","Description"),f.appendChild(h),f.appendChild(g),r.appendChild(f);const b=document.createElement("div");b.classList.add("form-field"),b.classList.add("due-date-field");const y=document.createElement("label");y.setAttribute("for","due-date");const v=document.createElement("input");v.setAttribute("type","date"),v.setAttribute("name","due-date"),v.setAttribute("id","due-date"),b.appendChild(y),b.appendChild(v),r.appendChild(b),n.append(r);const x=document.createElement("div");x.classList.add("form-btns");const k=document.createElement("img");k.classList.add("submit-form-btn"),k.setAttribute("type","button"),1==X()?k.src="../src/styles/images/pencil-plus-outline.svg":k.src="../src/styles/images/plus.svg",x.appendChild(k);const E=document.createElement("img");E.classList.add("cancel-form-btn"),E.setAttribute("type","button"),E.src="../src/styles/images/window-close.svg",x.appendChild(E),n.appendChild(x),e.appendChild(n),t.appendChild(e)}(),document.querySelector(".submit-form-btn").addEventListener("click",(()=>{let t="";if(!0===X()){let n=document.querySelector(".editing-task"),r=p(n.getAttribute("data-task-id")),o=l()[r];void 0!==o.getProjectId()&&(t+=o.getProjectId(),e()),lt(n)}if(1!=nt()){if(!0===V()&&K(),!0===tt())return pt(),void x();if(1==et())return pt(),void A();pt(),Z()}else{let n=document.querySelector("[data-current-project]");if(""==t){let e=n.getAttribute("data-current-project");t+=e}e()}function e(){K(t),pt(),G(t)}})),function(){const t=document.querySelector(".cancel-form-btn");null!=t&&t.addEventListener("click",(()=>{const t=document.getElementById("form-section");null!=t&&(t.remove(),it(),at())}))}()}function K(t){if(!document.getElementById("title"))return;const e=document.getElementById("title").value,n=document.getElementById("description").value,r=document.getElementById("due-date").value,i=document.getElementById("priority"),d=i.options[i.selectedIndex].text;let s="";"!!!"===d&&(s+="1"),"!!"===d&&(s+="2"),"!"===d&&(s+="3"),console.log(s),function(t,e,n,r,i){let d=n.replace(/-/g,"/"),s=new Date(d).toLocaleDateString("en-us",{year:"numeric",month:"short",day:"numeric"});"Invalid Date"===s&&(s="");let l=("Task"+t.replace(/ /g,"_")+function(){let t=Math.ceil(0),e=Math.floor(1e4);return Math.floor(Math.random()*(e-t+1)+t)}()).replace(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g,"");o.push(a(function(t,e,n,r,o,i,a){return{title:t,description:e,dueDate:n,priority:r,projectId:o,taskId:i,completedTracker:[!1]}}(t,e,s,r,i,l))),c()}(e,n,r,s,t)}function V(){return!!document.getElementById("form-section")}function X(){return!!document.querySelector(".editing-task")}function tt(){return!!document.querySelector(".today-page")}function et(){return!!document.querySelector(".week-page")}function nt(){return!!document.querySelector("[data-current-project]")}function rt(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}function ot(t){const e=document.querySelector("#content");void 0===t&&(t=u());const n=[];let r=document.createElement("div");r.setAttribute("id","tasks-container");let o=document.createElement("div");o.setAttribute("class","priority1-tasks");let i=document.createElement("div");i.classList.add("priority-title"),o.appendChild(i);let a=document.createElement("div");a.setAttribute("class","priority2-tasks");let d=document.createElement("div");d.classList.add("priority-title"),a.appendChild(d);let m=document.createElement("div");m.setAttribute("class","priority3-tasks");let f=document.createElement("div");f.classList.add("priority-title"),m.appendChild(f);let b=document.createElement("div");b.setAttribute("class","priority4-tasks");let y=document.createElement("div");y.classList.add("priority-title"),b.appendChild(y);for(let e=0;e<t.length;e++){n[e]=document.createElement("div"),n[e].classList.add("task-row"),n[e].setAttribute("data-task-id",t[e].getId());let r=document.createElement("div");r.classList.add("task-items");let i=document.createElement("div");i.classList.add("revision-items");let d=ct(),c=st(),s=document.createElement("div");s.classList.add("task-title"),s.textContent=t[e].getTitle();let l=document.createElement("div");l.classList.add("task-description"),l.textContent=t[e].getDescription();let u=document.createElement("div");u.classList.add("task-due-date"),u.textContent=t[e].getDueDate();let p=document.createElement("input");p.setAttribute("type","checkbox"),p.classList.add("completed-checkbox"),1==t[e].getCompleted()&&p.setAttribute("checked",""),r.appendChild(p),r.appendChild(s),r.appendChild(l),r.appendChild(u),i.appendChild(d),i.appendChild(c),n[e].appendChild(r),n[e].appendChild(i);let f=t[e].getPriority();"1"===f&&o.appendChild(n[e]),"2"===f&&a.appendChild(n[e]),"3"===f&&m.appendChild(n[e]),""===f&&b.appendChild(n[e])}let v=document.createElement("div");v.classList.add("priority-container"),v.appendChild(i),v.appendChild(o);let x=document.createElement("div");x.classList.add("priority-container"),x.appendChild(d),x.appendChild(a);let k=document.createElement("div");k.classList.add("priority-container"),k.appendChild(f),k.appendChild(m);let E=document.createElement("div");E.classList.add("priority-container"),E.appendChild(y),E.appendChild(b),r.appendChild(v),r.appendChild(x),r.appendChild(k),r.appendChild(E),e.appendChild(r),document.querySelectorAll(".edit-button").forEach((t=>{t.addEventListener("click",(()=>{t.parentNode.parentNode.classList.add("editing-task"),Y(),dt(),function(t){let e=p(t.getAttribute("data-task-id")),n=l()[e];document.getElementById("title").value=n.getTitle(),document.getElementById("description").value=n.getDescription(),document.getElementById("priority").value=n.getPriority(),""!==n.getDueDate()&&(document.getElementById("due-date").value=function(t,e){var n,r;h(1,arguments);var o=g(t);if(isNaN(o.getTime()))throw new RangeError("Invalid time value");var i=String(null!==(n=null==e?void 0:e.format)&&void 0!==n?n:"extended"),a=String(null!==(r=null==e?void 0:e.representation)&&void 0!==r?r:"complete");if("extended"!==i&&"basic"!==i)throw new RangeError("format must be 'extended' or 'basic'");if("date"!==a&&"time"!==a&&"complete"!==a)throw new RangeError("representation must be 'date', 'time', or 'complete'");var d="",c="",s="extended"===i?"-":"",l="extended"===i?":":"";if("time"!==a){var u=rt(o.getDate(),2),p=rt(o.getMonth()+1,2),m=rt(o.getFullYear(),4);d="".concat(m).concat(s).concat(p).concat(s).concat(u)}if("date"!==a){var f=o.getTimezoneOffset();if(0!==f){var b=Math.abs(f),y=rt(Math.floor(b/60),2),v=rt(b%60,2);c="".concat(f<0?"+":"-").concat(y,":").concat(v)}else c="Z";var x=""===d?"":"T",k=[rt(o.getHours(),2),rt(o.getMinutes(),2),rt(o.getSeconds(),2)].join(l);d="".concat(d).concat(x).concat(k).concat(c)}return d}(new Date(n.getDueDate()),{representation:"date"}))}(t.parentNode.parentNode)}))})),document.querySelectorAll(".delete-button").forEach((t=>{t.addEventListener("click",(()=>{lt(t.parentNode.parentNode),ft()}))})),ft(),document.querySelectorAll(".completed-checkbox").forEach((t=>{t.addEventListener("click",(()=>{!function(t){let e=p(t.getAttribute("data-task-id")),n=l()[e];!0===n.getCompleted()?n.completedTracker.push(!1):n.completedTracker.push(!0),c(),s()}(t.parentNode.parentNode)}))}))}function it(){const t=document.createElement("img");t.src="../src/styles/images/plus-svgrepo-com.svg";const e=document.createElement("div");e.textContent="Add Task";const n=document.createElement("div");n.classList.add("add-task-btn"),n.appendChild(t),n.appendChild(e),content.appendChild(n)}function at(){const t=document.querySelector(".add-task-btn");null!=t&&t.addEventListener("click",(()=>{Y(),dt()}))}function dt(){const t=document.querySelector(".add-task-btn");null!==t&&t.remove()}function ct(){const t=document.createElement("img");return t.classList.add("edit-button"),t.src="../src/styles/images/pencil-outline.svg",t}function st(){const t=document.createElement("img");return t.classList.add("delete-button"),t.src="../src/styles/images/trash-can-outline-smaller.svg",t}function lt(t){let e=t.getAttribute("data-task-id");!function(t){let e=p(t);o.splice(e,1),c()}(e),document.querySelector("[data-task-id="+e+"]").remove()}function ut(){const t=document.querySelector(".sidebar");t.removeAttribute("class"),t.classList.add("sidebar")}function pt(){mt(document.querySelector("#content"))}function mt(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function ft(){const t=document.querySelector(".priority1-tasks"),e=document.querySelector(".priority2-tasks"),n=document.querySelector(".priority3-tasks"),r=document.querySelector(".priority4-tasks");ht(t),ht(e),ht(n),ht(r)}function ht(t){null!=t&&(t.hasChildNodes()||t.parentNode.remove())}function gt(){const t=document.createElement("div");t.classList.add("github-section");const e=document.createElement("div");e.classList.add("github-name"),e.textContent="Copyright © 2022 NateTewolde",t.appendChild(e);const n=document.createElement("a");n.setAttribute("href","https://github.com/NateTewolde");const r=document.createElement("img");r.src="../src/styles/images/github-svgrepo-com.svg",n.appendChild(r),t.appendChild(n),content.appendChild(t)}Z(),document.querySelectorAll("[data-tab-id]").forEach((t=>{t.addEventListener("click",(()=>{W();let e=t.getAttribute("data-tab-id");"3"!==e?(pt(),"0"===e&&Z(),"1"===e&&(x(),gt()),"2"===e&&(A(),gt())):function(){const t=document.querySelector(".sidebar");ut(),t.classList.add("projects-page"),U(),function(){document.createElement("div").setAttribute("id","project-form-section");const t=document.createElement("form");t.setAttribute("action",""),t.setAttribute("method","post"),t.setAttribute("id","new_project_form");const e=document.createElement("div");e.classList.add("project-form-items");let n=document.createElement("img");n.src="../src/styles/images/format-list-checkbox.svg",e.appendChild(n);const r=document.createElement("div");r.classList.add("form-field"),r.classList.add("project-name-field");const o=document.createElement("input");o.setAttribute("type","text"),o.setAttribute("name","project-input-name"),o.setAttribute("id","project-input-name"),o.setAttribute("placeholder","Project"),r.appendChild(o),e.appendChild(r),t.appendChild(e);const i=document.createElement("div");i.classList.add("add-project-btns");const a=document.createElement("img");a.classList.add("add-project-btn"),a.setAttribute("type","button"),a.src=F,i.appendChild(a);const d=document.createElement("img");d.classList.add("cancel-project-btn"),d.setAttribute("type","button"),d.src="../src/styles/images/cancel-proj.svg",i.appendChild(d),t.appendChild(i),J.appendChild(t)}(),Q(),function(){const t=document.querySelector(".cancel-project-btn");null!=t&&t.addEventListener("click",(()=>{document.getElementById("new_project_form").remove()}))}()}()}))})),U()})()})();