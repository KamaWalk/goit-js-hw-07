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

myGallery.addEventListener("click", (event) => {
  event.preventDefault();
});


myGallery.addEventListener("click", (event) => {
  if(event.target.tagName === 'IMG') {
    const image = 
    `<img
      class="gallery__full_image"
      src="${event.target.dataset.source}"
    >`
    const instance = basicLightbox.create(image);
    instance.show();
    const fullImage = document.querySelector(".gallery__full_image");
    document.body.addEventListener("keydown", (e) => {
      if (e.key === "Esc" || "Escape") instance.close()
    });
  console.log(fullImage);
    console.log(event.target.dataset.source);
    console.log(event.target);
  }
});

var images = document.querySelectorAll(".gallery img");
images.forEach(function (image) {
  image.addEventListener("click", function (event) {
    event.preventDefault();
    const lightbox = new SimpleLightbox(".gallery a", {
        captionsData: "alt",
        captionDelay: 250,
        captionPosition: "bottom",
        close: true,
        enableKeyboard: true,
    });
  });
});

