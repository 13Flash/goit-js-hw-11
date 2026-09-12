import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
        <li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img
              class="gallery-image"
              src="${webformatURL}"
              alt="${tags}"
              loading="lazy"
            />
          </a>
          <ul class="info">
            <li class="info-item">
              <p class="info-label">Likes</p>
              <p class="info-value">${likes}</p>
            </li>
            <li class="info-item">
              <p class="info-label">Views</p>
              <p class="info-value">${views}</p>
            </li>
            <li class="info-item">
              <p class="info-label">Comments</p>
              <p class="info-value">${comments}</p>
            </li>
            <li class="info-item">
              <p class="info-label">Downloads</p>
              <p class="info-value">${downloads}</p>
            </li>
          </ul>
        </li>
      `
    )
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryEl.innerHTML = '';
}

export function showLoader() {
  loaderEl.classList.add('is-visible');
}

export function hideLoader() {
  loaderEl.classList.remove('is-visible');
}