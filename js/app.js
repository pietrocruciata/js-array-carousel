// CREARE UN ARRAY CON LE IMMAGINI 
const imagesArray = [
    "./img/01.webp",
    "./img/02.webp",
    "./img/03.webp",
    "./img/04.webp",
    "./img/05.webp"
]

let itemArray = 0;
const itemsSLiderDOMElement = document.querySelector('.items-slider')
let itemsHTML = '';

//CREO UN CICLO FOR CONTENENTE UN TAMPLATE LITERAL
for (let i = 0; i < imagesArray.length; i++) {

    const imagePath = imagesArray[i];

    const siliderItemHTML = `
    <div class="item">
         <img src="${imagePath}">
    </div>
    `

    itemsHTML += siliderItemHTML;
}

itemsSLiderDOMElement.innerHTML = itemsHTML;

const divItemList = document.getElementsByClassName('item')
//AGGIUNGO LA CLASSE 'ACTIVE' PER DARE IL DISPLAY BLOCK ALL'ELEMENTO CHE VOGLIO VISUALIZZARE
divItemList[itemArray].classList.add('active');

//COLLEGARE I BOTTONI 
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

//ASCOLTO IL BOTTONE NEXT
next.addEventListener('click', function () {
    divItemList[itemArray].classList.remove('active');

    itemArray++;

    if (itemArray === imagesArray.length) {
        itemArray = 0
    }

    divItemList[itemArray].classList.add('active');


})

//ASCOLTO IL BOTTONE PREV
prev.addEventListener('click', function () {
    divItemList[itemArray].classList.remove('active');

    itemArray--;

    if (itemArray < 0) {
        itemArray = 4
    }

    divItemList[itemArray].classList.add('active');

})







