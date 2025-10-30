import './style.css'
import { getMovies } from './api/apifetch.js';
import { createDetailsCard } from './components/movieCardDetail.js';

const anchorElement = document.querySelector("#app");

// Titulo para la web

const titleElement = document.createElement("h1");
titleElement.textContent = "Movies list from TMDB"
titleElement.className = "web-title";

const moviesContainer = document.createElement("div");
moviesContainer.className = "movies-container";

const buttonGetMovies = document.createElement("button");
buttonGetMovies.textContent = "Get movies";

const buttonGetDetails = document.createElement("button");
buttonGetDetails.textContent = "Get details";


anchorElement.appendChild(titleElement);
anchorElement.appendChild(buttonGetMovies);
anchorElement.appendChild(buttonGetDetails);
anchorElement.appendChild(moviesContainer);





moviesContainer.innerHTML = "<p> Sin peliculas aún </p>"

buttonGetMovies.addEventListener("click", ()=>{
    console.log("Obteniendo peliculas...");
    getMovies(moviesContainer);

    
})
/*
const detailCard= createDetailsCard();
anchorElement.appendChild(detailCard);
*/

buttonGetDetails.addEventListener("click", ()=>{
    console.log("Obteniendo detalles...");
    
    
})