let coche = document.querySelector("#coche");

console.log(coche);

boton.addEventListener('click', function (){
    
       
   
    if (coche.classList.contains('mover')) {
        coche.classList.remove('mover');
    }else {
        coche.classList.add('mover');
    }
    


console.log("click")
})