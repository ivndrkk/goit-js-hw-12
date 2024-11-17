import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { updateQuery, getBaseUrl } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const formInput = document.querySelector('#searchInput');
const form = document.querySelector('.input-form');
const loader = document.querySelector('.loader')
const galleryContainer = document.querySelector('.gallery-container');

function checkInput(event) {
    event.preventDefault();

    const inputContent = formInput.value.trim();

    if (!inputContent) {
        galleryContainer.innerHTML = '';
        iziToast.show({
        message: 'Field cannot be empty',
        position: 'topRight',
        backgroundColor: '#ef4040',
        messageColor: '#fafafb',
    });
        return false;

    } else {
        updateQuery(inputContent);
        fetchImages(inputContent);
        return true;
    }
    }

function fetchImages(query) {
    loader.style.display = 'block';

    const url = getBaseUrl(query);

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.hits.length === 0) {
                galleryContainer.innerHTML = '';
                iziToast.show({
                    message:'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                    backgroundColor: '#ef4040',
                    messageColor: '#fafafb',
                });
            } else {
                renderGallery(data.hits);
            }
        })
        .catch(error => {
            console.error('Error fetching images:', error);
            iziToast.show({
                message:'An error occurred while fetching images. Please try again later.',
                position: 'topRight',
                backgroundColor: '#ef4040',
                messageColor: '#fafafb',
            });
        })
        .finally(() => { 
            loader.style.display = 'none';
        })
}

form.addEventListener('submit', checkInput);
