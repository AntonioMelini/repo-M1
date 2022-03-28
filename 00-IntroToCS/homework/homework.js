'use strict'

 
function BinarioADecimal(num) {
  var arreglonum=num.split("").reverse(); 
  var suma=0;
  for(var i=0;i<arreglonum.length;i++){
    suma+= arreglonum[i]*Math.pow(2,i); 
  }
  return suma;
}

function DecimalABinario(num) {
  var result="";
  while(num>0){
    result=num%2+result;
    num= Math.floor(num/2);
  }
  return result;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}