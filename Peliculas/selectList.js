import { movieListType } from "../api/apiConfig.js";
import { getMovies } from "../api/apiFetch.js";

export function createSelectTypeList() {
  const selectElement = document.createElement("select");

  const arrayCategories = Object.entries(movieListType);

  arrayCategories.forEach((category) => {
    const optionElement = document.createElement("option");
    optionElement.setAttribute("value", category[1]);
    optionElement.textContent = category[0];
    selectElement.appendChild(optionElement);   
  });

  return selectElement;
}

export function createMovieListSelectListener(select) { // createSelectListener

    const movieContainer = document.querySelector(".movies-container")

    select.addEventListener("change", (event) => {
        const elementSelected = event.target;
        getMovies(movieContainer, elementSelected.value);
    })

}
