//Seccion de Declaracion de Variables y funciones
let mokeponesArr = [];
let elementosMoke = [];
let ataqueJugador = '';
let ataqueEnemigo = '';
let resultadoCombate = '';
let vidasEnemigo = 3 ;
let vidasJugador = 3 ;
let seleccionado = '';
let contenedorMokepones;
let contenedorElegidoJugador;
let contenedorElegidoEnemigo;
let ataquesMokepon;
let capipepo;
let hipodoge;
let ratigueya;
let langostelvis;
let tucapalma;
let pydos;
const mascotaJugador = document.getElementById('mascota-jugador');
const mascotaEnemigo = document.getElementById('mascota-enemigo');
const tarjetasMokepones = document.querySelector('.tarjetas-mokepones');
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
const nombreMokeponEnemigo = document.getElementById('nombre-mokepon-seleccionado-enemigo');
const imgMokeponEnemigo = document.getElementById('mokepon-seleccionado-enemigo');
const imgJugador = document.querySelector('.img-jugador');
const imgEnemigo = document.querySelector('.img-enemigo');
const contenedorBotonesAtaques = document.querySelector('.contenedor-botones-ataque');

class Mokepon {
    constructor(nombre,id,tipo,imagen,vida) {
        this.nombre = nombre;
        this.id = id;
        this.tipo = tipo;
        this.imagen = imagen;
        this.vida = vida;
        this.ataque = [];
    }
}

let capipepoObj = new Mokepon('Capipepo','capipepo','agua','./assets/capipepo.png','120');
let hipodogeObj = new Mokepon('Hipodoge','hipodoge','agua','./assets/hipodoge.png','3');
let langostelvisObj = new Mokepon('Langostelvis','langostelvis','agua','./assets/langostelvis.png','3');
let pydosObj = new Mokepon('Pydos','pydos','agua','./assets/pydos.png','3');
let ratigueyaObj = new Mokepon('Ratigüeya','ratigueya','agua','./assets/ratigueya.png','3');
let tucapalmaObj = new Mokepon('Tucapalma','tucapalma','agua','./assets/tucapalma.png','3');

mokeponesArr.push(capipepoObj,hipodogeObj,langostelvisObj,pydosObj,ratigueyaObj,tucapalmaObj);

class Ataques {
    constructor(nombre,tipo,id,dmg){
        this.nombre = nombre;
        this.tipo = tipo;
        this.id = id;
        this.dmg = dmg;
    }
}

let infernalAtk = new Ataques ('Fuego Infernal','🔥','infernal',15);
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

function iniciarJuego(){
    mokeponesArr.forEach((mok) => {
        contenedorMokepones = `
        <input type="radio" name="mascotas" id=${mok.id} class="radius-inputs">
                    <label for=${mok.id} class="mokepones">
                        <p>${mok.nombre}</p>
                        <img src=${mok.imagen} alt=${mok.nombre}>
                    </label>
            `;
            tarjetasMokepones.innerHTML += contenedorMokepones;

    })

    capipepo = document.getElementById('capipepo');
    hipodoge = document.getElementById('hipodoge');
    ratigueya = document.getElementById('ratigueya');
    langostelvis = document.getElementById('langostelvis');
    tucapalma = document.getElementById('tucapalma');
    pydos = document.getElementById('pydos');

    elementosMoke.push(capipepo,hipodoge,langostelvis,pydos,ratigueya,tucapalma);
    
    botonReiniciar.addEventListener('click', reiniciarJuego)
    botonMascota.addEventListener('click', seleccionarMascotaJugador);
    /* botonFuego.addEventListener('click', ataqueFuego);
    botonAgua.addEventListener('click', ataqueAgua);
    botonTierra.addEventListener('click', ataqueTierra); */
    seccionAtaque.style.display = 'none'
    seccionMensajes.style.display = 'none'
    seccionReiniciar.style.display = 'none'
}

function random(min,max){
    let random = Math.floor(Math.random()*(max-min+1)+min);
    return random
}

function seleccionarMascotaJugador(){
    for(i = 0; i < elementosMoke.length; i++){
        if(elementosMoke[i].checked){
            contenedorElegidoJugador = `
            <label for=${mokeponesArr[i].id} class="mokepones">
                <p>${mokeponesArr[i].nombre}</p>
                <img src=${mokeponesArr[i].imagen} alt=${seleccionado}>
            </label>
            `
            imgJugador.innerHTML = contenedorElegidoJugador;
            mascotaJugador.innerHTML = mokeponesArr[i].nombre;
            seleccionado = mokeponesArr[i];
        }
    }
    if(seleccionado == ''){
    alert('Por favor selecciona una mascota');
    }
    seleccionarMascotasEnemigo();
    if(seleccionado != ''){
        habilitarSecciones(contenedorSeleccion,'none');
        habilitarSecciones(seccionAtaque,'grid');
        habilitarSecciones(seccionMensajes,'flex');
    }
    botonesDeAtaque();
}

function seleccionarMascotasEnemigo(){
    let seleccionEnemiga = random(0,mokeponesArr.length -1);
    let mascotaEnemigoSeleccionada = '';
    
    mascotaEnemigoSeleccionada = elementosMoke[seleccionEnemiga].id;
    contenedorElegidoEnemigo = `
        <label for=${mascotaEnemigoSeleccionada}" class="mokepones">
            <p>${mokeponesArr[seleccionEnemiga].nombre}</p>
            <img src=${mokeponesArr[seleccionEnemiga].imagen} alt=${mascotaEnemigoSeleccionada}>
        </label>
    `
    imgEnemigo.innerHTML = contenedorElegidoEnemigo;
    mascotaEnemigo.innerHTML = mokeponesArr[seleccionEnemiga].nombre;
}

function botonesDeAtaque(){
    ataquesMokepon = seleccionado.ataque;
    console.log(ataquesMokepon);
    for(i = 0; 0 < ataquesMokepon.length; i++){
        console.log(ataquesMokepon[i])
        contenedorBotonesAtaques.innerHTML += `
        <button>${ataquesMokepon[i].nombre}</button>
        `
    }
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