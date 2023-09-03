/*-----===VARIÁVEIS===-----*/
const eventForm = document.querySelector('.form');
const eventCard = document.getElementById('eventos-criados');

const events = [];

/*-----===EVENTOS===-----*/
eventForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const data = document.getElementById('data').value;
    const tipo = document.getElementById('tipo').value;
    const local = document.getElementById('local').value;

    var vn = verifyNome(nome);
    var vd = verifyData(data);
    var vt = verifyTipo(tipo);
    var vl = verifyLocal(local);


    const evento = { nome, data, tipo, local };
    events.push(evento);

    const card = createEventCard(evento);
    if (vn && vd && vt && vl) {
        eventCard.appendChild(card);

        eventForm.reset();
    }
    else{
        avisoCampo.classList.add("ativo");
        setTimeout(() =>{
            avisoCampo.classList.remove("ativo");
        }, 1600)
    }
})

/*-----===FUNÇÕES===-----*/
function verifyNome(nome) {
    if (nome.length <= 0) {
        document.getElementById("nome").classList.add("errado");
        setTimeout(() => {
            document.getElementById("nome").classList.remove("errado");
        }, 3000);
        return false;
    }
    else{
        return true;
    }
}
function verifyData(data) {
    if (data.length <= 0) {
        document.getElementById("data").classList.add("errado");
        setTimeout(() => {
            document.getElementById("data").classList.remove("errado");
        }, 3000);
        return false;
    }
    else {
        return true;
    }
}
function verifyTipo(tipo) {
    if (tipo.length <= 0) {
        document.getElementById("tipo").classList.add("errado");
        setTimeout(() => {
            document.getElementById("tipo").classList.remove("errado");
        }, 3000);
        return false;
    }
    else {
        return true;
    }
}
function verifyLocal(local) {
    if (local.length <= 0) {
        document.getElementById("local").classList.add("errado");
        setTimeout(() => {
            document.getElementById("local").classList.remove("errado");
        }, 3000);
        return false;
    }
    else {
        return true;
    }
}

function createEventCard(evento) {
    const card = document.createElement('div');
    const cardDetalhe = document.createElement("div");
    const cardBtn = document.createElement("div");

    card.classList.add('event-card');
    cardDetalhe.classList.add("card-detalhe");
    cardBtn.classList.add("card-btn");

    card.appendChild(cardDetalhe);
    card.appendChild(cardBtn);

    const data = document.createElement('h3');
    data.textContent = evento.data;
    cardDetalhe.appendChild(data);

    const nome = document.createElement('h2');
    nome.textContent = evento.nome;
    cardDetalhe.appendChild(nome);

    const tipo = document.createElement('h4');
    tipo.textContent = evento.tipo;
    cardDetalhe.appendChild(tipo);

    const local = document.createElement('h3');
    local.textContent = evento.local;
    cardDetalhe.appendChild(local);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Cancelar';
    deleteBtn.addEventListener('click', function () {
        const index = events.indexOf(evento);
        if (index > -1) {
            events.splice(index, 1);
        }
        card.remove();
    });
    cardBtn.appendChild(deleteBtn);

    return card;
}

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}