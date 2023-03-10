
const toggleButton = document.querySelector("#Ajout-photo");
const inputFichier = document.querySelector("#fichier-input");
const imgPreview = document.querySelector("#img-preview");

toggleButton.addEventListener("click", function() {
  if (inputFichier.style.display === "none", imgPreview.style.display === "none") {
    inputFichier.style.display = null;
    imgPreview.style.display = null;
  } else {
    inputFichier.style.display = "none";
    imgPreview.style.display = "none";
  }
});
