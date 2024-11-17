import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { updateQuery, getBaseUrl } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';
import axios from 'axios';

const formInput = document.querySelector('#searchInput');
const form = document.querySelector('.input-form');
const loader = document.querySelector('.loader');
const galleryContainer = document.querySelector('.gallery-container');
const loadMoreBtn = document.querySelector('.load-more-btn');

let page = 1;
const perPage = 15;
let currentQuery = '';

async function fetchImages(query, pageNumber = 1) {
    loader.style.display = 'block';

    try {
        const url = getBaseUrl(query, pageNumber, perPage);
        const { data } = await axios.get(url);

        if (data.hits.length === 0 && pageNumber === 1) {
            galleryContainer.innerHTML = '';
            iziToast.show({
                message:'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
                backgroundColor: '#FF6347',
                messageColor: '#fafafb',
            });
            loadMoreBtn.style.display = 'none';
        } else {
            renderGallery(data.hits, pageNumber === 1);

            if (pageNumber > 1) {
                const imageItems = document.querySelectorAll('.image-item');
                if (imageItems.length > 0) {
                    const imageHeight = imageItems[0].getBoundingClientRect().height;
                    window.scrollBy({
                        top: 2 * imageHeight,
                        behavior: 'smooth',
                    });
                }
            }

            if (data.hits.length + pageNumber * perPage >= data.totalHits) {
                loadMoreBtn.style.display = 'none';
                iziToast.show({
                    message:"We're sorry, but you've reached the end of search results.",
                    position: 'topRight',
                    backgroundColor: '#BDC3C7',
                    messageColor: '#00000',
                });
            } else {
                loadMoreBtn.style.display = 'block';
            }
        }
    } catch (error) {
        console.error('Error fetching images:', error);
        iziToast.show({
            message:'An error occurred while fetching images. Please try again later.',
            position: 'topRight',
            backgroundColor: '#ef4040',
            messageColor: '#fafafb',
        });
    } finally {
        loader.style.display = 'none';
    }
}

function checkInput(event) {
    event.preventDefault();

    const inputContent = formInput.value.trim();

    if (!inputContent) {
        galleryContainer.innerHTML = '';
        iziToast.show({
            message: 'Field cannot be empty',
            position: 'topRight',
            backgroundColor: '#FF8C00',
            messageColor: '#fafafb',
        });
        loadMoreBtn.style.display = 'none';
        return false;
    }

    currentQuery = inputContent;
    page = 1;
    updateQuery(currentQuery);
    galleryContainer.innerHTML = '';
    loadMoreBtn.style.display = 'none';
    fetchImages(currentQuery, page);
    return true;
}

function loadMoreImages() {
    page += 1;
    fetchImages(currentQuery, page);
}

form.addEventListener('submit', checkInput);
loadMoreBtn.addEventListener('click', loadMoreImages);
