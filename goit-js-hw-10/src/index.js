import axios from 'axios';

axios.defaults.headers.common["x-api-key"] = "live_IZHKPkENB6YpjnJjT13hlI6DnyYfmhFtJcvobfnPofrodT0qiS1CjtWyfcJqqKOm";


const catSelect = document.querySelector(".breed-select");
const catsList = document.querySelector(".cat-info");
const error = document.querySelector(".error");
const loader = document.querySelector(".loader");

document.addEventListener('DOMContentLoaded', () => {
  fetchCats()
    .then((cats) => {
      renderValues(cats);
    })
    .catch((err) => {
      console.error(err);
      error.classList.toggle("error");
    });
});

function fetchCats() {
  return fetch("https://api.thecatapi.com/v1/breeds2")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch cat breeds");
      }
      return response.json();
    });
}

function renderValues(cats) {
  const markup = cats.map((cat) => {
    return `<option value="${cat.id}">${cat.name}</option>`;
  }).join("");
  catSelect.innerHTML = markup;
  loader.classList.toggle("hidden", true);
}

// Optional: Add an event listener to handle changes in the selected cat breed
catSelect.addEventListener('change', (event) => {
  const selectedBreedId = event.target.value;
  // Perform actions based on the selected breed, if needed
});




// catSelect.addEventListener("choice", () => {
//   fetchCats()
//     .then((cat) => renderCats(cat))
//     .catch((error) => console.log(error));
// });
//
// function fetchCats() {
//   return fetch("").then(
//     (response) => {
//       if (!response.ok) error.classList.toggle("error")
//     }
//   );
// }

// fetchCats()
//   .then((cat) => renderCats(cat))
//   .catch((error) => console.log(error));

// function renderCats(cats) {
  // const markup = cats
  //   .map((cats) => {
  //     return `<li>
  //         <p><b>Name</b>: ${cats.name}</p>
  //         <p><b>Email</b>: ${cats.email}</p>
  //         <p><b>Company</b>: ${cats.company.name}</p>
  //       </li>`;
  //   })
  //   .join("");
  // catsList.insertAdjacentHTML("beforeend", markup);
// }





