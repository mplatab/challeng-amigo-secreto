const inputName = document.querySelector('#amigo');
const listaAmigos = document.querySelector('#listaAmigos');
const resultado = document.querySelector('#resultado');
const buttonAdd = document.querySelector('.button-add');
const btnSortear = document.querySelector('.button-draw');

let nombres = [];

const agregarAmigo = () => {
    let name = inputName.value.trim();

    if (!name || !isNaN(name)) {
        alert('Ingrese un nombre válido.');
        return;
    }

    if (nombres.includes(name)) {
        alert('Este nombre ya fue agregado.');
        return;
    }

    let item = document.createElement('li');
    item.classList.add('list-name');
    item.textContent = name;

    nombres.push(name);
    listaAmigos.appendChild(item);
    inputName.value = '';
};

const sortearAmigo = () => {
    if (nombres.length < 2) {
        alert('Debe haber al menos dos nombres para sortear.');
        return;
    }

    let indice = Math.floor(Math.random() * nombres.length);
    let name = nombres[indice];

    resultado.innerHTML = ''; // Limpiar resultados anteriores
    let item = document.createElement('li');
    item.textContent = `🎉 ${name} es el amigo secreto 🎁`;
    resultado.appendChild(item);

    listaAmigos.classList.add('display-none');

    btnSortear.disabled = true;
    buttonAdd.disabled = true;
};

const reiniciarSorteo = () => {
    nombres = [];
    listaAmigos.innerHTML = '';
    resultado.innerHTML = '';
    listaAmigos.classList.remove('display-none');
    // buttonReset.classList.add('display-none')
    btnSortear.disabled = false;
    buttonAdd.disabled = false;
};

// Agregar un botón de reinicio dinámicamente
const buttonReset = document.createElement('button');
buttonReset.textContent = '🔄 Reiniciar';
buttonReset.classList.add('button-reset');
buttonReset.onclick = reiniciarSorteo;
document.querySelector('.button-container').appendChild(buttonReset);
