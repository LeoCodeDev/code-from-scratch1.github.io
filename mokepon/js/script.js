//Seccion de Declaracion de Variables y funciones

function iniciarJuego(){
    let botonMascota = document.getElementById('boton-mascotas');
    botonMascota.addEventListener('click', seleccionarMascotaJugador);
    let botonFuego    = document.getElementById('boton-fuego');
    let botonAgua     = document.getElementById('boton-agua');
    let botonTierra   = document.getElementById('boton-tierra');
    botonFuego.addEventListener('click', ataqueFuego);
    botonAgua.addEventListener('click', ataqueAgua);
    botonTierra.addEventListener('click', ataqueTierra);
}

let ataqueJugador  = '';
let mascotaJugador = document.getElementById('mascota-jugador');
let mascotaEnemigo = document.getElementById('mascota-enemigo');
let hipodoge       = document.getElementById('hipodoge');
let capipepo       = document.getElementById('capipepo');
let ratigüeya      = document.getElementById('ratigüeya');
let langostelvis   = document.getElementById('langostelvis');
let tucapalma      = document.getElementById('tucapalma');
let pydos          = document.getElementById('pydos');
let tipoAtaqueJugador = document.getElementById('tipo-ataque-jugador');
let tipoAtaqueEnemigo = document.getElementById('tipo-ataque-enemigo');
let resultadoCombate = document.getElementById('resultado-combate');

function random(min,max){
    let random = Math.floor(Math.random()*(max-min+1)+min);
    return random
}

function seleccionarMascotaJugador(){
    let seleccionado = 'Nadie';
    
    if(hipodoge.checked){
        seleccionado = hipodoge.id;
    }else if(capipepo.checked){
        seleccionado = capipepo.id;
    }else if(ratigüeya.checked){
        seleccionado = ratigüeya.id;
    }else if(langostelvis.checked){
        seleccionado = langostelvis.id;
    }else if(tucapalma.checked){
        seleccionado = tucapalma.id;
    }else if(pydos.checked){
        seleccionado = pydos.id;
    }else{
        alert('Por favor selecciona una mascota')
    }
    alert(`Seleccionaste a ${seleccionado}`);
    mascotaJugador.innerHTML = seleccionado;
    seleccionarMascotasEnemigo();
}

function seleccionarMascotasEnemigo(){
    let seleccionEnemiga = random(1,6);
    
    let mascotaEnemigoSeleccionada = '';

    switch(seleccionEnemiga){
        case 1:
            mascotaEnemigoSeleccionada = hipodoge.id;
            break;
        case 2:
            mascotaEnemigoSeleccionada = capipepo.id;
            break;
        case 3:
            mascotaEnemigoSeleccionada = ratigüeya.id;
            break;
        case 4:
            mascotaEnemigoSeleccionada = langostelvis.id;
            break;
        case 5:
            mascotaEnemigoSeleccionada = tucapalma.id;
            break;
        case 6:
            mascotaEnemigoSeleccionada = pydos.id;
            break;
        default:
            mascotaEnemigoSeleccionada = 'Nadie'
    }

    mascotaEnemigo.innerHTML = mascotaEnemigoSeleccionada;
    return seleccionEnemiga;
}

function ataqueFuego(){
    ataqueJugador = 'FUEGO';
    combate();
    console.log('Fuego j');
}
function ataqueAgua(){
    ataqueJugador = 'AGUA';
    combate();
    console.log('Agua j');
}
function ataqueTierra(){
    ataqueJugador = 'TIERRA';
    combate();
    console.log('Tierra j');
}

function combate(){
    let seleccionAtaqueEnemigo = random(1,3);
    let ataqueEnemigo = "";
    switch(seleccionAtaqueEnemigo){
        case 1:
            ataqueEnemigo = "FUEGO";
            break;
        case 2:
            ataqueEnemigo = "AGUA";
            break;
        case 3:
            ataqueEnemigo = "TIERRA";
            break;
        default:
            ataqueEnemigo = null;
    }

    console.log(ataqueEnemigo + ' E')

    if(ataqueJugador == ataqueEnemigo){
        tipoAtaqueJugador.innerHTML = ataqueJugador;
        tipoAtaqueEnemigo.innerHTML = ataqueEnemigo;
        resultadoCombate.innerHTML  = 'Empate';
    }else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){
        tipoAtaqueJugador.innerHTML = ataqueJugador;
        tipoAtaqueEnemigo.innerHTML = ataqueEnemigo;
        resultadoCombate.innerHTML  = 'GANASTE';
    }else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
        tipoAtaqueJugador.innerHTML = ataqueJugador;
        tipoAtaqueEnemigo.innerHTML = ataqueEnemigo;
        resultadoCombate.innerHTML  = 'GANASTE';
    }else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
        tipoAtaqueJugador.innerHTML = ataqueJugador;
        tipoAtaqueEnemigo.innerHTML = ataqueEnemigo;
        resultadoCombate.innerHTML  = 'GANASTE';
    }else{
        tipoAtaqueJugador.innerHTML = ataqueJugador;
        tipoAtaqueEnemigo.innerHTML = ataqueEnemigo;
        resultadoCombate.innerHTML  = 'PERDISTE';
    }
}

window.addEventListener('load', iniciarJuego);
