/*const listaDeToppings = document.getElementById('lista-toppings');

const toppingNuevo = document.createElement('li');
toppingNuevo.classList.add('topping', 'fondo-marron');
toppingNuevo.innerText = 'Salame';

listaDeToppings.append(toppingNuevo);

toppingNuevo.remove();
*/

const toppings = document.getElementsByClassName('topping');

for(const topping of toppings) {
    topping.addEventListener('click', (e) => {
        console.log(e.target.innerText);
    });
}
