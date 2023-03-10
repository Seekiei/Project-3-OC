
fetchData();

const bouttonAll = document.getElementById("boutton-All");
const bouttonObjet = document.getElementById("boutton-Objet");
const bouttonAppartement = document.getElementById("boutton-App");
const bouttonHotels = document.getElementById("boutton-Hotels");


bouttonAll.addEventListener("click", () => {
  fetchData([1, 2, 3]);
  bouttonAll.style.color = "white";
  bouttonAll.style.backgroundColor = "#1D6154";
  bouttonObjet.style.color = "#1D6154";
  bouttonObjet.style.backgroundColor = "white";
  bouttonAppartement.style.color = "#1D6154";
  bouttonAppartement.style.backgroundColor = "white";
  bouttonHotels.style.color = "#1D6154";
  bouttonHotels.style.backgroundColor = "white";
});

bouttonObjet.addEventListener("click", () => {
  fetchData([1]);
  bouttonAll.style.color = "#1D6154";
  bouttonAll.style.backgroundColor = "white";
  bouttonObjet.style.color = "white";
  bouttonObjet.style.backgroundColor = "#1D6154";
  bouttonAppartement.style.color = "#1D6154";
  bouttonAppartement.style.backgroundColor = "white";
  bouttonHotels.style.color = "#1D6154";
  bouttonHotels.style.backgroundColor = "white";
});

bouttonAppartement.addEventListener("click", () => {
  fetchData([2]);
  bouttonAll.style.color = "#1D6154";
  bouttonAll.style.backgroundColor = "white";
  bouttonObjet.style.color = "#1D6154";
  bouttonObjet.style.backgroundColor = "white";
  bouttonAppartement.style.color = "white";
  bouttonAppartement.style.backgroundColor = "#1D6154";
  bouttonHotels.style.color = "#1D6154";
  bouttonHotels.style.backgroundColor = "white";
});

bouttonHotels.addEventListener("click", () => {
  fetchData([3]);
  bouttonAll.style.color = "#1D6154";
  bouttonAll.style.backgroundColor = "white";
  bouttonObjet.style.color = "#1D6154";
  bouttonObjet.style.backgroundColor = "white";
  bouttonAppartement.style.color = "#1D6154";
  bouttonAppartement.style.backgroundColor = "white";
  bouttonHotels.style.color = "white";
  bouttonHotels.style.backgroundColor = "#1D6154";
});