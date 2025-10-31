import { createMovieCard } from "../components/movieCard.js";

export function showMovies(movies, container) {
  if (!movies || movies.length === 0) {
    container.textContent = "No se han recibido películas.";
    return;
  } else {
    container.innerHTML = "";
  }

  movies.forEach(movie => {
    const movieCard = createMovieCard(movie);
    container.appendChild(movieCard);
  });

}