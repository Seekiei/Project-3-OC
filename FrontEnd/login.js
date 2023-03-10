// creation du login via l'api backend

const Email = document.getElementById('e-mail')
const Password = document.getElementById('password')
const loginForm = document.getElementById('loginForm')
localStorage.setItem('user', false)

loginForm.addEventListener('submit', (event) => {
  event.preventDefault()

  const email = Email.value
  const password = Password.value
  const data = { email, password }

  fetch('http://localhost:5678/api/users/login', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      if (data.userId) {
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', true)
        window.location.href = 'index.html'
      } else {
        alert("Erreur dans l'identifiant ou le mot de passe")
      }
    })
    .catch(error => console.error('Error:', error))
})