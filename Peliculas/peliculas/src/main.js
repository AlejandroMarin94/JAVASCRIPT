import './style.css'
import { getMovies } from './api/apifetch.js';

const anchorElement = document.querySelector("#app");

// Titulo para la web

const titleElement = document.createElement("h1");
titleElement.textContent = "Movies list from TMDB"
titleElement.className = "web-title";

const moviesContainer = document.createElement("div");
moviesContainer.className = "movies-container";

const buttonGetMovies = document.createElement("button");
buttonGetMovies.textContent = "Get movies";

anchorElement.appendChild(titleElement);
anchorElement.appendChild(buttonGetMovies);
anchorElement.appendChild(moviesContainer);

moviesContainer.innerHTML = "<p> Sin peliculas aún </p>"

buttonGetMovies.addEventListener("click", ()=>{
    console.log("Obteniendo peliculas...");
    getMovies(moviesContainer);

    
})