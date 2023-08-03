import{d as G,o as k,c as T,F as ve,N as he,z as x,t as W,C as ze,_ as ye,x as be,p as K,w as Ee,Z as we,M as Z,a4 as _e,a5 as Le,a6 as He,a7 as Ce,a8 as Ae,a9 as Oe,aa as Se,ab as ke,ac as Te,ad as xe,J as Ne,u as Pe,k as Ie,ae as Re,af as je,ag as Me,ah as Be}from"./chunks/framework.d95bcf44.js";import{t as Fe}from"./chunks/theme.843500fc.js";import{H as De}from"./chunks/HomePage.9d8913af.js";const Ze={class:"link-content"},qe=["href","aria-controls"],Ue={class:"img"},Ve=["src","alt"],Ye={class:"info"},We={class:"title"},$e={key:0,class:"desc"},Xe=G({__name:"Hyperlinks",props:{links:{}},setup(o){return(t,a)=>(k(),T("div",Ze,[(k(!0),T(ve,null,he(t.links,r=>(k(),T("a",{class:"my-link",rel:"noreferrer",target:"_blank",key:r.title,href:r.link,"aria-controls":r.info||r.title},[x("span",Ue,[x("img",{src:r.icon||"/public/empty.png",alt:r.name},null,8,Ve)]),x("span",Ye,[x("span",We,W(r.title),1),r.info?(k(),T("div",$e,W(r.info),1)):ze("",!0)])],8,qe))),128))]))}});const Ge=ye(Xe,[["__scopeId","data-v-af1f280c"]]);/*! medium-zoom 1.0.8 | MIT License | https://github.com/francoischalifour/medium-zoom */var b=Object.assign||function(o){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(o[r]=a[r])}return o},N=function(t){return t.tagName==="IMG"},Ke=function(t){return NodeList.prototype.isPrototypeOf(t)},P=function(t){return t&&t.nodeType===1},$=function(t){var a=t.currentSrc||t.src;return a.substr(-4).toLowerCase()===".svg"},X=function(t){try{return Array.isArray(t)?t.filter(N):Ke(t)?[].slice.call(t).filter(N):P(t)?[t].filter(N):typeof t=="string"?[].slice.call(document.querySelectorAll(t)).filter(N):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},Je=function(t){var a=document.createElement("div");return a.classList.add("medium-zoom-overlay"),a.style.background=t,a},Qe=function(t){var a=t.getBoundingClientRect(),r=a.top,u=a.left,I=a.width,R=a.height,h=t.cloneNode(),j=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,C=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return h.removeAttribute("id"),h.style.position="absolute",h.style.top=r+j+"px",h.style.left=u+C+"px",h.style.width=I+"px",h.style.height=R+"px",h.style.transform="",h},_=function(t,a){var r=b({bubbles:!1,cancelable:!1,detail:void 0},a);if(typeof window.CustomEvent=="function")return new CustomEvent(t,r);var u=document.createEvent("CustomEvent");return u.initCustomEvent(t,r.bubbles,r.cancelable,r.detail),u},et=function o(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=window.Promise||function(n){function i(){}n(i,i)},u=function(n){var i=n.target;if(i===O){z();return}g.indexOf(i)!==-1&&U({target:i})},I=function(){if(!(E||!e.original)){var n=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(V-n)>s.scrollOffset&&setTimeout(z,150)}},R=function(n){var i=n.key||n.keyCode;(i==="Escape"||i==="Esc"||i===27)&&z()},h=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=n;if(n.background&&(O.style.background=n.background),n.container&&n.container instanceof Object&&(i.container=b({},s.container,n.container)),n.template){var m=P(n.template)?n.template:document.querySelector(n.template);i.template=m}return s=b({},s,i),g.forEach(function(l){l.dispatchEvent(_("medium-zoom:update",{detail:{zoom:c}}))}),c},j=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return o(b({},s,n))},C=function(){for(var n=arguments.length,i=Array(n),m=0;m<n;m++)i[m]=arguments[m];var l=i.reduce(function(d,f){return[].concat(d,X(f))},[]);return l.filter(function(d){return g.indexOf(d)===-1}).forEach(function(d){g.push(d),d.classList.add("medium-zoom-image")}),A.forEach(function(d){var f=d.type,v=d.listener,w=d.options;l.forEach(function(y){y.addEventListener(f,v,w)})}),c},Q=function(){for(var n=arguments.length,i=Array(n),m=0;m<n;m++)i[m]=arguments[m];e.zoomed&&z();var l=i.length>0?i.reduce(function(d,f){return[].concat(d,X(f))},[]):g;return l.forEach(function(d){d.classList.remove("medium-zoom-image"),d.dispatchEvent(_("medium-zoom:detach",{detail:{zoom:c}}))}),g=g.filter(function(d){return l.indexOf(d)===-1}),c},ee=function(n,i){var m=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return g.forEach(function(l){l.addEventListener("medium-zoom:"+n,i,m)}),A.push({type:"medium-zoom:"+n,listener:i,options:m}),c},te=function(n,i){var m=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return g.forEach(function(l){l.removeEventListener("medium-zoom:"+n,i,m)}),A=A.filter(function(l){return!(l.type==="medium-zoom:"+n&&l.listener.toString()===i.toString())}),c},q=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=n.target,m=function(){var d={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},f=void 0,v=void 0;if(s.container)if(s.container instanceof Object)d=b({},d,s.container),f=d.width-d.left-d.right-s.margin*2,v=d.height-d.top-d.bottom-s.margin*2;else{var w=P(s.container)?s.container:document.querySelector(s.container),y=w.getBoundingClientRect(),M=y.width,re=y.height,ie=y.left,de=y.top;d=b({},d,{width:M,height:re,left:ie,top:de})}f=f||d.width-s.margin*2,v=v||d.height-s.margin*2;var H=e.zoomedHd||e.original,se=$(H)?f:H.naturalWidth||f,me=$(H)?v:H.naturalHeight||v,S=H.getBoundingClientRect(),le=S.top,ce=S.left,B=S.width,F=S.height,ue=Math.min(Math.max(B,se),f)/B,pe=Math.min(Math.max(F,me),v)/F,D=Math.min(ue,pe),fe=(-ce+(f-B)/2+s.margin+d.left)/D,ge=(-le+(v-F)/2+s.margin+d.top)/D,Y="scale("+D+") translate3d("+fe+"px, "+ge+"px, 0)";e.zoomed.style.transform=Y,e.zoomedHd&&(e.zoomedHd.style.transform=Y)};return new r(function(l){if(i&&g.indexOf(i)===-1){l(c);return}var d=function M(){E=!1,e.zoomed.removeEventListener("transitionend",M),e.original.dispatchEvent(_("medium-zoom:opened",{detail:{zoom:c}})),l(c)};if(e.zoomed){l(c);return}if(i)e.original=i;else if(g.length>0){var f=g;e.original=f[0]}else{l(c);return}if(e.original.dispatchEvent(_("medium-zoom:open",{detail:{zoom:c}})),V=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,E=!0,e.zoomed=Qe(e.original),document.body.appendChild(O),s.template){var v=P(s.template)?s.template:document.querySelector(s.template);e.template=document.createElement("div"),e.template.appendChild(v.content.cloneNode(!0)),document.body.appendChild(e.template)}if(e.original.parentElement&&e.original.parentElement.tagName==="PICTURE"&&e.original.currentSrc&&(e.zoomed.src=e.original.currentSrc),document.body.appendChild(e.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),e.original.classList.add("medium-zoom-image--hidden"),e.zoomed.classList.add("medium-zoom-image--opened"),e.zoomed.addEventListener("click",z),e.zoomed.addEventListener("transitionend",d),e.original.getAttribute("data-zoom-src")){e.zoomedHd=e.zoomed.cloneNode(),e.zoomedHd.removeAttribute("srcset"),e.zoomedHd.removeAttribute("sizes"),e.zoomedHd.removeAttribute("loading"),e.zoomedHd.src=e.zoomed.getAttribute("data-zoom-src"),e.zoomedHd.onerror=function(){clearInterval(w),console.warn("Unable to reach the zoom image target "+e.zoomedHd.src),e.zoomedHd=null,m()};var w=setInterval(function(){e.zoomedHd.complete&&(clearInterval(w),e.zoomedHd.classList.add("medium-zoom-image--opened"),e.zoomedHd.addEventListener("click",z),document.body.appendChild(e.zoomedHd),m())},10)}else if(e.original.hasAttribute("srcset")){e.zoomedHd=e.zoomed.cloneNode(),e.zoomedHd.removeAttribute("sizes"),e.zoomedHd.removeAttribute("loading");var y=e.zoomedHd.addEventListener("load",function(){e.zoomedHd.removeEventListener("load",y),e.zoomedHd.classList.add("medium-zoom-image--opened"),e.zoomedHd.addEventListener("click",z),document.body.appendChild(e.zoomedHd),m()})}else m()})},z=function(){return new r(function(n){if(E||!e.original){n(c);return}var i=function m(){e.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(e.zoomed),e.zoomedHd&&document.body.removeChild(e.zoomedHd),document.body.removeChild(O),e.zoomed.classList.remove("medium-zoom-image--opened"),e.template&&document.body.removeChild(e.template),E=!1,e.zoomed.removeEventListener("transitionend",m),e.original.dispatchEvent(_("medium-zoom:closed",{detail:{zoom:c}})),e.original=null,e.zoomed=null,e.zoomedHd=null,e.template=null,n(c)};E=!0,document.body.classList.remove("medium-zoom--opened"),e.zoomed.style.transform="",e.zoomedHd&&(e.zoomedHd.style.transform=""),e.template&&(e.template.style.transition="opacity 150ms",e.template.style.opacity=0),e.original.dispatchEvent(_("medium-zoom:close",{detail:{zoom:c}})),e.zoomed.addEventListener("transitionend",i)})},U=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=n.target;return e.original?z():q({target:i})},oe=function(){return s},ne=function(){return g},ae=function(){return e.original},g=[],A=[],E=!1,V=0,s=a,e={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(t)==="[object Object]"?s=t:(t||typeof t=="string")&&C(t),s=b({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},s);var O=Je(s.background);document.addEventListener("click",u),document.addEventListener("keyup",R),document.addEventListener("scroll",I),window.addEventListener("resize",z);var c={open:q,close:z,toggle:U,update:h,clone:j,attach:C,detach:Q,on:ee,off:te,getOptions:oe,getImages:ne,getZoomedImage:ae};return c};function tt(o,t){t===void 0&&(t={});var a=t.insertAt;if(!(!o||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],u=document.createElement("style");u.type="text/css",a==="top"&&r.firstChild?r.insertBefore(u,r.firstChild):r.appendChild(u),u.styleSheet?u.styleSheet.cssText=o:u.appendChild(document.createTextNode(o))}}var ot=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";tt(ot);const nt=et;const at={...Fe,enhanceApp({app:o}){o.component("HomePage",De),o.component("Hyperlinks",Ge)},setup(){const o=be(),t=()=>{nt(".main img",{background:"var(--vp-c-bg)"})};K(()=>{let a=document.documentElement;const r=()=>{a.classList.contains("dark")?a.classList.remove("light"):a.classList.add("light")};r();const u=new MutationObserver(()=>{r(),u.takeRecords()});u.observe(a,{attributes:!0,childList:!1,subtree:!1}),t()}),Ee(()=>o.path,()=>we(()=>t()))}};function J(o){if(o.extends){const t=J(o.extends);return{...t,...o,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),o.enhanceApp&&await o.enhanceApp(a)}}}return o}const L=J(at),rt=G({name:"VitePressApp",setup(){const{site:o}=Pe();return K(()=>{Ie(()=>{document.documentElement.lang=o.value.lang,document.documentElement.dir=o.value.dir})}),Re(),je(),Me(),L.setup&&L.setup(),()=>Be(L.Layout)}});async function it(){const o=st(),t=dt();t.provide(Le,o);const a=He(o.route);return t.provide(Ce,a),t.component("Content",Ae),t.component("ClientOnly",Oe),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),L.enhanceApp&&await L.enhanceApp({app:t,router:o,siteData:Se}),{app:t,router:o,data:a}}function dt(){return ke(rt)}function st(){let o=Z,t;return Te(a=>{let r=xe(a);return o&&(t=r),(o||t===r)&&(r=r.replace(/\.js$/,".lean.js")),Z&&(o=!1),Ne(()=>import(r),[])},L.NotFound)}Z&&it().then(({app:o,router:t,data:a})=>{t.go().then(()=>{_e(t.route,a.site),o.mount("#app")})});export{it as createApp};
