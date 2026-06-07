import{a as f,S as m,i as c}from"./assets/vendor-BezXTN6Z.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const d="56116338-e065c09dde8a76b57de900d0e";function h(i){const t={key:d,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return f.get("https://pixabay.com/api/",{params:t}).then(o=>o.data)}const l=document.querySelector(".gallery"),n=document.querySelector(".loader"),g=new m(".gallery a",{captionsData:"alt",captionDelay:250});function y(i){const t=i.map(({webformatURL:o,largeImageURL:s,tags:e,likes:r,views:a,comments:u,downloads:p})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${s}">
        <img class="gallery-image" src="${o}" alt="${e}" />
      </a>
      <div class="info">
        <p class="info-item"><b>Likes</b><span>${r}</span></p>
        <p class="info-item"><b>Views</b><span>${a}</span></p>
        <p class="info-item"><b>Comments</b><span>${u}</span></p>
        <p class="info-item"><b>Downloads</b><span>${p}</span></p>
      </div>
    </li>
  `).join("");l.innerHTML=t,g.refresh()}function b(){l.innerHTML=""}function L(){n&&n.classList.add("is-active")}function v(){n&&n.classList.remove("is-active")}const P=document.querySelector(".form");P.addEventListener("submit",S);function S(i){i.preventDefault();const t=i.currentTarget,o=t.elements["search-text"].value.trim();if(o===""){c.warning({title:"Warning",message:"Please enter a search phrase!",position:"topRight"});return}b(),L(),h(o).then(s=>{if(s.hits.length===0){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(s.hits)}).catch(s=>{c.error({title:"Error",message:`An error occurred: ${s.message}`,position:"topRight"})}).finally(()=>{v(),t.reset()})}
//# sourceMappingURL=index.js.map
