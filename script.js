

function encriptar () {
    
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();

    var textoEncriptado = frase.replace(/e/img, "enter");
    var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
    borrarEntrada();

}

function desencriptar () {
    
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();

    var textoDesencriptado = frase.replace(/enter/img, "e");
    var textoDesencriptado = textoDesencriptado.replace(/imes/img, "i");
    var textoDesencriptado = textoDesencriptado.replace(/ai/img, "a");
    var textoDesencriptado = textoDesencriptado.replace(/ober/img, "o");
    var textoDesencriptado = textoDesencriptado.replace(/ufat/img, "u");

    document.getElementById("textoDesencriptado").innerHTML = textoDesencriptado;
    borrarEntrada();


}



function copiar (){

    var contenido = document.querySelector("#textoDesencriptado");
    contenido.select();
    document.execCommand("Copy");
    
    


}

function borrarEntrada(){
    document.getElementById("textoEncriptado").value ="";
}

