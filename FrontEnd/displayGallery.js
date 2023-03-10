
function fetchData(categoryIds) {
    fetch("http://localhost:5678/api/works")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const gallery = document.getElementById("photo");
        gallery.innerHTML = "";
  
        data.forEach((element) => {
          if (!categoryIds || categoryIds.includes(element.categoryId)) {
            const figure = document.createElement("figure");
            const img = document.createElement("img");
            img.src = element.imageUrl;
            img.crossOrigin = "anonymous";
            // j'ai mis anonymous pour que l'image soit publique pour tout le monde
  
            const fg = document.createElement("figcaption");
            fg.textContent = element.title;
            figure.appendChild(img);
            figure.appendChild(fg);
            gallery.appendChild(figure);
          }
        });
      });
  }

// affichage des images via l'api pour la modal

fetch("http://localhost:5678/api/works")
.then((response) => response.json())
.then((data) => {
  console.log(data);
  const gallery = document.getElementById("container-img");
  gallery.innerHTML = "";

// creation des element html en js

  data.forEach((element) => {
      const figure = document.createElement("figure");
      figure.id = element.id
      const btnIcon = document.createElement('button');
      const icon = document.createElement('i');
      btnIcon.className = ('btn-delete');
      icon.className = ("fa-solid fa-trash-can");
      const edit = document.createElement('p');
      edit.innerText = 'éditer';   
      const img = document.createElement("img");
      img.src = element.imageUrl;
      img.crossOrigin = "anonymous";
      

      gallery.appendChild(figure);
      figure.appendChild(btnIcon);
      btnIcon.appendChild(icon);
      figure.appendChild(img);
      figure.appendChild(edit);


      // ajout de l'evenement au moment du click sur le bouton supprimer

      btnIcon.addEventListener('click', (e) => {
        console.log(e)
        deleteImg(e.target.parentNode.parentNode)
      })
    
  });
});

// function pour delete une image

  function deleteImg(figure) {
    const id = figure.id
    console.log("id", id);
    fetch("http://localhost:5678/api/works/"+ id,{
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
        
    })
  }