

// FUNCION PARA CREAR EL DIV DONDE IRÁ EL RESULTADO DE LA ENCRIPTACION Y EL BOTON DE COPIAR
function crearRespuesta(textoResultado){
    let resultado = document.getElementById("resultado");
    resultado.className = "";
    let parrafo  = document.getElementById("texto-salida");
    parrafo.className = "outline-none resize-none w-full bg-transparent text-white text-2xl h-auto lg:h-[500px] overflow-y-auto";
    parrafo.innerHTML = textoResultado;
    resultado.appendChild(parrafo);
    let botonCopiar = document.getElementById("btn-copy");
    botonCopiar.className = "w-full mx-auto mt-3 bg-c-purple rounded-xl py-3 text-xl hover:bg-c-blue hover:text-white hover:text-2xl duration-500 ease-in-out"
    botonCopiar.addEventListener("click", copiarTexto);
    resultado.appendChild(botonCopiar);
    
    document.getElementById("intro-text").className = "hiddden";
  }
  
  //FUNCION PARA ENCRIPTAR EL TEXTO
  function encriptar() {
      let texto = document.getElementById("texto-entrada").value;
      let textoEncriptado = "";
      for (let i = 0; i < texto.length; i++) {
        let c = texto[i];
        if (c === "e") {
          textoEncriptado += "enter";
        } else if (c === "i") {
          textoEncriptado += "imes";
        } else if (c === "a") {
          textoEncriptado += "ai";
        } else if (c === "o") {
          textoEncriptado += "ober";
        } else if (c === "u") {
          textoEncriptado += "ufat";
        } else {
          textoEncriptado += c;
        }
      }
      crearRespuesta(textoEncriptado)
      
      document.getElementById("intro-text").className = "hidden";
  
    }
  
  // FUNCION PARA DESENCRIPTAR EL TEXTO
  
  function desencriptar() {
    
    let texto = document.getElementById("texto-entrada").value;
    let textoDesencriptado = desEncriptar(texto);
  
    crearRespuesta(textoDesencriptado)
    document.getElementById("intro-text").className = "hidden"

  }
  
  function desEncriptar(texto){
    let palabra = '';
    if(texto !== ''){
      palabra += texto.replaceAll('ai','a').replaceAll('enter','e').replaceAll('imes','i').replaceAll('ober','o').replaceAll('ufat','u')
    }
    return palabra
  }
  
  // CONVIERTE CUALQUIER TEXTO CON MAYUSCULAS O CON TILDES EN TEXTO PLANO
  
  window.addEventListener("load", function() {
    console.log("Page load event triggered");
    let elemento = document.getElementById("texto-entrada");
  
    elemento.addEventListener("input", function() {
      console.log("Input event triggered");
      this.value = this.value.toLowerCase().normalize("NFD").replace(/[^a-zA-ZÑñ\s?,.!]/g, "");
    });
  });
  
  
  // FUNCION PARA COPUAR EL TEXTO DESENCRIPTADO
  function copiarTexto() {
    let texto = document.getElementById("texto-salida");
    let seleccion = window.getSelection();
    let rango = document.createRange();
    rango.selectNodeContents(texto);
    seleccion.removeAllRanges();
    seleccion.addRange(rango);
    document.execCommand("copy");
  }
  
  /// BOTON LIMPIAR

  function clearTextarea() {
    document.querySelector('#texto-entrada').value = '';
    
  }
  
  