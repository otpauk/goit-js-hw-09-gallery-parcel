import { galleryContainerRef, closeModalBtnRef, overlayRef, galleryCardsMarkup } from "./js/gallery-vars";

import { onGalleryCardsClick, onCloseModalBtnClick, onOverlayClick, onEscapeBtnPress, choosePreviousImage, chooseNextImage } from "./js/gallery-events";

galleryContainerRef.insertAdjacentHTML("afterbegin", galleryCardsMarkup);

galleryContainerRef.addEventListener("click", onGalleryCardsClick);
closeModalBtnRef.addEventListener("click", onCloseModalBtnClick);
overlayRef.addEventListener("click", onOverlayClick);
window.addEventListener("keydown", onEscapeBtnPress);
window.addEventListener("keydown", choosePreviousImage);
window.addEventListener("keydown", chooseNextImage);