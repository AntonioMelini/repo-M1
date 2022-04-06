'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  var array=[1];
  var i=2;
  while(num!==1){                               
    if(num%i===0){                              
      array.push(i);                               
      num=num/i;
    }else{
      i++;
    }
  }
  return array;
}
/*
  var nuevoarray=array;//5 1 4 2 8   
  var swap=0;
  var i=nuevoarray.length;//i=4
  var anterior=0;    
  var pos=1;         //1 4 2  5 8
  while(i>= 0 ){     //1 2 4 5 8
    if(nuevoarray[anterior]>nuevoarray[pos]){
      [nuevoarray[anterior],nuevoarray[pos]]=[nuevoarray[pos],nuevoarray[anterior]]
      swap++;
    }
    if(pos===i && swap===0){
      return nuevoarray;
    }
    if(pos===i){
      anterior=0;
      pos=1;
      swap=0;
      i--;
    } else{
      anterior++;
      pos++;
      }
      
  }
  return nuevoarray;

}
*/
function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
 var swap=true;
 while(swap){
   swap = false; 
   for(var i=0;i<array.length-1;i++){
     if(array[i]>array[i+1]){
       var aux=array[i];
       array[i]=array[i+1];
       array[i+1]=aux;
       swap = true;
      }
   }
 }
 return array;
}

function insertionSort(array) {
  //[5, 1, 4, 2, 8]
  //[1, 5, 4, 2, 8]
  //[1, 4, 5, 2, 8]
  //[1, 2, 4, 5, 8]
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  /*var nuevoarray=array;
  var pos=0;//2
  var i=1;//3
  var cantidad;
  while(i<=nuevoarray.length){
    cantidad=pos;
    if(nuevoarray[pos]>nuevoarray[i]){
     
      while(pos>=0 && nuevoarray[pos]>nuevoarray[i]){
        pos--;
      }
      nuevoarray.splice(pos,pos,nuevoarray[i])
      nuevoarray.splice(i,i,nuevoarray[pos])
      pos=cantidad;
    }
    
    pos++;
    i++;
  }
  return nuevoarray;
  */

  for(var i=1 ;i<array.length;i++){
    var j=i-1;
    var aux =array[i];
    while(j >= 0 && array[j] > aux){
      array[j+1]=array[j];
      j--;
    }
    array[j+1]=aux;
  }
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  //[1, 5, 4, 2, 8]     0  1  2  3  4  
  //[10, -2, -7, 4]     1  2  3  4  5
  /*
  var indice=1;
  var indicemaschico=0;
  var contador=0;
  var maschico=array[indicemaschico];
  while(contador<array.length){
    if(maschico<array[indice]){
      if(indice<(array.length-1)){  
        ++indice;
        continue;
      }
    }else if(maschico>array[indice]){
      maschico=array[indice];
      indicemaschico=indice;
    }
    if(indice===(array.length-1) || indice>(rray.length-1)){  //  indice valga 4
      [rray[contador],array[indicemaschico]]=[array[indicemaschico],array[contador]]
      contador++;
      indice=contador;
      maschico=array[indice];
      indicemaschico=indice;
    }
    ++indice
  }
  return array;
  */
  for (var i = 0; i < array.length-1; i++) {
   let posminimo=i;
   for (var j = i+1; j < array.length; j++) {
     if(array[j]<array[posminimo]){
       posminimo=j;
     }
   }
   if(i!==posminimo){
     var aux=array[i];
     array[i]=array[posminimo];
     array[posminimo]=aux;
     }
  }
 return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
