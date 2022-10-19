//Seccion de Declaracion de Variables y funciones
let ataqueJugador         = '';
let ataqueEnemigo         = '';
let resultadoCombate      = '';
let vidasEnemigo          = 3;
let vidasJugador          = 3;
let seleccionado          = 'Nadie';
let mascotaJugador        = document.getElementById('mascota-jugador');
let mascotaEnemigo        = document.getElementById('mascota-enemigo');
let hipodoge              = document.getElementById('hipodoge');
let capipepo              = document.getElementById('capipepo');
let ratigüeya             = document.getElementById('ratigüeya');
let langostelvis          = document.getElementById('langostelvis');
let tucapalma             = document.getElementById('tucapalma');
let pydos                 = document.getElementById('pydos');
let tipoAtaqueJugador     = document.getElementById('tipo-ataque-jugador');
let tipoAtaqueEnemigo     = document.getElementById('tipo-ataque-enemigo');
let vidaMascotaJugador    = document.getElementById('vida-mascota-jugador');
let vidaMascotaEnemigo    = document.getElementById('vida-mascota-enemigo');
let botonMascota          = document.getElementById('boton-mascotas');
let botonFuego            = document.getElementById('boton-fuego');
let botonAgua             = document.getElementById('boton-agua');
let botonTierra           = document.getElementById('boton-tierra');
let botonReiniciar        = document.getElementById('boton-reiniciar');
let seccionAtaque         = document.getElementById('seleccionar-ataque')
let seccionMensajes       = document.getElementById('mensajes')
let seccionReiniciar      = document.getElementById('reiniciar')



function iniciarJuego(){
    botonReiniciar.addEventListener('click', reiniciarJuego)
    botonMascota.addEventListener('click', seleccionarMascotaJugador);
    botonFuego.addEventListener('click', ataqueFuego);
    botonAgua.addEventListener('click', ataqueAgua);
    botonTierra.addEventListener('click', ataqueTierra);
    seccionAtaque.style.display = 'none'
    seccionMensajes.style.display = 'none'
    seccionReiniciar.style.display = 'none'
}

function random(min,max){
    let random = Math.floor(Math.random()*(max-min+1)+min);
    return random
}

function seleccionarMascotaJugador(){
    
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
    mascotaJugador.innerHTML = seleccionado;
    seleccionarMascotasEnemigo();
    if(seleccionado != ''){
        habilitarSecciones(seccionAtaque);
        habilitarSecciones(seccionMensajes);
    }
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
}
function ataqueAgua(){
    ataqueJugador = 'AGUA';
    combate();
}
function ataqueTierra(){
    ataqueJugador = 'TIERRA';
    combate();
}

function combate(){
    let seleccionAtaqueEnemigo = random(1,3);
    switch(seleccionAtaqueEnemigo){
        case 1:
            ataqueEnemigo = 'FUEGO';
            break;
        case 2:
            ataqueEnemigo = 'AGUA';
            break;
        case 3:
            ataqueEnemigo = 'TIERRA';
            break;
    }

    if(ataqueJugador == ataqueEnemigo){
        resultadoCombate  = 'Empate';
    }else if((ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO')||(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA')||(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA')){
        resultadoCombate  = 'GANASTE';
        vidasEnemigo--
        vidaMascotaEnemigo.innerHTML = vidasEnemigo;
    }else{
        resultadoCombate = 'PERDISTE'
        vidasJugador--
        vidaMascotaJugador.innerHTML = vidasJugador;
    }
    revisarVidas()
    
}

function revisarVidas(){
    if(vidasEnemigo == 0){
        crearMensaje('p','mensajes',`Ganaste!!!, Tu ${seleccionado} es muy Fuerte.`)
        inhabilitarBotones();
        habilitarSecciones(seccionReiniciar);
    }else if(vidasJugador == 0){
        crearMensaje('p','mensajes',`Perdiste!!!, Tu ${seleccionado} es muy Debil aun.`)
        inhabilitarBotones();
        habilitarSecciones(seccionReiniciar);
    }else if(vidasEnemigo > 0 && vidasJugador > 0){
        crearMensaje('p','mensajes',`Tu mascota ataco con ${ataqueJugador}, la mascota del enemigo ataco con ${ataqueEnemigo} - ${resultadoCombate}`);
    }
}

function crearMensaje(elemento,identificador,textoHTML){
    let mensajeCombate = document.createElement(elemento);
    let textoCombate = document.createTextNode(textoHTML);
    mensajeCombate.appendChild(textoCombate);
    const SECCIONMENSAJE = document.getElementById(identificador);
    document.body.insertBefore(mensajeCombate, SECCIONMENSAJE);
}

function inhabilitarBotones(){
    botonAgua.disabled = true
    botonFuego.disabled = true
    botonTierra.disabled = true
    botonMascota.disabled = true

}

function habilitarSecciones(elemento){
    elemento.style.display = 'block';
}

function reiniciarJuego(){
    location.reload();
}

window.addEventListener('load', iniciarJuego);
