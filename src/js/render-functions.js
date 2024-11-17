import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = null;

export function renderGallery(images) {
    const galleryContainer = document.querySelector('.gallery-container');
    galleryContainer.innerHTML = '';
    const imagesToDisplay = images.slice(0, 9);

    imagesToDisplay.forEach(image => {
    const li = document.createElement('li');
    li.classList.add('image-item');

    li.innerHTML = `
            <a href="${image.largeImageURL}" class="gallery-link">
                <img src="${image.webformatURL}" alt="${image.tags}" class="image-view" >
            </a>
            <div class="image-info-container">
                <ul class="image-info-list">
                    <li class="image-info-item">
                        <h2>Likes</h2>
                        <p>${image.likes}</p>
                    </li>
                    <li class="image-info-item">
                        <h2>Views</h2>
                        <p>${image.views}</p>
                    </li>
                    <li class="image-info-item">
                        <h2>Comments</h2>
                        <p>${image.comments}</p>
                    </li>
                    <li class="image-info-item">
                        <h2>Downloads</h2>
                        <p>${image.downloads}</p>
                    </li>
                </ul>
            </div>
        `;

    galleryContainer.appendChild(li);
    });

    if (!lightbox) {
        lightbox = new SimpleLightbox('.gallery-container a', {
            captions: true,
            captionsData: 'alt',
            captionDelay:2000,
        });
    } else {
        lightbox.refresh();
    }
    }
