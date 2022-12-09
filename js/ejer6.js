let astronauta = document.querySelector("#astronauta");

console.log(astronauta);

boton.addEventListener('click', function (){
    
       
   
    if (astronauta.classList.contains('mover')) {
        astronauta.classList.remove('mover');
    }else {
        astronauta.classList.add('mover');
    }
    


console.log("click")
})