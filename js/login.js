let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

function Login() {
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
  
    if (email == 0) {
        alert("Digite o seu Email")
    } else if (senha == 0) {
        alert("Digite a Senha")
    } 
    else {
        alert("Login Efetuado!")
        window.location.href = "home.html";
    }
  }