const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

//Actulizar el texto de los parrafos
textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

function actulizarColor(rojo,verde,azul) {
    const colorRGB = `rgb(${rojo},${verde},${azul})`;
    document.body.style.backgroundColor = colorRGB;
}

//Actulizar el Red 
inputRojo.addEventListener('change', (e) => {
    rojo = e.target.value;
    textoRojo.innerText = rojo;
    actulizarColor(rojo,verde,azul);
});

//Actulizar el Green 
inputVerde.addEventListener('change', (e) => {
    verde = e.target.value;
    textoVerde.innerText = verde;
    actulizarColor(rojo,verde,azul);
});

//Actulizar el Blue 
inputAzul.addEventListener('change', (e) => {
    azul = e.target.value;
    textoAzul.innerText = azul;
    actulizarColor(rojo,verde,azul);
});