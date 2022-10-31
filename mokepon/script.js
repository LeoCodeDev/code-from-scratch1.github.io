import { verMapa, mapa , eventoColision, lienzo} from './js/canvas.js'

//Seccion de Declaracion de Variables y funciones
let mokeponesArr = [];
let elementosMoke = [];
let ataques = [];
let ataquesEnemigo = [];
let ataqueJugador = '';
let ataqueEnemigo = '';
let vidasEnemigo;
let vidasJugador;
let seleccionado = '';
let enemigo = '';
let usoHealing = 3;
let usoHealingE = 3;
let hitJugador;
let hitEnemigo;
let contenedorMokepones;
let contenedorElegidoJugador;
let contenedorElegidoEnemigo;
let capipepo;
let hipodoge;
let ratigueya;
let langostelvis;
let tucapalma;
let pydos;
let dragosaurio;
let zalamander;
let flamix;
let botones;
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

let capipepoObj = new Mokepon('Capipepo','capipepo','🌱','./assets/capipepo.png',120);
let tucapalmaObj = new Mokepon('Tucapalma','tucapalma','🌱','./assets/tucapalma.png',120);
let dragosaurioObj = new Mokepon('Dragosaurio','dragosaurio','🌱','./assets/dragosaurio.png',120);
let hipodogeObj = new Mokepon('Hipodoge','hipodoge','💧','./assets/hipodoge.png',120);
let pydosObj = new Mokepon('Pydos','pydos','💧','./assets/pydos.png',120);
let zalamanderObj = new Mokepon('Zalamander','zalamander','💧','./assets/zalamander.png',120);
let langostelvisObj = new Mokepon('Langostelvis','langostelvis','🔥','./assets/langostelvis.png',120);
let ratigueyaObj = new Mokepon('Ratigüeya','ratigueya','🔥','./assets/ratigueya.png',120);
let flamixObj = new Mokepon('Flamix','flamix','🔥','./assets/flamix.png',120);

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

mokeponesArr.push(capipepoObj,hipodogeObj,langostelvisObj,pydosObj,ratigueyaObj,tucapalmaObj,dragosaurioObj,zalamanderObj,flamixObj);

capipepoObj.ataques.push(lluviaAtk,pantanoAtk,raicesAtk,healingAtk);
tucapalmaObj.ataques.push(vulcanoAtk,penonazolAtk,terremotoAtk,healingAtk);
dragosaurioObj.ataques.push(terremotoAtk,pantanoAtk,raicesAtk,healingAtk);
hipodogeObj.ataques.push(luzBrillanteAtk,tsunamiAtk,ruedaAtk,healingAtk);
pydosObj.ataques.push(terremotoAtk,lluviaAtk,hydrojetAtk,healingAtk);
zalamanderObj.ataques.push(ruedaAtk,tsunamiAtk,lluviaAtk,healingAtk);
langostelvisObj.ataques.push(terremotoAtk,infernalAtk,vulcanoAtk,healingAtk);
ratigueyaObj.ataques.push(ruedaAtk,luzBrillanteAtk,vulcanoAtk,healingAtk);
flamixObj.ataques.push(infernalAtk,luzBrillanteAtk,llamaradaAtk,healingAtk);

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
    dragosaurio = document.getElementById('dragosaurio');
    zalamander = document.getElementById('zalamander');
    flamix = document.getElementById('flamix');

    elementosMoke.push(capipepo,hipodoge,langostelvis,pydos,ratigueya,tucapalma,dragosaurio,zalamander,flamix);
    
    botonReiniciar.addEventListener('click', reiniciarJuego)
    botonMascota.addEventListener('click', seleccionarMascotaJugador);
    habilitarSecciones(verMapa, 'none');
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
    for(let i = 0; i < elementosMoke.length; i++){
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
        habilitarSecciones(verMapa,'flex');
        habilitarSecciones(contenedorSeleccion,'none');
    }
    vidasJugador = seleccionado.vida
    vidaMascotaJugador.innerHTML = vidasJugador;
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
    vidasEnemigo = enemigo.vida
    vidaMascotaEnemigo.innerHTML = vidasEnemigo;
    return enemigo
}

function atack(i){
    let ordenJugador = i.target;
    ataques.forEach(ataque => {
        if(ataque.id === ordenJugador.id){
            hitJugador = ataque.dmg*random2(random(0,3),random(4,6))
            ataqueJugador = ordenJugador.textContent
        }
    })
    let indiceOrden = random(0, ataquesEnemigo.length -1);
    let ordenEnemigo = ataquesEnemigo[indiceOrden];
    ataquesEnemigo.forEach(ataqueE => {
        if (ataqueE.id === ordenEnemigo.id) {
            hitEnemigo = ataqueE.dmg*random2(random(0,3),random(4,6))
            ataqueEnemigo = `${ataqueE.nombre} ${ataqueE.tipo}`;
                if(ataqueE.tipo === '✨'){
                    usoHealingE--
                    if(usoHealingE <= 0){
                        ataquesEnemigo.pop(indiceOrden)
                    }
                }
        }
    });
    if(ordenJugador.classList[0] === '✨'){
        usoHealing--
        ordenJugador.textContent = `Vigor ✨ ${usoHealing}/3`;
        if(usoHealing <= 0){
            ordenJugador.style.borderColor = '#00aab37c'
            ordenJugador.style.color = '#00aab37c'
            ordenJugador.disabled = true
        }
    }
    combate(ordenJugador.classList[0],ordenEnemigo.tipo,hitJugador,hitEnemigo)
}

function healing(vidastotales,vidasRestantes,valor){
    if(vidasRestantes == vidastotales){
        vidasRestantes += valor * 0;
    }else if((vidasRestantes + valor) <= vidastotales){
        vidasRestantes += Math.floor(valor)
    }else{
        vidasRestantes += Math.floor(vidastotales - vidasRestantes);
    }
    return vidasRestantes
}

function damageUp(tipoAtk,tipoMoke,hit,vidas){
    if(tipoAtk === tipoMoke){
        vidas -= Math.floor(hit * 1.6)
    }else{
        vidas -= Math.floor(hit * 1.3)
    }
    return vidas
}

function damageDw(tipoAtk,tipoMoke,hit,vidas){
    if(tipoAtk === tipoMoke){
        vidas -= Math.floor(hit * 0.5)
    }else{
        vidas -= Math.floor(hit * 0.8)
    }
    return vidas
}

function combate(tipoAtkJugador, tipoAtkEnemigo, hitJugador, hitEnemigo){
    if (tipoAtkJugador === '✨' && tipoAtkEnemigo === '✨') {
        vidasJugador = healing(seleccionado.vida,vidasJugador,hitJugador);
        vidasEnemigo = healing(enemigo.vida,vidasEnemigo,hitEnemigo)
    } else if(tipoAtkJugador === '✨' && tipoAtkEnemigo != '✨'){
        vidasJugador = healing(seleccionado.vida,vidasJugador,hitJugador)
    } else if(tipoAtkJugador != '✨' && tipoAtkEnemigo === '✨'){
        vidasEnemigo = healing(enemigo.vida,vidasEnemigo,hitEnemigo)
    } else if ((tipoAtkJugador === '💧' && enemigo.tipo === '🔥') || (tipoAtkJugador === '🔥' && enemigo.tipo === '🌱') || (tipoAtkJugador === '🌱' && enemigo.tipo === '💧')) {
        vidasEnemigo = damageUp(tipoAtkJugador,seleccionado.tipo,hitJugador,vidasEnemigo)
        vidasJugador = damageDw(tipoAtkEnemigo,enemigo.tipo,hitEnemigo,vidasJugador)
    } else if((tipoAtkEnemigo === '💧' && seleccionado.tipo === '🔥') || (tipoAtkEnemigo === '🔥' && seleccionado.tipo === '🌱') || (tipoAtkEnemigo === '🌱' && seleccionado.tipo === '💧')){
        vidasEnemigo = damageDw(tipoAtkJugador,seleccionado.tipo,hitJugador,vidasEnemigo)
        vidasJugador = damageUp(tipoAtkEnemigo,enemigo.tipo,hitEnemigo,vidasJugador)
    }else{
        vidasEnemigo -= Math.floor(hitJugador)
        vidasJugador -= Math.floor(hitEnemigo)
    }
    tipoAtaqueEnemigo.innerHTML = ataqueEnemigo;
    tipoAtaqueJugador.innerHTML = ataqueJugador;
    vidaMascotaJugador.innerHTML = vidasJugador;
    vidaMascotaEnemigo.innerHTML = vidasEnemigo;
    revisarVidas();    
}

function revisarVidas(){
    if(vidasJugador <= 0){
        vidaMascotaJugador.innerHTML = 0;
        crearMensaje(seccionMensajes,`<p><span class="PERDISTE">Perdiste!!!</span>, Tu ${seleccionado.nombre} es muy Debil aun.</p>`)
        habilitarSecciones(seccionReiniciar,'flex');
        inhabilitarBotones();
    }else if(vidasEnemigo <= 0){
        vidaMascotaEnemigo.innerHTML = 0;
        crearMensaje(seccionMensajes,`<p><span class="GANASTE">Ganaste!!!</span>, Tu ${seleccionado.nombre} es muy Fuerte.</p>`)
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

export {habilitarSecciones , seccionAtaque , seccionMensajes}