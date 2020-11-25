//Declarando los listeners
document.body.addEventListener("click", elementoClick);

//Declaramos las funciones
    //Funcion que detecta que elemento se dio click y se llama a la funcion para abrir o cerrar
function elementoClick (e){
    //Previniendo un efecto default
    e.preventDefault();
    //Definiendo los elementos que pueden ser clickados
    const cardTittleClicked = e.target.classList.contains('card-tittle')
    const cardTittleArrowClicked = e.target.classList.contains('card-tittle-arrow')
    const cardTittleTextClicked = e.target.classList.contains('card-tittle-text')
    //Condicional que verifica si los elementos clickados son padres
    if (cardTittleClicked) {
        //Se selecciona el hijo que será el que se activará
        const elemento = e.target.childNodes[5];
        //Se verifica si el elemento hijo esta activo o no
        const elementoActivo = elemento.classList.contains('active')
        //Si el elemento esta activo, al dar click se ocultara, sino se hará lo contrario
        if (elementoActivo){
            cerrarAcordeon(elemento);
        } else {
            abrirAcordeon(elemento);
        }
   }
   //Condicional que verifica si el elemento cickado es hermano
   else if(cardTittleTextClicked || cardTittleArrowClicked){
        const elementoHermano = e.target.parentElement.childNodes[5]
        const elementoHermanoActivo = elementoHermano.classList.contains('active')
        if (elementoHermanoActivo){
            cerrarAcordeon(elementoHermano);
        } else{
            abrirAcordeon(elementoHermano);
        }
    }
}

function abrirAcordeon (elemento){
    elemento.classList.add('active');
}


function cerrarAcordeon (elemento){
    elemento.classList.remove('active')
}

