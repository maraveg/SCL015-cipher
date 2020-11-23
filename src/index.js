
import cipher from './cipher.js';
      
//Se guardó el boton en la variable displayBtn
      const displayBtnEncode = document.getElementById("encode");
      displayBtnEncode.addEventListener("click",getDataEncode); 
   // A ese boton se le agregó el evento on click mas la funcion "detData"
    //Esta funcion se trata de que al momento de hacer click guardará la informacion
    //y realizará un par de acciones mas
    function getDataEncode(){
      //Se crea una variable que GUARDA el valor que se ingresa en el input con ID "number"
      let userOffsetEncode = parseInt(document.getElementById("number").value);

   //Se crea una variable que GUARDA el valor que se ingresa en el textarea con ID "usertext"
      let encodeTexto = document.getElementById("usertext").value.toUpperCase();
      // Se indica que el valor del textarea con ID "outtext" será igual al resultado de la variable cipher y la funcion ENCODE
      
        if (encodeTexto === "" || userOffsetEncode === "") {
          document.getElementById("usertext").focus();
          document.getElementById("mostrar").innerHTML = "¡ATENCION! No has ingresado ningún número."
        } else {
        
        document.getElementById("mostrar").innerHTML = "Tu número secreto es " + userOffsetEncode;
        document.getElementById("outtext").value = cipher.encode(userOffsetEncode, encodeTexto);
        document.getElementById("number").value ="";
        document.getElementById("usertext").value ="";
        document.getElementById("usertext").focus();
      }
    }
    const displayBtnDecode = document.getElementById("decode");
    displayBtnDecode.addEventListener("click",getDataDecode); 

  function getDataDecode(){
    const userOffsetDecode = parseInt(document.getElementById("number").value);
    const decodeText = document.getElementById("usertext").value.toUpperCase();
   document.getElementById("outtext").value = cipher.decode(userOffsetDecode, decodeText);
      if (decodeText === "" || userOffsetDecode === "") {
        document.getElementById("usertext").focus();
        document.getElementById("mostrar").innerHTML = "¡ATENCION! No has ingresado ningún número."
      } else {
      document.getElementById("mostrar").innerHTML = "Tu número secreto es " + userOffsetDecode;
      document.getElementById("number").value ="";
      document.getElementById("usertext").value ="";
      document.getElementById("usertext").focus();
    }
  }

    const deleteBtn = document.getElementById("delete");
    deleteBtn.addEventListener("click", deleteFunc); 

    function deleteFunc(){
      document.getElementById("outtext").value ="";
      document.getElementById("mostrar").innerHTML = "  ";

    } 

    
