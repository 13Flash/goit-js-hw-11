import{a as m,S as d,i as l}from"./assets/vendor-C1DvvBV_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const y="57472707-17e182664421486153c4f2c9e",g="https://pixabay.com/api/";async function h(a){return(await m.get(g,{params:{key:y,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}const n=document.querySelector(".gallery"),c=document.querySelector(".loader"),L=new d(".gallery a",{captionsData:"alt",captionDelay:250});function b(a){const t=a.map(({webformatURL:s,largeImageURL:i,tags:e,likes:r,views:o,comments:f,downloads:p})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${i}">
            <img
              class="gallery-image"
              src="${s}"
              alt="${e}"
              loading="lazy"
            />
          </a>
          <ul class="info">
            <li class="info-item">
              <p class="info-label">Likes</p>
              <p class="info-value">${r}</p>
            </li>
            <li class="info-item">
              <p class="info-label">Views</p>
              <p class="info-value">${o}</p>
            </li>
            <li class="info-item">
              <p class="info-label">Comments</p>
              <p class="info-value">${f}</p>
            </li>
            <li class="info-item">
              <p class="info-label">Downloads</p>
              <p class="info-value">${p}</p>
            </li>
          </ul>
        </li>
      `).join("");n.insertAdjacentHTML("beforeend",t),L.refresh()}function v(){n.innerHTML=""}function S(){c.classList.add("is-visible")}function w(){c.classList.remove("is-visible")}const u=document.querySelector(".form");u.addEventListener("submit",q);async function q(a){a.preventDefault();const t=a.currentTarget.elements["search-text"].value.trim();if(t){v(),S();try{const s=await h(t);if(s.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}b(s),u.reset()}catch(s){l.error({message:"Something went wrong. Please try again later."}),console.error(s)}finally{w()}}}
//# sourceMappingURL=index.js.map
