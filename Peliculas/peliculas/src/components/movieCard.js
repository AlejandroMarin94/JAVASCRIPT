export function createMovieCard (movie){


    const movieCardElement = document.createElement("div");
    movieCardElement.className = "movie-card";


    const imgElement = document.createElement("img");
    imgElement.className ="movie-img";
    imgElement.setAttribute("src", `https://image.tmdb.org/t/p/w300${movie.poster_path}`);

    const titleElement= document.createElement("h3");
    titleElement.textContent = movie.title;

    const pElement = document.createElement("p");
    pElement.textContent = `Rating: ${movie.vote_average} | Date: ${movie.release_date}`;

    movieCardElement.appendChild(imgElement);
    movieCardElement.appendChild(titleElement);
    movieCardElement.appendChild(pElement);

    return movieCardElement;
}

 