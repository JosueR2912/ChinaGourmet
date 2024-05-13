/*primer swiper*/ 
var swiper = new Swiper(".mySwiper-1", {
    slidesPerView:1,
    spaceBetween: 30,
    loop:true,
    pagination: {
        el:".swiper-pagination",
        clickable :true,
    },
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    }
    ,autoplay: {
        delay: 5000,
      },
});

/*segundo swiper*/ 
var swiper = new Swiper(".mySwiper-2", {
    slidesPerView:3,
    spaceBetween: 20,
    loop:true,
    loopFillGroupWithBlank:true,
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
    breakpoints : {
        0: {
            slidesPerView:1,
        },
        520: {
            slidesPerView:2,
        },
        950: {
            slidesPerView:3,
        }
    }
});

/*tabs*/ 

let tabInputs = document.querySelectorAll(".tabInput");

tabInputs.forEach(function(input){
    input.addEventListener('change', function() {
        let id = input.ariaValueMax;
        let thisSwiper = document.getElementById('swiper' + id);
        thisSwiper.swiper.update();
    } )
})

/*menu */

const nav = document.querySelector('.navbar');

window.addEventListener('scroll' , function(){
    nav.classList.toggle('active', this.window.scrollY > 0)
})


//carrito

const carrito = document.getElementById('carrito')
const elementos1 = document.getElementById('lista-1')
const elementos2 = document.getElementById('lista-2')
const elementos3 = document.getElementById('lista-3')
const lista = document.querySelector('#lista-carrito tbody')
const vaciarCarritotoBtn = document.getElementById('vaciar-carrito')


cargarEventListener();

function cargarEventListener() {
    elementos1.addEventListener('click', comprarElemento);
    elementos2.addEventListener('click', comprarElemento);
    elementos3.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritotoBtn.addEventListener('click', vaciarCarrito);
}

function comprarElemento(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento){
     const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('.titulo').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')
     }


     insertarCarrito(infoElemento);
}

function insertarCarrito(elemento){

    const row = document.createElement('tr');

    row.innerHTML = `
    <td>
      <img src="${elemento.imagen}" width = 100>
      </td>
    <td>
            ${elemento.titulo}
    </td>
    <td>
            ${elemento.precio}    
    </td>
    <td>
        <a href='#' class="borrar" data-id="${elemento.id}">X</a>
    </td>
    `;
lista.appendChild(row);
}

function eliminarElemento(e) {
    e.preventDefault();
    let elemento,
        elementoId;

        if(e.target.classList.contains('borrar')) {
            e.target.parentElement.parentElement.remove();
            elemento = e.target.parentElement.parentElement;
            elementoId = elemento.querySelector('a').getAttribute('data-id');
        }
}

function vaciarCarrito(){

    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
    return false;
}
