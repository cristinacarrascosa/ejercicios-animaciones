let boton = document.querySelector("#boton");
console.log(boton);
let pelota = document.querySelector("#pelota");
console.log(pelota);

boton.addEventListener('click', function (){
    
       
   
        if (pelota.classList.contains('caer')) {
            pelota.classList.remove('caer');
        }else {
            pelota.classList.add('caer');
        }
        
    
    
    console.log("click")
})