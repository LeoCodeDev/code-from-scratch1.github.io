//Seccion de Declaracion de Variables y funciones
let mokeponesArr = [];
let elementosMoke = [];
let ataques = [];
let ataqueJugador = '';
let ataqueEnemigo = '';
let resultadoCombate = '';
let vidasEnemigo = 3 ;
let vidasJugador = 10 ;
let seleccionado = '';
let contenedorMokepones;
let contenedorElegidoJugador;
let contenedorElegidoEnemigo;
let valorClick;
let tipoAtaque;
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
        this.ataques = [];
    }
}

class Ataques {
    constructor(nombre,tipo,id,dmg){
        this.nombre = nombre;
        this.tipo = tipo;
        this.id = id;
        this.dmg = dmg;
    }
}

let capipepoObj = new Mokepon('Capipepo','capipepo','agua','./assets/capipepo.png','120');
let hipodogeObj = new Mokepon('Hipodoge','hipodoge','agua','./assets/hipodoge.png','3');
let langostelvisObj = new Mokepon('Langostelvis','langostelvis','agua','./assets/langostelvis.png','3');
let pydosObj = new Mokepon('Pydos','pydos','agua','./assets/pydos.png','3');
let ratigueyaObj = new Mokepon('Ratigüeya','ratigueya','agua','./assets/ratigueya.png','3');
let tucapalmaObj = new Mokepon('Tucapalma','tucapalma','agua','./assets/tucapalma.png','3');

let infernalAtk = new Ataques ('Fuego Infernal','🔥','inferno',4);
let llamaradaAtk = new Ataques ('Llamarada','🔥','llamarada',3);
let vulcanoAtk = new Ataques ('Vulcano','🔥','vulcano',2);
let luzBrillanteAtk = new Ataques ('Luz Brillante','🔥','bright',1);
let hydrojetAtk = new Ataques ('Hydrojet','💧','hydro',1);
let tsunamiAtk = new Ataques ('Tsunami','💧','tsunami',2);
let lluviaAtk = new Ataques ('Lluvia Torrencial','💧','lluvia',3);
let ruedaAtk = new Ataques ('Rueda de Agua','💧','rueda',3);
let penonazolAtk = new Ataques ('Peñonazo','🌱','penonazo',3);
let terremotoAtk = new Ataques ('Terremoto','🌱','terremoto',5);
let pantanoAtk = new Ataques ('Pantano Peligroso','🌱','pantano',1);
let raicesAtk = new Ataques ('Raices Traicioneras','🌱','raices',2);
let healingAtk = new Ataques ('Vigor','✨','healing',5);      

mokeponesArr.push(capipepoObj,hipodogeObj,langostelvisObj,pydosObj,ratigueyaObj,tucapalmaObj);

capipepoObj.ataques.push(lluviaAtk,pantanoAtk,raicesAtk);
hipodogeObj.ataques.push(hydrojetAtk,tsunamiAtk,ruedaAtk,healingAtk);
langostelvisObj.ataques.push(terremotoAtk,penonazolAtk,raicesAtk,pantanoAtk,healingAtk);
pydosObj.ataques.push(infernalAtk,llamaradaAtk,vulcanoAtk,terremotoAtk);
ratigueyaObj.ataques.push(luzBrillanteAtk,vulcanoAtk,penonazolAtk);
tucapalmaObj.ataques.push(hydrojetAtk,pantanoAtk,raicesAtk,tsunamiAtk);

function iniciarJuego(){
    mokeponesArr.forEach((mok) => {
        contenedorMokepones = `
        <input type="radio" name="mascotas" id=${mok.id} class="radius-inputs">
                    <label for=${mok.id} class="mokepones">
                        <p>${mok.nombre}</p>
                        <img src=${mok.imagen} alt=${mok.nombre}>
                    </label>
            `
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
    seccionAtaque.style.display = 'none'
    seccionMensajes.style.display = 'none'
    seccionReiniciar.style.display = 'none'
}

function random(min,max){
    let random = Math.floor(Math.random()*(max-min+1)+min);
    return random
}
function random2(min,max){
    let random = Math.random()*(max-min+1)+min;
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
    extraerAtaques(seleccionado);
    seleccionarMascotasEnemigo();
    if(seleccionado != ''){
        habilitarSecciones(contenedorSeleccion,'none');
        habilitarSecciones(seccionAtaque,'grid');
        habilitarSecciones(seccionMensajes,'flex');
    }
}

function extraerAtaques(seleccionado){
    ataques
    for (let i = 0; i < mokeponesArr.length; i++) {
        if (seleccionado === mokeponesArr[i]) {
            ataques = mokeponesArr[i].ataques
        }
    }
    botonesDeAtaque(ataques);
}

function botonesDeAtaque(ataques){
    ataques.forEach((ataque)=>{
        contenedorBotonesAtaques.innerHTML += `
        <button id=${ataque.id} class='${ataque.tipo} botones'>${ataque.nombre} ${ataque.tipo}</button>
        `
        ataque.boton = document.getElementById(ataque.id);
    })
    botones = document.querySelectorAll('.botones')

    activadorAtaques(botones)
}

function activadorAtaques(arrs){
    arrs.forEach((arr)=>{
        if(arr.classList[0] == '💧'){
            arr.addEventListener('click', atack)
            console.log('💧')
        }else if (arr.classList[0] == '🌱') {
            arr.addEventListener('click', atack)
            console.log('🌱')
            
        } else if (arr.classList[0] == '🔥') {
            arr.addEventListener('click', atack)
            console.log('🔥')
            
        } else if (arr.classList[0] == '✨') {
            arr.addEventListener('click', atack)
            console.log('✨') 
        }
    })
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

function atack(i){
    let ordenJugador = i.target.id
    ataques.forEach(ataque => {
        if(ataque.id === ordenJugador){
            hitJugador = ataque.dmg*random2(random(0,3),random(4,6))
        }
    })
    return hitJugador
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
    revisarVidas()
    
}

function revisarVidas(){
    if(vidasEnemigo == 0){
        crearMensaje(seccionMensajes,`<p><span class="${resultadoCombate}">Ganaste!!!</span>, Tu ${seleccionado.nombre} es muy Fuerte.</p>`)
        habilitarSecciones(seccionReiniciar,'flex');
        inhabilitarBotones();
    }else if(vidasJugador == 0){
        crearMensaje(seccionMensajes,`<p><span class="${resultadoCombate}">Perdiste!!!</span>, Tu ${seleccionado.nombre} es muy Debil aun.</p>`)
        habilitarSecciones(seccionReiniciar,'flex');
        inhabilitarBotones();
    }
}

function crearMensaje(slector,textoHTML){
    slector.innerHTML += textoHTML;
}

function inhabilitarBotones(){
    botones.forEach((boton)=>{
        boton.disabled = true;
    })
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