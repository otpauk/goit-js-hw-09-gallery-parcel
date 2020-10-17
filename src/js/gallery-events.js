import galleryItems from './gallery-items';

import { lightboxContainerRef, lightboxImageRef } from "./gallery-vars";

// delegation on gallery container
export const onGalleryCardsClick = (event) => {
  event.preventDefault();

  const isGalleryImageRef = event.target.classList.contains("gallery__image");

  if (!isGalleryImageRef) {
    return;
  }

  // get url for big image
  const bigImageUrl = event.target.dataset.source;

  // make modal window visible
  lightboxContainerRef.classList.add("is-open");

  // set current big image src on modal window image element
  lightboxImageRef.setAttribute("src", bigImageUrl);
}

// modal window close on "close" button click
export const onCloseModalBtnClick = () => {
  changeModalPropsOnClose();
}

// modal window close on overlay click
export const onOverlayClick = () => {
  changeModalPropsOnClose();
}

// modal window close on ESC button press
export const onEscapeBtnPress = (event) => {
  if (event.code !== "Escape") {
    return;
  }

  changeModalPropsOnClose();
}

function changeModalPropsOnClose() {
  // make modal window invisible
  lightboxContainerRef.classList.remove("is-open");

  // clear src atribute in modal window image element
  lightboxImageRef.setAttribute("src", "");
}

// scroll to previous image on "arrow left" button press
export const choosePreviousImage = (event) => {
  if (event.code !== "ArrowLeft") {
    return;
  }

  // get index of current image in images list
  let currentImageIndex = galleryItems.findIndex((element) => element.original === lightboxImageRef.getAttribute('src'));
  
  // check if current image is the first in the list
  if (currentImageIndex === 0) { currentImageIndex = galleryItems.length;}

  // generate index for next image to show
  const prevImageUrl = galleryItems[currentImageIndex - 1].original;

  // show the new image
  lightboxImageRef.setAttribute("src", prevImageUrl);  
}
 
 // scroll to previous image on "arrow right" button press
export const chooseNextImage = (event) => {
  if (event.code !== "ArrowRight") {
    return;
  }

  // get index of current image in images list
  let currentImageIndex = galleryItems.findIndex((element) => element.original === lightboxImageRef.getAttribute('src'));
  
  // check if current image is the last in the list
  if (currentImageIndex === galleryItems.length - 1) { currentImageIndex = -1;}
  
  // generate index for next image to show
  const nextImageUrl = galleryItems[currentImageIndex + 1].original;

  // show the new image
  lightboxImageRef.setAttribute("src", nextImageUrl);
 }