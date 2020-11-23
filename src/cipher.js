

const cipher = {
 encode:(userOffsetEncode, encodeTexto)=>{
 let finalResultEncode = "";
 for (let i = 0; i < encodeTexto.length; i++){
                                      
  let asciiResult = encodeTexto.charCodeAt(i);
  if(asciiResult >= 65 & asciiResult <=90){
  let formula = (asciiResult - 65 + userOffsetEncode) % 26 + 65;
  finalResultEncode += String.fromCharCode(formula);
}
 else if(asciiResult === 32){
 finalResultEncode += String.fromCharCode(32);
}

}
return finalResultEncode;
},

 decode:(userOffsetDecode, decodeText)=>{
  let finalResultDecode = "";
  for (let i = 0; i < decodeText.length; i++){
   let asciiResult = decodeText.charCodeAt(i);
   if(asciiResult >= 65 & asciiResult <=90){
   let formula = (asciiResult + 65 - userOffsetDecode) % 26 + 65;
   finalResultDecode += String.fromCharCode(formula);
}
 else if(asciiResult === 32){
  finalResultDecode += String.fromCharCode(32);
}

}
  return finalResultDecode;
}

}

export default cipher;


