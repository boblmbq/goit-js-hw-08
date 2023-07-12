import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const ulEl = document.querySelector('.gallery');

//? making markup in ul
const ulMarkup = galleryItems
  .map(e => {
    return `<li class="gallery__item">
             <a class="gallery__link" href="${e.original}">
                <img class="gallery__image" src="${e.preview}" alt="${e.description}" />
            </a>
          </li>`;
  })
  .join(' ');
ulEl.insertAdjacentHTML('beforeend', ulMarkup);

const gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionSelector: 'img',
  captionsData: 'alt',
  captionDelay: 250,
});
