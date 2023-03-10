
const modal1 = document.getElementById('modal1')
const modal2 = document.getElementById('modal2')

//ouverture de la modal

const openModal = function (e) {
    e.preventDefault();
    const target = document.querySelector('#modal1');
    target.style.display = null;
    target.removeAttribute('aria-hidden');
    target.setAttribute('aria-modal', true);
    modal = target;
    modal.addEventListener('click', closeModal);
    modal.querySelector('.js-modal-close').addEventListener('click', closeModal);
    modal.querySelector('.js-modal-stop').addEventListener('click', stopPropagation);
}

document.querySelectorAll(".js-modal").forEach(a => {
    a.addEventListener('click', openModal);
})

//fermeture de la modal

const closeModal = function (e) {
    if (modal === null) return
    e.preventDefault()
    modal1.style.display = 'none'
    modal2.style.display = 'none'
    modal.setAttribute('aria-hidden', true);
    modal.removeAttribute('aria-modal');
    modal.removeEventListener('click', closeModal);
    modal.querySelector('.js-modal-close').removeEventListener('click', closeModal);
    modal.querySelector('.js-modal-stop').removeEventListener('click', stopPropagation);
}

// Clique en dehors de la modal et/ou sur la croix pour fermer cette derniére

const stopPropagation = function (e) {
    e.stopPropagation ();
}

// ajout d'un event pour l'ouverture de la modal2

document.querySelector('.btn-choix-photo').addEventListener('click', () =>{
    document.getElementById('modal1').style.display = "none"
    document.getElementById('modal2').style.display = null
})

// evenement sur la croix pour la fermeture de la modal2

document.querySelector('.js-modal2-close').addEventListener('click', (e) =>{
    document.getElementById('modal1').style.display = "none"
    document.getElementById('modal2').style.display = "none"
})

// ajout d'un event pour le boutton retour de la modal2

document.querySelector('.js-modal2-return').addEventListener('click', (e) =>{
    document.getElementById('modal1').style.display = null
    document.getElementById('modal2').style.display = "none"
})

// ajout du boutton Esc pour fermer la modal

window.addEventListener('keydown', function (e) {
    if (e.key === "Escape" || e.key === "Esc") {
        closeModal(e)
    };
});

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // empêche la soumission du formulaire de rafraîchir la page
  });