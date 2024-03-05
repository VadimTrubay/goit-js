import {galleryItems} from './gallery-items.js';

const galleryList = document.querySelector(".gallery");
const createElements = galleryItems.map(({ preview, original, description }) =>
  `<li class="gallery__item">
    <a class="gallery__link" href="${preview}" target="_parent">
    <img 
      class="gallery__image" 
      src="${preview}" 
      alt="${description}" 
      data-source=${original}>
    </a>
  </li>`).join("");
galleryList.insertAdjacentHTML("afterbegin", createElements);


const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionType: "alt",
});


