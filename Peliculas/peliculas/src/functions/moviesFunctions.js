import { createMovieCard } from "../components/movieCard.js";
import { createDetailsCard } from "../components/movieCardDetail.js";


export function showMovies(movies, container) {
    if(!movies || movies.length ===0){
        container.textcontent = "Mo se han recibido peliculas"
        return
    } else {
        container.innerHTML = "";
    }

movies.forEach(movie=>{
    const movieCard = createMovieCard(movie);
    container.appendChild(movieCard);
    

    
    

})

}