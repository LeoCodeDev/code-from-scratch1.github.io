//Seccion de Declaracion de Variables y funciones
let mokeponesArr = [];
let ataqueJugador = '';
let ataqueEnemigo = '';
let resultadoCombate = '';
let vidasEnemigo = 3 ;
let vidasJugador = 3 ;
let seleccionado = '';
const mascotaJugador = document.getElementById('mascota-jugador');
const mascotaEnemigo = document.getElementById('mascota-enemigo');
const hipodoge = document.getElementById('hipodoge');
const capipepo = document.getElementById('capipepo');
const ratigüeya = document.getElementById('ratigüeya');
const langostelvis = document.getElementById('langostelvis');
const tucapalma = document.getElementById('tucapalma');
const pydos = document.getElementById('pydos');
const tipoAtaqueJugador = document.getElementById('tipo-ataque-jugador');
const tipoAtaqueEnemigo = document.getElementById('tipo-ataque-enemigo');
const vidaMascotaJugador = document.getElementById('vida-mascota-jugador');
const vidaMascotaEnemigo = document.getElementById('vida-mascota-enemigo');
const botonMascota = document.getElementById('boton-mascotas');
const botonFuego = document.getElementById('boton-fuego');
const botonAgua = document.getElementById('boton-agua');
const botonTierra = document.getElementById('boton-tierra');
const botonReiniciar = document.getElementById('boton-reiniciar');
const seccionAtaque = document.getElementById('seleccionar-ataque')
const seccionMensajes = document.getElementById('mensajes');
const seccionReiniciar = document.getElementById('reiniciar');
const contenedorSeleccion = document.getElementById('contenedor-seleccion');
const contenedorReiniciar = document.getElementById('contenedor-reiniciar');
const resultadoTruno = document.getElementById('resultado-turno');
const nombreMokeponJugador = document.getElementById('nombre-mokepon-seleccionado-jugador');
const imgMokeponJugador = document.getElementById('mokepon-seleccionado-jugador');
const nombreMokeponEnemigo = document.getElementById('nombre-mokepon-seleccionado-enemigo');
const imgMokeponEnemigo = document.getElementById('mokepon-seleccionado-enemigo');

class Mokepon {
    constructor(nombre,tipo,imagen,vida) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.imagen = imagen;
        this.vida = vida;
        this.ataque = [];
    }
}

let capipepoObj = new Mokepon('Capipepo','agua','./assets/capipepo.png','3');
let hipodogeObj = new Mokepon('Hipodoge','agua','./assets/hipodoge.png','3');
let langostelvisObj = new Mokepon('Langostelvis','agua','./assets/langostelvis.png','3');
let pydosObj = new Mokepon('Pydos','agua','./assets/pydos.png','3');
let ratigueyaObj = new Mokepon('Ratigueya','agua','./assets/ratigueya.png','3');
let tucapalmaObj = new Mokepon('Tucapalma','agua','./assets/tucapalma.png','3');

mokeponesArr.push(capipepoObj,hipodogeObj,langostelvisObj,pydosObj,ratigueyaObj,tucapalmaObj);

class Ataques {
    constructor(nombre,tipo,id,dmg){
        this.nombre = nombre;
        this.tipo = tipo;
        this.id = id;
        this.dmg = dmg;
    }
}

let infernalAtk = new Ataques ('Fuego Infernal','🔥','boton-fuego',15);
let llamaradaAtk = new Ataques ('Llamarada','🔥','boton-fuego',9);
let vulcanoAtk = new Ataques ('Vulcano','🔥','boton-fuego',8);
let luzBrillanteAtk = new Ataques ('Luz Brillante','🔥','boton-fuego',11);
let hydrojetAtk = new Ataques ('Hydrojet','💧','boton-agua',23);
let tsunamiAtk = new Ataques ('Tsunami','💧','boton-agua',4);
let lluviaAtk = new Ataques ('Lluvia Torrencial','💧','boton-agua',9);
let ruedaAtk = new Ataques ('Rueda de Agua','💧','boton-agua',7);
let penonazolAtk = new Ataques ('Peñonazo','🌱','boton-tierra',1);
let terremotoAtk = new Ataques ('Terremoto','🌱','boton-tierra',12);
let pantanoAtk = new Ataques ('Pantano Peligroso','🌱','boton-tierra',6);
let raicesAtk = new Ataques ('Raices Traicioneras','🌱','boton-tierra',2);
let healingAtk = new Ataques ('Vigor','✨','boton-healing',12);

capipepoObj.ataque.push(lluviaAtk,pantanoAtk,raicesAtk);
hipodogeObj.ataque.push(hydrojetAtk,tsunamiAtk,ruedaAtk,healingAtk);
langostelvisObj.ataque.push(terremotoAtk,penonazolAtk,raicesAtk,pantanoAtk);
pydosObj.ataque.push(infernalAtk,llamaradaAtk,vulcanoAtk,terremotoAtk);
ratigueyaObj.ataque.push(luzBrillanteAtk,vulcanoAtk,penonazolAtk);
tucapalmaObj.ataque.push(hydrojetAtk,pantanoAtk,raicesAtk,tsunamiAtk);

console.log(mokeponesArr);

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
    let srcJugador = 'assets/' + seleccionado + '.png';
    colocarAtributo(imgMokeponJugador,'src',srcJugador);
    nombreMokeponJugador.innerHTML = seleccionado;
    mascotaJugador.innerHTML = seleccionado;
    
    seleccionarMascotasEnemigo();
    if(seleccionado != ''){
        habilitarSecciones(contenedorSeleccion,'none');
        habilitarSecciones(seccionAtaque,'grid');
        habilitarSecciones(seccionMensajes,'flex');
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
    nombreMokeponEnemigo.innerHTML = mascotaEnemigoSeleccionada;
    let srcEnemigo = 'assets/' + mascotaEnemigoSeleccionada + '.png';
    colocarAtributo(imgMokeponEnemigo,'src',srcEnemigo);
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
        vidasEnemigo--;
        vidaMascotaEnemigo.innerHTML = vidasEnemigo;
    }else{
        resultadoCombate = 'PERDISTE';
        vidasJugador--;
        vidaMascotaJugador.innerHTML = vidasJugador;
    }

    tipoAtaqueEnemigo.innerHTML = ataqueEnemigo;
    tipoAtaqueJugador.innerHTML = ataqueJugador;
    resultadoTruno.innerHTML = resultadoCombate;
    colocarAtributo(tipoAtaqueJugador,'class',ataqueJugador);
    colocarAtributo(tipoAtaqueEnemigo,'class',ataqueEnemigo);
    colocarAtributo(resultadoTruno,'class',resultadoCombate);
    revisarVidas()
    
}

function revisarVidas(){
    if(vidasEnemigo == 0){
        crearMensaje(seccionMensajes,`<p><span class="${resultadoCombate}">Ganaste!!!</span>, Tu ${seleccionado} es muy Fuerte.</p>`)
        inhabilitarBotones();
        habilitarSecciones(seccionReiniciar,'flex');
    }else if(vidasJugador == 0){
        crearMensaje(seccionMensajes,`<p><span class="${resultadoCombate}">Perdiste!!!</span>, Tu ${seleccionado} es muy Debil aun.</p>`)
        inhabilitarBotones();
        habilitarSecciones(seccionReiniciar,'flex');
    }
}

function crearMensaje(slector,textoHTML){
    slector.innerHTML += textoHTML;
}

function inhabilitarBotones(){
    botonAgua.disabled = true;
    botonFuego.disabled = true;
    botonTierra.disabled = true;
    botonMascota.disabled = true;

}

function habilitarSecciones(elemento,atributo){
    elemento.style.display = atributo;
}

function colocarAtributo(identificador,atributo,valorAtributo){
    return identificador.setAttribute(atributo,valorAtributo);
}

function reiniciarJuego(){
    location.reload();
}

window.addEventListener('load', iniciarJuego);