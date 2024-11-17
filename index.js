import{S as m,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();let u="";function p(i){u=i}function d(){return`https://pixabay.com/api/?key=47095824-8bdea46d531b71ca6f863e2d0&q=${encodeURIComponent(u)}&image_type=photo&orientation=horizontal&safesearch=true`}let a=null;function g(i){const t=document.querySelector(".gallery-container");t.innerHTML="",i.slice(0,9).forEach(n=>{const e=document.createElement("li");e.classList.add("image-item"),e.innerHTML=`
            <a href="${n.largeImageURL}" class="gallery-link">
                <img src="${n.webformatURL}" alt="${n.tags}" class="image-view" >
            </a>
            <div class="image-info-container">
                <ul class="image-info-list">
                    <li class="image-info-item">
                        <h2>Likes</h2>
                        <p>${n.likes}</p>
                    </li>
                    <li class="image-info-item">
                        <h2>Views</h2>
                        <p>${n.views}</p>
                    </li>
                    <li class="image-info-item">
                        <h2>Comments</h2>
                        <p>${n.comments}</p>
                    </li>
                    <li class="image-info-item">
                        <h2>Downloads</h2>
                        <p>${n.downloads}</p>
                    </li>
                </ul>
            </div>
        `,t.appendChild(e)}),a?a.refresh():a=new m(".gallery-container a",{captions:!0,captionsData:"alt",captionDelay:2e3})}const h=document.querySelector("#searchInput"),y=document.querySelector(".input-form"),c=document.querySelector(".loader"),f=document.querySelector(".gallery-container");function b(i){i.preventDefault();const t=h.value.trim();return t?(p(t),w(),!0):(f.innerHTML="",l.show({message:"Field cannot be empty",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fafafb"}),!1)}function w(i){c.style.display="block";const t=d();fetch(t).then(r=>{if(!r.ok)throw new Error("Network response was not ok");return r.json()}).then(r=>{r.hits.length===0?(f.innerHTML="",l.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fafafb"})):g(r.hits)}).catch(r=>{console.error("Error fetching images:",r),l.show({message:"An error occurred while fetching images. Please try again later.",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fafafb"})}).finally(()=>{c.style.display="none"})}y.addEventListener("submit",b);
//# sourceMappingURL=index.js.map
