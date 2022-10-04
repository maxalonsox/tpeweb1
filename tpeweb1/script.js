let btn = document.querySelector('#botonEnviar');
let nav = document.querySelector('#iconNav');
nav.addEventListener('click', cambiarNav);
if (btn) {
    btn.addEventListener('click', enviar);
}

function enviar() {
   let valorCaptcha = 62;
   if (valorCaptcha == document.querySelector('#inputCaptcha').value) {
       document.querySelector('#p-resultado').innerHTML = "Enviado";
   } else {
       document.querySelector('#p-resultado').innerHTML = "Incorrecto!";
   }
}

function cambiarNav() {
    var x = document.querySelector("#myLinks");
    if (x.style.display == "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

let btnAdd = document.querySelector("#btnAgregar");
if (btnAdd) {
    btnAdd.addEventListener("click", agregar);
}

let btnAdd3 = document.querySelector("#btnAgregar3");
if (btnAdd3) {
    btnAdd3.addEventListener("click", agregar3);
}

let btnVaciarTabla = document.querySelector("#btnVaciarTabla");
if (btnVaciarTabla) {
    btnVaciarTabla.addEventListener("click", vaciarTabla);
}

let reseñas = [];
let generadorId = 0;

function vaciarTabla() {
    for (let i = 0; i < reseñas.length; i++) {
        document.querySelector("#reseña"+i).remove();
    }
    reseñas.splice(0,reseñas.length);
    generadorId = 0;
}

function agregar3() {
    agregar();
    agregar();
    agregar();
}

function agregar() {
    let nombreCancion;
    if (document.querySelector("#nombreCancion").value == "") nombreCancion = "[Vacío]";
    else nombreCancion = document.querySelector("#nombreCancion").value;
    let puntajeCancion;
    if (document.querySelector("#puntajeCancion").value == "") puntajeCancion = 0;
    else puntajeCancion = parseInt(document.querySelector("#puntajeCancion").value);
    let comentarioCancion;
    if (document.querySelector("#comentarioCancion").value == "") comentarioCancion = "[Vacío]";
    else comentarioCancion = document.querySelector("#comentarioCancion").value;
    let accionCancion = '<button title="Borrar reseña"><i class="fa-solid fa-trash-can"></i></button>';
    let reseña = {
        "nombreCancion": nombreCancion,
        "puntajeCancion": puntajeCancion,
        "comentarioCancion": comentarioCancion,
        "accionCancion": accionCancion,
    }
    reseñas.push(reseña);
    if (puntajeCancion == 5) document.querySelector("#tablaReseñas").innerHTML += '<tr id="reseña'+generadorId+'" class="maximoPuntaje"> <th class="cancionTabla">'+reseña.nombreCancion+'</th> <th class="puntajeTabla">'+calcularPuntaje(reseña.puntajeCancion)+'</th><th class="comentarioTabla"><textarea readonly="true">'+reseña.comentarioCancion+'</textarea></th><th class="accionTabla">'+reseña.accionCancion+'</th></tr>';
    else document.querySelector("#tablaReseñas").innerHTML += '<tr id="reseña'+generadorId+'"> <th class="cancionTabla">'+reseña.nombreCancion+'</th> <th class="puntajeTabla">'+calcularPuntaje(reseña.puntajeCancion)+'</th><th class="comentarioTabla"><textarea readonly="true">'+reseña.comentarioCancion+'</textarea></th><th class="accionTabla">'+reseña.accionCancion+'</th></tr>';
    generadorId++;
}

function calcularPuntaje(puntajeNumeros) {
    let puntajeEstrellas;
    if ((puntajeNumeros) == 0) puntajeEstrellas = '<i class="fa-regular fa-star"><i class="fa-regular fa-star"><i class="fa-regular fa-star"><i class="fa-regular fa-star"><i class="fa-regular fa-star">';
    if ((puntajeNumeros) == 1) puntajeEstrellas = '<i class="fa-solid fa-star"><i class="fa-regular fa-star"><i class="fa-regular fa-star"><i class="fa-regular fa-star"><i class="fa-regular fa-star">';
    if ((puntajeNumeros) == 2) puntajeEstrellas = '<i class="fa-solid fa-star"><i class="fa-solid fa-star"><i class="fa-regular fa-star"><i class="fa-regular fa-star"><i class="fa-regular fa-star">';
    if ((puntajeNumeros) == 3) puntajeEstrellas = '<i class="fa-solid fa-star"><i class="fa-solid fa-star"><i class="fa-solid fa-star"><i class="fa-regular fa-star"><i class="fa-regular fa-star">';
    if ((puntajeNumeros) == 4) puntajeEstrellas = '<i class="fa-solid fa-star"><i class="fa-solid fa-star"><i class="fa-solid fa-star"><i class="fa-solid fa-star"><i class="fa-regular fa-star">';
    if ((puntajeNumeros) == 5) puntajeEstrellas = '<i class="fa-solid fa-star"><i class="fa-solid fa-star"><i class="fa-solid fa-star"><i class="fa-solid fa-star"><i class="fa-solid fa-star">';
    return puntajeEstrellas;
}

/*PARA EVITAR QUE AL PRESIONAR ENTER EN CUALQUIER CAMPO DEL FORM SE ENVÍE EL FORMULARIO*/

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('input[type=text]').forEach( node => node.addEventListener('keypress', e => {
        if(e.keyCode == 13) {
            e.preventDefault();
        }
    }))
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('input[type=number]').forEach( node => node.addEventListener('keypress', e => {
        if(e.keyCode == 13) {
            e.preventDefault();
        }
    }))
});