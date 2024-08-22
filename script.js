const boton_encriptar = document.querySelector(".button.encriptar");
const texto_encriptar = document.querySelector("#wordInput");
const aviso = document.querySelector(".aviso");
const boton_desencriptar = document.querySelector(".button.desencriptar");
const mensaje_encrip_des = document.querySelector("#mensajeOutput");
const imagen = document.querySelector(".Imagen_muñeco");
const copiar_texto = document.querySelector("#copyButton")


function aplicarEstilo(){
    mensaje_encrip_des.classList.add('mensaje-encriptado')
    }
function copiar() {
    navigator.clipboard.writeText(mensaje_encrip_des.textContent) 
    }

boton_encriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto =texto_encriptar.value;
    
    let txt_sin_acentos = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    let txt_sin_caracteres = txt_sin_acentos.replace(/[^a-zA-Z0-9\s]/g, ' ');

    if(texto == "") {
        aviso.style.color = "red"; 
        aviso.style.fontWeight = "800";
        aviso.innerHTML = '<i class="fas fa-exclamation-circle"></i> Debes escribir en el campo de texto';
    
      setTimeout (() => {
        aviso.removeAttribute("style");
      }, "1000");
    }

    else if (texto !== txt_sin_caracteres) {
        aviso.style.color = "red"; 
        aviso.style.fontWeight = "800";
        aviso.innerHTML = '<i class="fas fa-exclamation-circle"></i> No debe tener caracteres especiales, ni acentos';
    
      setTimeout (() => {
        aviso.removeAttribute("style");
      }, "1000");
    }
    
    else if (texto !== texto.toLowerCase()) {
        aviso.style.color = "red"; 
        aviso.style.fontWeight = "800";
        aviso.innerHTML = '<i class="fas fa-exclamation-circle"></i> No debes escribir letras mayúsculas';
    
      setTimeout (() => {
        aviso.removeAttribute("style");
      }, "1000");
    }

    else if (texto.length > 300) {
        aviso.style.color="red";
        aviso.style.fontWeight="800";
        aviso.innerHTML = '<i class="fas fa-exclamation-circle"></i> Solo se permiten 300 caracteres';
    
     setTimeout (() => {
        aviso.removeAttribute("style");
          }, "1000");
    }

    else {
        aviso.innerHTML = '<i class="fas fa-exclamation-circle"></i> Letras minúsculas y sin acentos';
        let resultado = texto
        .replaceAll('e', 'enter')
        .replaceAll('i', 'imes')
        .replaceAll('a', 'ai')
        .replaceAll('o', 'ober')
        .replaceAll('u', 'ufat');
        mensaje_encrip_des.innerHTML = resultado
        imagen.remove();
        aplicarEstilo()
        copiar_texto.style.display = "inline-block";  
    }
})


boton_desencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto =texto_encriptar.value;
    
    let txt_sin_acentos = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    let txt_sin_caracteres = txt_sin_acentos.replace(/[^a-zA-Z0-9\s]/g, ' ');

   

    if(texto == "") {
        aviso.style.color = "red"; 
        aviso.style.fontWeight = "800";
        aviso.innerHTML = '<i class="fas fa-exclamation-circle"></i> Debes escribir en el campo de texto';
    
      setTimeout (() => {
        aviso.removeAttribute("style");
      }, "1000");
    }

    else if (texto !== txt_sin_caracteres) {
        aviso.style.color = "red"; 
        aviso.style.fontWeight = "800";
        aviso.innerHTML = '<i class="fas fa-exclamation-circle"></i> No debe tener caracteres especiales, ni acentos';
    
      setTimeout (() => {
        aviso.removeAttribute("style");
      }, "1000");
    }
    
    else if (texto !== texto.toLowerCase()) {
        aviso.style.color = "red"; 
        aviso.style.fontWeight = "800";
        aviso.innerHTML = '<i class="fas fa-exclamation-circle"></i> No debes escribir letras mayúsculas';
    
      setTimeout (() => {
        aviso.removeAttribute("style");
      }, "1000");
    }

    else if (texto.length > 300) {
        aviso.style.color="red";
        aviso.style.fontWeight="800";
        aviso.innerHTML = '<i class="fas fa-exclamation-circle"></i> Solo se permiten 300 caracteres';
    
     setTimeout (() => {
        aviso.removeAttribute("style");
          }, "1000");
    }

    else {
        aviso.innerHTML = '<i class="fas fa-exclamation-circle"></i> Letras minúsculas y sin acentos';
        aplicarEstilo()
        let resultado = texto
        .replaceAll('enter', 'e')
        .replaceAll('imes', 'i')
        .replaceAll('ai', 'a')
        .replaceAll('ober', 'o')
        .replaceAll('ufat', 'u');
        mensaje_encrip_des.innerHTML = resultado
        imagen.remove();
        copiar_texto.style.display = "inline-block";
    }
})



