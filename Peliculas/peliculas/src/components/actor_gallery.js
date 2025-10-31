export function createActorsGallery(castArray) {
  /* const detailCardCuarto = document.createElement("div");
    detailCardCuarto.className = ("detail-cuarto");
    const cast = document.createElement("div");
    cast.textContent ="Actores";*/
  const gallery = document.createElement("div");
  gallery.className = "actors-gallery";
  castArray.forEach(actor=>{
    const actorCard = document.createElement("div");
    actorCard.className = "actor-card";

    const actorImg = document.createElement("img");
    actorImg.className = "actor-img";
    actorImg.setAttribute("src", `https://image.tmdb.org/t/p/w185${actor.profile_path}`)

    const actorName = document.createElement("p");
    actorName.className = "actor-name";
    actorName.textContent = `${actor.name} como ${actor.character}`;

    actorCard.appendChild(actorImg);
    actorCard.appendChild(actorName);
    gallery.appendChild(actorCard);
  })
  
  return gallery;
}
