"use strict";document.addEventListener("DOMContentLoaded",()=>{const e=new Swiper(".slider-img",{loop:!1,speed:3400,parallax:!0,mousewheel:{invert:!1},pagination:{el:".slider-pagination-count .total",type:"custom",renderCustom:function(e,o,t){return t>=10?t:"0"+t}}}),o=new Swiper(".slider-text",{loop:!1,speed:3400,mousewheel:{invert:!1},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar",draggable:!0}});e.controller.control=o,o.controller.control=e;const t=document.querySelector(".slider-gear");o.on("slideNextTransitionStart",(function(){gsap.to(t,2.8,{rotation:"+=30"})})),o.on("slidePrevTransitionStart",(function(){gsap.to(t,2.8,{rotation:"-=30"})}));const a=document.querySelector(".slider-pagination-count .current"),l=document.querySelector(".slider-pagination-current__num");o.on("slideChange",(function(){let e=o.realIndex+1,t=e>=10?e:"0"+e;gsap.to(a,.2,{force3D:!0,y:-10,opacity:0,onComplete:function(){gsap.to(a,.1,{force3D:!0,y:10}),a.innerHTML=t,l.innerHTML=t}}),gsap.to(a,.2,{force3D:!0,y:0,opacity:1,delay:.3})}))});let unlock=!0;const wrapperMenu=document.querySelector(".header-menu__wrapper");let iconMenu=document.querySelector(".header-menu__icon"),body=document.querySelector("body");if(null!=wrapperMenu){wrapperMenu.addEventListener("click",(function(e){unlock&&(body.classList.add("_lock"),iconMenu.classList.toggle("_active"))}))}function canUseWebp(){let e=document.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))&&0==e.toDataURL("image/webp").indexOf("data:image/webp")}canUseWebp?body.classList.add("webp"):body.classList.add("no-swebp");const btns=document.querySelectorAll(".modal-open"),modalOverlay=document.querySelector(".modal-overlay"),modalClose=document.querySelector(".modal__header .btn-close"),modals=document.querySelectorAll(".modal");btns.forEach(e=>{e.addEventListener("click",e=>{let o=e.currentTarget.getAttribute("data-modal-path");modals.forEach(e=>{e.classList.remove("modal--visible")}),body.classList.remove("_lock");document.querySelector(`[data-modal-target="${o}"]`).classList.add("modal--visible"),modalOverlay.classList.add("modal-overlay--visible"),body.classList.add("_lock")})}),modalOverlay.addEventListener("click",e=>{e.target!=modalOverlay&&e.target!=modalClose||(modalOverlay.classList.remove("modal-overlay--visible"),modals.forEach(e=>{e.classList.remove("modal--visible")}),body.classList.remove("_lock"))});