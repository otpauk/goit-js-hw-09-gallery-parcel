import galleryItems from "./gallery-items";

export const galleryContainerRef = document.querySelector("ul.js-gallery");
export const lightboxContainerRef = document.querySelector("div.js-lightbox");
export const lightboxImageRef = document.querySelector("img.lightbox__image");
export const closeModalBtnRef = document.querySelector(
  'button[data-action="close-lightbox"]'
);
export const overlayRef = document.querySelector("div.lightbox__overlay");

export const galleryCardsMarkup = createGalleryCardsMarkup(galleryItems);

// render HTML element based on images list database
function createGalleryCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `      <li class="gallery__item">
        <a
          class="gallery__link"
          href="${original}"
        >
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`;
    })
    .join("");
}