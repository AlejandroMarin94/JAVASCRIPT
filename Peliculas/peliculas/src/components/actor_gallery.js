export function createActorsGallery(castArray) {

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
