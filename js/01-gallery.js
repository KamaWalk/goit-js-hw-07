import { galleryItems } from './gallery-items.js';
// Change code below this line

const myGallery = document.querySelector(".gallery");

const galleryList = galleryItems.map(
    (galleryItem) => 
  `<li class="gallery__item">
    <a class="gallery__link" href="${galleryItem.original}">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
    >
    </img>
     </a>
   </li>`
  )
  .join("");

myGallery.insertAdjacentHTML("afterbegin", galleryList);
console.log(galleryItems);