let boton = document.querySelector("#boton");
console.log(boton);
let pelota = document.querySelector("#pelota");
console.log(pelota);

boton.addEventListener('click', function (){
    
        pelota.classList.add('caer');
   
        if (condition) {
            pelota.classList.remove('caer');
        }
        
    
    
    console.log("click")
})