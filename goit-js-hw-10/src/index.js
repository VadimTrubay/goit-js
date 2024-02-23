import axios from 'axios';
import Notiflix from 'notiflix';
import SlimSelect from 'slim-select'

axios.defaults.headers.common['x-api-key'] = 'live_IZHKPkENB6YpjnJjT13hlI6DnyYfmhFtJcvobfnPofrodT0qiS1CjtWyfcJqqKOm';

// new SlimSelect({select: '#single'})
const catSelect = document.querySelector('.breed-select');
const catsList = document.querySelector('.cat-info');
const error = document.querySelector('.error');
const loader = document.querySelector('.loader');


// init cats from form
document.addEventListener('DOMContentLoaded', () => {
  initCats()
    .then((cats) => {
      renderValues(cats);
    })
    .catch((err) => {
      Notiflix.Report.failure(err);
      error.classList.toggle('error');
    });
});

function initCats() {
  return fetch('https://api.thecatapi.com/v1/breeds')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch cat breeds');
      }
      return response.json();
    });
}

function renderValues(cats) {
  catSelect.innerHTML = cats.map((cat) => {
    return `<option value="${cat.id}">${cat.name}</option>`;
  }).join('');
  loader.classList.toggle('hidden', true);
}


//  render the Info from one cat to id
catSelect.addEventListener('change', (event) => {
  const breedId = event.target.value;

  // Fetch detailed breed information
  fetchCatByBreed(breedId)
    .then((breed) => {
      // Fetch an image for the breed
      return fetchCatImage(breed.id)
        .then((image) => ({ ...breed, image }));
    })
    .then((cat) => renderCats(cat))
    .catch((error) => Notiflix.Report.failure(error));

});

function fetchCatByBreed(breedId) {
  return fetch(`https://api.thecatapi.com/v1/breeds/${breedId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch cat by breed');
      }

      return response.json();
    });
}

function fetchCatImage(breedId) {
  return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch cat image');
      }
      return response.json();
    })
    .then((images) => {
      if (images.length > 0) {
        return { url: images[0].url };
      }
      throw new Error('No image found for the cat');
    });
}

function renderCats(cat) {
  catsList.innerHTML = ''; // Clear previous content before rendering new content

  const info = `
  <div>
    <img src="${cat.image.url}" alt="cat">
  </div>
  <div>
    <p><b>${cat.name}</b></p>
    <p>${cat.description}</p>
    <p><b>Temperament</b>: ${cat.temperament}</p>
  </div>
  `;
  catsList.insertAdjacentHTML('beforeend', info);
}





