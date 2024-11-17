import{S as h,i as c,a as y}from"./assets/vendor-D73Uttp0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(t){if(t.ep)return;t.ep=!0;const e=r(t);fetch(t.href,e)}})();function b(s,o=1,r=15){return`https://pixabay.com/api/?key=47095824-8bdea46d531b71ca6f863e2d0&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true&page=${o}&per_page=${r}`}let u=null;function C(s,o=!0){const r=document.querySelector(".gallery-container");o&&(r.innerHTML="");const n=s.slice(0,50),t=document.createDocumentFragment();n.forEach(e=>{const i=document.createElement("li");i.classList.add("image-item"),i.innerHTML=`
            <a href="${e.largeImageURL}" class="gallery-link">
                <img src="${e.webformatURL}" alt="${e.tags}" class="image-view" >
            </a>
            <div class="image-info-container">
                <ul class="image-info-list">
                <li class="image-info-item">
                    <h2>Likes</h2>
                    <p>${e.likes}</p>
                </li>
                <li class="image-info-item">
                    <h2>Views</h2>
                    <p>${e.views}</p>
                </li>
                <li class="image-info-item">
                    <h2>Comments</h2>
                    <p>${e.comments}</p>
                </li>
                <li class="image-info-item">
                    <h2>Downloads</h2>
                    <p>${e.downloads}</p>
                </li>
                </ul>
            </div>
            `,t.appendChild(i)}),r.appendChild(t),u?u.refresh():u=new h(".gallery-container a",{captions:!0,captionsData:"alt",captionDelay:2e3})}const L=document.querySelector("#searchInput"),w=document.querySelector(".input-form"),m=document.querySelector(".loader"),d=document.querySelector(".gallery-container"),a=document.querySelector(".load-more-btn");let l=1;const g=50;let f="";async function p(s,o=1){m.style.display="block";try{const r=b(s,o,g),{data:n}=await y.get(r);if(n.hits.length===0&&o===1)d.innerHTML="",c.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#FF6347",messageColor:"#fafafb"}),a.style.display="none";else{C(n.hits,o===1);const t=Math.ceil(n.totalHits/g);if(o>1){const e=document.querySelectorAll(".image-item");if(e.length>0){const i=e[0].getBoundingClientRect().height;window.scrollBy({top:2*i,behavior:"smooth"})}}l>t?(a.style.display="none",c.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#BDC3C7",messageColor:"#00000"})):a.style.display="block"}}catch(r){console.error("Error fetching images:",r),c.show({message:"An error occurred while fetching images. Please try again later.",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fafafb"})}finally{m.style.display="none"}}function v(s){s.preventDefault();const o=L.value.trim();return o?(f=o,l=1,d.innerHTML="",a.style.display="none",p(f,l),!0):(d.innerHTML="",c.show({message:"Field cannot be empty",position:"topRight",backgroundColor:"#FF8C00",messageColor:"#fafafb"}),a.style.display="none",!1)}function I(){l+=1,p(f,l)}w.addEventListener("submit",v);a.addEventListener("click",I);
//# sourceMappingURL=index.js.map
