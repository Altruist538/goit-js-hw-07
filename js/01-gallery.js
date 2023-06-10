import { galleryItems } from "./gallery-items.js";
// Change code below this line
// import * as basicLightbox from "basiclightbox";
const galleryEl = document.querySelector(".gallery");
const galleryAdd = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item"><a class="gallery__link" href = "${original}" >
    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" /> </a >
    </li>`
  )
  .join("");
galleryEl.innerHTML = galleryAdd;

// galleryEl.addEventListener("click", (event) => {
//   event.preventDefault();

//   const { target } = event;
//   if (target.nodeName !== "IMG") return;

//   const largeImageURL = target.dataset.source;

//   const instance = basicLightbox.create(`
//     <img src="${largeImageURL}" alt="${target.alt}" />
//   `);

//   instance.show();
// });
// console.log(galleryItems);
galleryEl.addEventListener("click", OnClickGalleryImg);

function OnClickGalleryImg(evt) {
  evt.preventDefault();
  const isImgEl = evt.target.classList.contains("gallery__image");
  if (!isImgEl) {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`);
  instance.show();
  galleryEl.addEventListener("keydown", OnCloswGalleryImg);
  function OnCloswGalleryImg(evt) {
    instance.close();
  }
}
