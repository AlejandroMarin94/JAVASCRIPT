import { createDetailsCard } from "./movieCardDetail";
import { getCast } from "../api/apifetch.js";

export function createMovieCard(movie) {
  const movieCardElement = document.createElement("div");
  movieCardElement.className = "movie-card";

  const imgElement = document.createElement("img");
  imgElement.className = "movie-img";
  imgElement.setAttribute(
    "src",
    `https://image.tmdb.org/t/p/w300${movie.poster_path}`
  );

  const titleElement = document.createElement("h3");
  titleElement.textContent = movie.title;

  const pElement = document.createElement("p");
  pElement.textContent = `Rating: ${movie.vote_average} | Date: ${movie.release_date}`;

  movieCardElement.appendChild(imgElement);
  movieCardElement.appendChild(titleElement);
  movieCardElement.appendChild(pElement);

  imgElement.addEventListener("click", async () => {
    console.log("hola");
    const existingDetails = document.querySelector(`#details-${movie.id}`);
    if (existingDetails) return;
    console.log(movie);
    

    const castArray = await getCast(movie.id);
    const detailCard = createDetailsCard(movie, castArray);

    const tarjetaDetalles = document.createElement("div");
    tarjetaDetalles.appendChild(detailCard); 

    document.querySelector("#app").appendChild(tarjetaDetalles);
  });

  return movieCardElement;
}
