import { habilitarSecciones , seccionAtaque , seccionMensajes } from "../script.js";

const verMapa = document.getElementById('ver-mapa');
const mapa = document.getElementById('mapa');
const botonColision = document.getElementById('colision');
const lienzo = mapa.getContext('2d');
const imgCapipepo = new Image()

botonColision.addEventListener('click',eventoColision)

function contenidoCanvas(){

}

function eventoColision (){
    console.log('muestra batalla')
    habilitarSecciones(seccionAtaque,'grid');
    habilitarSecciones(seccionMensajes,'flex');
    habilitarSecciones(verMapa, 'none')
}




export { verMapa, mapa , eventoColision, lienzo}