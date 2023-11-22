// Add imports above this line
import { galleryItems } from './gallery-items';
import simpleLightbox from 'simplelightbox';
import 'simpleLightbox/dist/simple-lightbox.min.css';

// Change code below this line

const galleryContainer = document.querySelector('ul.gallery');

const images = galleryItems.map(item => {
  return `<div class = "gallery__item">
    <a class = "gallery__link" href = "${item.original}">
    <img
        class = "gallery__image"
        src = "${item.preview}"
        data-source = "${item.original}"
        alt = ${item.description}" />
    </a>
    </div>`;
});
galleryContainer.insertAdjacentHTML('beforeend', images.join(''));

const gallery = new SimpleLightbox('#image-gallery a');

console.log(galleryItems);

console.log(galleryItems);
