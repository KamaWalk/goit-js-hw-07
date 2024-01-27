import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const myGallery = document.querySelector(".gallery");

const galleryList = galleryItems.map(
    (galleryItem) => 
  `<li class="gallery__item">
    <a class="gallery__link" href="${galleryItem.original}">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      alt="${galleryItem.description}"
    >
    </img>
     </a>
   </li>`
  )
  .join("");

myGallery.insertAdjacentHTML("afterbegin", galleryList);



    const lightbox = new SimpleLightbox(".gallery a", {
        captionsData: "alt",
        captionDelay: 250,
        captionPosition: "bottom",
        close: true,
        enableKeyboard: true,
    });


