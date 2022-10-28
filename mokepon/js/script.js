//Seccion de Declaracion de Variables y funciones
let mokeponesArr = [];
let elementosMoke = [];
let ataques = [];
let ataquesEnemigo = [];
let ataqueJugador = '';
let ataqueEnemigo = '';
let resultadoCombate = '';
let vidasEnemigo = 3 ;
let vidasJugador = 10 ;
let seleccionado = '';
let enemigo = '';
let hitJugador;
let hitEnemigo;
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

let capipepoObj = new Mokepon('Capipepo','capipepo','🌱','./assets/capipepo.png','120');
let hipodogeObj = new Mokepon('Hipodoge','hipodoge','💧','./assets/hipodoge.png','120');
let langostelvisObj = new Mokepon('Langostelvis','langostelvis','💧','./assets/langostelvis.png','120');
let pydosObj = new Mokepon('Pydos','pydos','🔥','./assets/pydos.png','120');
let ratigueyaObj = new Mokepon('Ratigüeya','ratigueya','🔥','./assets/ratigueya.png','120');
let tucapalmaObj = new Mokepon('Tucapalma','tucapalma','🌱','./assets/tucapalma.png','120');

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
    seleccionarMascotasEnemigo();
    if(seleccionado != ''){
        habilitarSecciones(contenedorSeleccion,'none');
        habilitarSecciones(seccionAtaque,'grid');
        habilitarSecciones(seccionMensajes,'flex');
    }
    ataques = seleccionado.ataques
    ataquesEnemigo = enemigo.ataques
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
        }else if (arr.classList[0] == '🌱') {
            arr.addEventListener('click', atack)
        } else if (arr.classList[0] == '🔥') {
            arr.addEventListener('click', atack)
        } else if (arr.classList[0] == '✨') {
            arr.addEventListener('click', atack)
        }
    })
}

function seleccionarMascotasEnemigo(){
    let seleccionEnemiga = random(0,mokeponesArr.length -1);
    let mascotaEnemigoSeleccionada = '';
    enemigo = mokeponesArr[seleccionEnemiga];
    mascotaEnemigoSeleccionada = elementosMoke[seleccionEnemiga].id;
    contenedorElegidoEnemigo = `
        <label for=${mascotaEnemigoSeleccionada}" class="mokepones">
            <p>${mokeponesArr[seleccionEnemiga].nombre}</p>
            <img src=${mokeponesArr[seleccionEnemiga].imagen} alt=${mascotaEnemigoSeleccionada}>
        </label>
    `
    imgEnemigo.innerHTML = contenedorElegidoEnemigo;
    mascotaEnemigo.innerHTML = mokeponesArr[seleccionEnemiga].nombre;
    return enemigo
}

function atack(i){
    let ordenJugador = i.target;
    ataques.forEach(ataque => {
        if(ataque.id === ordenJugador.id){
            hitJugador = ataque.dmg*random2(random(0,3),random(4,6))
        }
    })
    let ordenEnemigo = ataquesEnemigo[random(0, ataquesEnemigo.length -1)];
    ataquesEnemigo.forEach(ataqueE => {
        if (ataqueE.id === ordenEnemigo.id) {
            hitEnemigo = ataqueE.dmg*random2(random(0,3),random(4,6))
        }
    });
    combate(ordenJugador.classList[0],ordenEnemigo.tipo)
}

function combate(tipoAtkJugador, tipoAtkEnemigo){
    if (tipoAtkJugador === '✨' && tipoAtkEnemigo === '✨') {
        console.log('ambos se curan')
    } else if(tipoAtkJugador === '✨' && tipoAtkEnemigo != '✨'){
        console.log('Jugador se cura')
    } else if(tipoAtkJugador != '✨' && tipoAtkEnemigo === '✨'){
        console.log('Enemigo se cura')
    } else if ((tipoAtkJugador === '💧' && enemigo.tipo === '🔥') || (tipoAtkJugador === '🔥' && enemigo.tipo === '🌱') || (tipoAtkJugador === '🌱' && enemigo.tipo === '💧')) {
        console.log('Multiplicador ataque jugador y divisor ataque Enemigo')
    } else if((tipoAtkEnemigo === '💧' && seleccionado.tipo === '🔥') || (tipoAtkEnemigo === '🔥' && seleccionado.tipo === '🌱') || (tipoAtkEnemigo === '🌱' && seleccionado.tipo === '💧')){
        console.log('Multiplicador ataque enemigo y divisor ataque jugador')
    }else{
        console.log('ataque base')
    }
    console.log([
        `Tipo Mokepon Jugador: ${seleccionado.tipo}`,
        `Tipo Ataque Jugador: ${tipoAtkJugador}`,
        `Tipo Mokepon Enemigo: ${enemigo.tipo}`,
        `Tipo Ataque Enemigo: ${tipoAtkEnemigo}`
    ])
    /* if(ataqueJugador == ataqueEnemigo){
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
    revisarVidas() */
    
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