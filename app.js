//Declarando los listeners
const escuchandoElBody = document.body.addEventListener("click", elementoClick);


//-----------------FUNCIONES---------------------//

    //Funcion principal
function elementoClick(e) {
    e.preventDefault();
    //Definiendo los elementos que pueden ser clickados
    const cardTittleClicked = e.target.classList.contains('card-tittle');
    const cardTittleArrowClicked = e.target.classList.contains('card-tittle-arrow');
    const cardAcording = e.target.classList.contains('card-acording');
    const cardTittleTextClicked = e.target.classList.contains('card-tittle-text');

    if (cardTittleClicked) {
        seClickoEnElPadre(e);
    } else if (cardTittleTextClicked || cardTittleArrowClicked || cardAcording) {
        seClickoEnHermano(e);
    }
}



    //Reinicia los acordeones al dar click, se cierra el que estaba abierto si da click en otro
function reiniciaTodosLosAcordeones() {
    //Selecciona todos los titulos de acordeones y los convierte a un array
    let tittle = document.querySelectorAll('.card-tittle-text');


    /*Recorre cada titulo y luego recorre cada clase dentro de los titulos
    posterior a eso verifica si cuentan con la clase tittle active y si es así
    remueve la clase activa del elemento y de sus hermanos || Es de nivel EXPONENCIAL, se debe buscar OPTIMIZAR
     */
    for (let i = 0; i < tittle.length; i++) {
        for (let j = 0; j < tittle[i].classList.length; j++) {
            if (tittle[i].classList[j] == 'tittle-active') {
                tittle[i].classList.remove('tittle-active');
                tittle[i].parentElement.childNodes[3].classList.remove('active-Arrow');
                tittle[i].parentElement.childNodes[5].classList.remove('active');
            }
        }
    }
}

function seClickoEnElPadre(e) {
    const elemento = e.target.childNodes[5];
    const arrow = e.target.childNodes[3];
    const tittle = e.target.childNodes[1];
    const elementoActivo = elemento.classList.contains('active');
    if (elementoActivo) {
        reiniciaTodosLosAcordeones();
        cerrarAcordeon(elemento, arrow, tittle);
    } else {
        reiniciaTodosLosAcordeones();
        abrirAcordeon(elemento, arrow, tittle);
    }
}

function seClickoEnHermano(e) {
    const elementoHermano = e.target.parentElement.childNodes[5];
    const arrowHermana = e.target.parentElement.childNodes[3];
    const padreHermano = e.target.parentElement.childNodes[1];
    const elementoHermanoActivo = elementoHermano.classList.contains('active');
    if (elementoHermanoActivo) {
        reiniciaTodosLosAcordeones();
        cerrarAcordeon(elementoHermano, arrowHermana, padreHermano);
    } else {
        reiniciaTodosLosAcordeones();
        abrirAcordeon(elementoHermano, arrowHermana, padreHermano);
    }
}

function abrirAcordeon(elemento, arrow, tittle) {
    //Añadimos el Active al Div oculto
    elemento.classList.add('active');
    //Rotamos la arrow
    arrow.classList.add('active-Arrow');
    //Le damos negrita al title
    tittle.classList.add('tittle-active');
}


function cerrarAcordeon(elemento, arrow, tittle) {
    elemento.classList.remove('active');
    arrow.classList.remove('active-Arrow');
    //Le quitamos negrita al title
    tittle.classList.remove('tittle-active');
}





