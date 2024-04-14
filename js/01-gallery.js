import { galleryItems } from "./gallery-items.js";

const list = document.querySelector(".gallery");

function createImagesGallery() {
  for (const image of galleryItems) {
    const listElement = document.createElement("li");
    listElement.classList.add("gallery__item");

    const a = document.createElement("a");
    a.classList.add("gallery__link");
    a.setAttribute("href", image.original);
    const img = document.createElement("img");

    img.classList.add("gallery__image");
    img.setAttribute("src", image.preview);
    img.setAttribute("alt", image.description);

    list.append(listElement);
    listElement.append(a);
    a.append(img);

    a.addEventListener("click", (event) => {
      event.preventDefault();

      const instance = basicLightbox.create(
        `<img src="${img.src}" alt="${img.alt}">`
      );
      instance.show();

      document.addEventListener("keyup", (event) => {
        if (event.code === "Escape") {
          instance.close();
        }
      });
    });
  }
}
createImagesGallery();
