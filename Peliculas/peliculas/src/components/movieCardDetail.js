import { createActorsGallery } from "./actor_gallery.js";

export function createDetailsCard(movie, castArray) {
  const detailCard = document.createElement("div");
  detailCard.setAttribute("id", `details-${movie.id}`)
/*
  detailCardPadre = document.createElement("div");
  detailCardPadre.classList = "detailcard-padre
  */

  
  detailCard.classList.add("tarjeta-detalles", "detail-card");

  const detailCardSec = document.createElement("div");
  detailCardSec.className = "detail-cardsec";

  const detailCardTerc = document.createElement("div");
  detailCardTerc.className = "detail-cardterc";

  const detailCardCuarto = document.createElement("div");
  detailCardCuarto.className = "detail-cuarto";
  

  const imgDetail = document.createElement("img");
  imgDetail.className = "img-detail";
  imgDetail.setAttribute(
    "src",
    `https://image.tmdb.org/t/p/w300${movie.poster_path}`);

  

  const titleDetail = document.createElement("h1");
  titleDetail.className = "title-detail";
  titleDetail.textContent = movie.title;

  const descriptionDetail = document.createElement("p");
  descriptionDetail.className = "description-detail";
  descriptionDetail.textContent = movie.overview;

  const cast = createActorsGallery(castArray);
  detailCardCuarto.appendChild(cast);

  detailCard.appendChild(imgDetail);
  detailCardTerc.appendChild(titleDetail);
  detailCardTerc.appendChild(descriptionDetail);

  detailCard.appendChild(detailCardSec);
  detailCardSec.appendChild(detailCardTerc);
  detailCardSec.appendChild(detailCardCuarto);

  return detailCard;
}

