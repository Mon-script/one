var textoEncriptadoGlobal = ""; // Variable global para almacenar el contenido encriptado

function encriptar() {
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();

    textoEncriptadoGlobal = frase.replace(/e/gim, "enter");
    textoEncriptadoGlobal = textoEncriptadoGlobal.replace(/i/gim, "imes");
    textoEncriptadoGlobal = textoEncriptadoGlobal.replace(/a/gim, "ai");
    textoEncriptadoGlobal = textoEncriptadoGlobal.replace(/o/gim, "ober");
    textoEncriptadoGlobal = textoEncriptadoGlobal.replace(/u/gim, "ufat");

    document.getElementById("textoDesencriptado").value = textoEncriptadoGlobal;
    borrarEntrada();
}

function desencriptar() {
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();
    var textoDesencriptado = frase.replace(/enter/gim, "e");
    textoDesencriptado = textoDesencriptado.replace(/imes/gim, "i");
    textoDesencriptado = textoDesencriptado.replace(/ai/gim, "a");
    textoDesencriptado = textoDesencriptado.replace(/ober/gim, "o");
    textoDesencriptado = textoDesencriptado.replace(/ufat/gim, "u");

    document.getElementById("textoDesencriptado").value = textoDesencriptado;
    borrarEntrada();
}

function copiar() {
    var contenido = document.querySelector("#textoDesencriptado").value;
    textoEncriptadoGlobal = contenido; // Almacenar el contenido encriptado en la variable global
    navigator.clipboard.writeText(textoEncriptadoGlobal).then(function() {
        console.log('Texto copiado al portapapeles');
    }).catch(function(error) {
        console.error('Error al copiar el texto: ', error);
    });
    borrarEntrada()
    borrarSalida()
}

function borrarEntrada() {
    document.getElementById("textoEncriptado").value = "";
}

function borrarSalida(){
    document.getElementById("textoDesencriptado").value = "";
}
