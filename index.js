var precio = 400000

var precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

var totalPagar = document.querySelector(".valor-total");

function actualizarTotal (){
    totalPagar.innerHTML = cantidad * precio;
}

var cantidad = 0;

var suma = document.querySelector(".suma");
var resta = document.querySelector(".resta");

cantidadImprimir = document.querySelector(".cantidad");

suma.addEventListener('click', function (){
    cantidad = cantidad + 1 ;
    cantidadImprimir.innerHTML = cantidad;
    actualizarTotal();
});

resta.addEventListener('click', function (){
    cantidad = cantidad -1;
    cantidadImprimir.innerHTML = cantidad;
    actualizarTotal();
});

