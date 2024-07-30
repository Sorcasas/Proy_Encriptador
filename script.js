/*  seleccion de elementos*/
const btnEncriptar = document.querySelector(".Boton_Encriptar");
const txtEncriptar = document.querySelector(".Texto_Ingrese");
const aviso = document.querySelector(".texvalidar");
const mensajeEncriptado = document.querySelector(".Mensaje_encriptado");
const cajaTemporal = document.querySelector(".cuadro_encriptar");
const btnCopiar = document.querySelector(".Boton_copiar");

const btnDesencriptar = document.querySelector(".Boton__Desencriptar");

/* llama Boton Encriptar*/

btnEncriptar.addEventListener("click", e=>{ 
    e.preventDefault();
    let texto = txtEncriptar.value;
  
    let txt=texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
 
   
   if(texto==""){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo del texto no debe estar vacio";
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }
    else if (texto !== txt){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener acentos ni caracteres especiales";
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if (texto !== texto.toLowerCase()){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto debe ser todo en minuscular";
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);

    }
    else{   
        texto = texto.replace(/e/mg,"enter");
        texto = texto.replace(/i/mg,"imes");
        texto = texto.replace(/a/mg,"ai");
        texto = texto.replace(/o/mg,"orbe");
        texto = texto.replace(/u/mg,"ufat");

        mensajeEncriptado.innerHTML = texto; 
        btnCopiar.style.visibility ="inherit";
        cajaTemporal.remove();
        
       
    }
    
}) 


/* llama Boton Desencriptar*/

 
btnDesencriptar.addEventListener("click", e=>{ 
    e.preventDefault();
    let texto = txtEncriptar.value;
  
    let txt=texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
 
   
   if(texto==""){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo del texto no debe estar vacio";
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }
    else if (texto !== txt){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener acentos ni caracteres especiales";
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if (texto !== texto.toLowerCase()){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto debe ser todo en minuscular";
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);

    }
    else{   
        texto = texto.replace(/emter/mg,"e");
        texto = texto.replace(/imes/mg,"i");
        texto = texto.replace(/ai/mg,"a");
        texto = texto.replace(/orbe/mg,"o");
        texto = texto.replace(/ufat/mg,"u");

        mensajeEncriptado.innerHTML = texto; 
        btnCopiar.style.visibility ="inherit";
        cajaTemporal.remove();
        
       
    }
    
    /*Boton Copiar*/
});
btnCopiar.addEventListener("click", e=>{ 
    e.preventDefault();
    let copiar = mensajeEncriptado;
    copiar.select();
    document.execCommand("copy");
    
}); 


