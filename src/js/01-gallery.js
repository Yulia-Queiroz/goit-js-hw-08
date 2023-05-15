import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');
const imagesMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', imagesMarkup);

function createGalleryMarkup(images) {
  const markup = images
    .map(({ preview, original, description }) => {
      return `
       <a class="gallery__item"
       href="${original}">
  <img class="gallery__image"
  src="${preview}"
  alt="${description}" />
</a>`;
    })
    .join('');
  return markup;
}

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
