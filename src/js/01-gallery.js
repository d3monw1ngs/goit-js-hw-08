import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

galleryItems.forEach((item) => {
    let li = `
    <li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
        </a>
    </li>
    `;
    gallery.innerHTML += li;
});

const galleryHandler = new SimpleLightbox('.gallery a', {captionsData: "alt", captionDelay: 250} );
galleryHandler.on('show.simpleLightbox');