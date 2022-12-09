let cuadrado = document.querySelector("#container");

console.log(cuadrado);

cuadrado.addEventListener('mouseenter', function (){
    cuadrado.firstElementChild.classList.add('cambioletra');
})

cuadrado.addEventListener('mouseleave', function (){
    cuadrado.firstElementChild.classList.remove('cambioletra');
})