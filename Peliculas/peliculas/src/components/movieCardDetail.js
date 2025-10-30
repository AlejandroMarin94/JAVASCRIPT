export function createDetailsCard(){
    
    const detailCard= document.createElement("div");
    detailCard.className = ("detail-card");

    const detailCardSec = document.createElement("div");
    detailCardSec.className = ("detail-cardsec");


    const imgDetail = document.createElement("img");
    imgDetail.setAttribute("src", "https://image.tmdb.org/t/p/w300/fWVSwgjpT2D78VUh6X8UBd2rorW.jpg");

    const titleDetail = document.createElement("h2");
    titleDetail.className = ("title-detail");
    titleDetail.textContent = "holaaaaaaaaaaaaaaaa";

    const descriptionDetail = document.createElement("p");
    descriptionDetail.className = ("description-detail");
    descriptionDetail.textContent = "adiossssss"

    detailCard.appendChild(imgDetail);
    detailCardSec.appendChild(titleDetail);
    detailCardSec.appendChild(descriptionDetail);
    detailCard.appendChild(detailCardSec);
    
    return detailCard;
}