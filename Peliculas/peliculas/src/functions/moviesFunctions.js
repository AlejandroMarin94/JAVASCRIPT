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
    movieCard.addEventListener("click", ()=>{
        const tarjetasecundaria = document.createElement("div");
        tarjetasecundaria.textContent = "niojfdbngiojferbngkjrebgiorbegkj"
    })
    container.appendChild(movieCard);
    

    
    

})

}

