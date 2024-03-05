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

let activeLightbox; // Store the active lightbox instance

const openModal = (source) => {
  activeLightbox = basicLightbox.create(`
    <img src="${source}" width="800" height="600">`);

  activeLightbox.show();
};

const onContainerClick = (event) => {
  event.preventDefault();

  if (event.target.classList.contains("gallery__image")) {
    const source = event.target.dataset.source;
    openModal(source);
  }
};

const closeModalOnEscape = (event) => {
  if (event.key === "Escape" && activeLightbox) {
    activeLightbox.close();
  }
};

galleryList.addEventListener("click", onContainerClick);
document.addEventListener("keydown", closeModalOnEscape);