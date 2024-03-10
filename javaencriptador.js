let textoUsuario= document.getElementById("ingresoTexto");
let body= document.body;

        textoUsuario.addEventListener("input", function(event) {
    let teclaPresionada = event.target.value;
    let botonEncriptar=document.getElementById("botonEncriptador");
    let botonDesencriptar=document.getElementById("botonDesencriptador");
    let muñeca=document.getElementById("Muñeca");
    let munecaRoja=document.getElementById("MuñecaRojo")
        if (teclaPresionada.match(/[A-ZáéíóúüñÁÉÍÓÚÜÑ!@#$"'%^&*()_+={}\[\]:;<>,.?~\\/]/)) {
            textoUsuario.classList.add("textoProhibido");
            body.classList.add("textoProhibido-body");
            muñeca.style.display="none";
            munecaRoja.style.display="inline-block";
            botonEncriptar.disabled=true;
            botonDesencriptar.disabled=true;
        } else {
            munecaRoja.style.display="none";
            muñeca.style.display="inline-block";
            botonEncriptar.disabled=false;
            botonDesencriptar.disabled=false;
            textoUsuario.classList.remove("textoProhibido");
            body.classList.remove("textoProhibido-body");

        }
    });
function usuarioEncriptar() {

    let textoAEncriptar=document.getElementById("ingresoTexto").value;
    let botonEncriptar=document.getElementById("botonEncriptador");
    let botonDesencriptar=document.getElementById("botonDesencriptador");
    let muñeca=document.getElementById("Muñeca");
    let rotulo=document.getElementById("rotulonMensaje");
    let textoContenedor=document.getElementById("muestraEncriptada");
    let mostrarBoton=document.getElementById("botonCopiar");

        if(/[A-ZáéíóúüñÁÉÍÓÚÜÑ!@#$%^&*()_+={}\[\]:;<>,.?~\\/]/.test(textoAEncriptar)) {
        botonEncriptar.disabled=true;
        botonDesencriptar.disabled=true;
        } else{
    let mapObj = {
        e:"enter",
        a:"ai",
        i:"imes",
        o:"ober",
        u:"ufat"

    };
        textoAEncriptar= textoAEncriptar.replace(/[eaiou]/g, function(matched){
        
        return mapObj[matched];
    })
        textoContenedor.textContent=textoAEncriptar;
    document.getElementById("ingresoTexto").value="";
        muñeca.style.display="none";
        rotulo.style.display="none";
        mostrarBoton.style.display="inline";
    
    let copia=document.getElementById("botonCopiar");
        copia.addEventListener("click", function(){
        copiadotexto=JSON.stringify(textoAEncriptar);
        copiadotexto=copiadotexto.slice(1,-1);
        navigator.clipboard.writeText(copiadotexto);
           
        })
    let desencriptado=document.getElementById("botonDesencriptador");

    desencriptado.addEventListener("click", function(){
        desencriptado=textoAEncriptar.replaceAll("enter","e")
                                     .replaceAll('imes', 'i')
                                     .replaceAll('ai', 'a')
                                     .replaceAll('ober', 'o')
                                     .replaceAll('ufat', 'u')
        
        document.getElementById("ingresoTexto").value="";
        textoContenedor.textContent=desencriptado;
        console.log(desencriptado);
        muñeca.style.display="none";
    let copia=document.getElementById("botonCopiar");
        copia.addEventListener("click", function(){
        copiadotexto=JSON.stringify(desencriptado);
        copiadotexto=copiadotexto.slice(1,-1);
        navigator.clipboard.writeText(copiadotexto);
        textoContenedor.textContent="";    
        })
        
    })
    }

}
window.addEventListener('scroll', function() {
    let cajatexto=document.querySelector('.cajaTexto');
    let cuadroLateral=document.querySelector('.cuadroLateral');
    let muestraTextoEncriptado=document.querySelector('.muestraTextoEncriptado');
    let sinTexto=document.querySelector('.sinTexto');
    let aviso=document.querySelector('.aviso');
    let encriptar=document.querySelector('.encriptar');
    let desencriptar=document.querySelector('.desencriptar');
    
        if (window.scrollY > 0 && window.innerWidth <= 480) {
            cajatexto.style.top="152px";
            cajatexto.style.height="624px";

            cuadroLateral.style.top="1092px";
            cuadroLateral.style.height="595px";

            muestraTextoEncriptado.style.top="1128px";

            sinTexto.style.top="1120px";

            aviso.style.top="840px";

            encriptar.style.top="874px";

            desencriptar.style.top="965px";

        } else if(window.scrollY > 0 && (window.innerWidth > 480 && window.innerWidth <= 1200)) {
            cajatexto.style.top="14.844vh";
            cajatexto.style.height="60.9378vh";

            cuadroLateral.style.top="97.754vh";
            cuadroLateral.style.height="33.496vh";

            muestraTextoEncriptado.style.top="99.609vh";
            muestraTextoEncriptado.style.height="19.531vh";

            sinTexto.style.top="109.375vh";

            aviso.style.top="82.031vh";

            encriptar.style.top="84.961vh";

            desencriptar.style.top="84.961vh";

        };

})