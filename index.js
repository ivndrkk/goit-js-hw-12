import{S as h,i as l,a as y}from"./assets/vendor-D73Uttp0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function b(i,o=1,r=15){return`https://pixabay.com/api/?key=47095824-8bdea46d531b71ca6f863e2d0&q=${encodeURIComponent(i)}&image_type=photo&orientation=horizontal&safesearch=true&page=${o}&per_page=${r}`}let u=null;function C(i,o=!0){const r=document.querySelector(".gallery-container");o&&(r.innerHTML="");const n=i.slice(0,15),e=document.createDocumentFragment();n.forEach(t=>{const s=document.createElement("li");s.classList.add("image-item"),s.innerHTML=`
            <a href="${t.largeImageURL}" class="gallery-link">
                <img src="${t.webformatURL}" alt="${t.tags}" class="image-view" >
            </a>
            <div class="image-info-container">
                <ul class="image-info-list">
                <li class="image-info-item">
                    <h2>Likes</h2>
                    <p>${t.likes}</p>
                </li>
                <li class="image-info-item">
                    <h2>Views</h2>
                    <p>${t.views}</p>
                </li>
                <li class="image-info-item">
                    <h2>Comments</h2>
                    <p>${t.comments}</p>
                </li>
                <li class="image-info-item">
                    <h2>Downloads</h2>
                    <p>${t.downloads}</p>
                </li>
                </ul>
            </div>
            `,e.appendChild(s)}),r.appendChild(e),u?u.refresh():u=new h(".gallery-container a",{captions:!0,captionsData:"alt",captionDelay:2e3})}const L=document.querySelector("#searchInput"),w=document.querySelector(".input-form"),m=document.querySelector(".loader"),d=document.querySelector(".gallery-container"),a=document.querySelector(".load-more-btn");let c=1;const g=15;let f="";async function p(i,o=1){m.style.display="block";try{const r=b(i,o,g),{data:n}=await y.get(r);if(n.hits.length===0&&o===1)d.innerHTML="",l.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#FF6347",messageColor:"#fafafb"}),a.style.display="none";else{if(C(n.hits,o===1),o>1){const e=document.querySelectorAll(".image-item");if(e.length>0){const t=e[0].getBoundingClientRect().height;window.scrollBy({top:2*t,behavior:"smooth"})}}n.hits.length+o*g>=n.totalHits?(a.style.display="none",l.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#BDC3C7",messageColor:"#00000"})):a.style.display="block"}}catch(r){console.error("Error fetching images:",r),l.show({message:"An error occurred while fetching images. Please try again later.",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fafafb"})}finally{m.style.display="none"}}function v(i){i.preventDefault();const o=L.value.trim();return o?(f=o,c=1,d.innerHTML="",a.style.display="none",p(f,c),!0):(d.innerHTML="",l.show({message:"Field cannot be empty",position:"topRight",backgroundColor:"#FF8C00",messageColor:"#fafafb"}),a.style.display="none",!1)}function I(){c+=1,p(f,c)}w.addEventListener("submit",v);a.addEventListener("click",I);
//# sourceMappingURL=index.js.map
