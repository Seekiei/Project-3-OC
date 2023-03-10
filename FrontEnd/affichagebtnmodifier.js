
// faire appel au token pour le display des bouttons 

const token = localStorage.getItem("token")
const loginBtn = document.querySelector(".boutton-login")
const logoutBtn = document.querySelector(".boutton-logout")
const modifBtn = document.querySelector(".boutton-modifier")
const modifBtn2 = document.querySelector(".boutton-modifier2")
const bandeModif = document.querySelector(".bande-modif")

if(token){
    loginBtn.style.display = ('none')
    logoutBtn.style.display = null
    modifBtn.style.display = null
    modifBtn2.style.display = null
    bandeModif.style.display = null
} else{
    logoutBtn.classList.add('none')
    modifBtn.style.display = ('none')
    modifBtn2.style.display = ('none')
    bandeModif.style.display = ('none')
}

logoutBtn.addEventListener('click', () => {
    window.localStorage.removeItem("token")
    logoutBtn.classList.add('none')
    window.location.reload()
})
