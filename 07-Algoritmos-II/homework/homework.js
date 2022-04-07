'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  //[5, 1, 4, 2, 8]
  // [5 1 4 2]     8    []
  // [1]  2 [5 4]
  //         4   5
  if(array.length<=1){return array;}

  var pivote=array[array.length-1];
  var derecha=[];
  var izquierda=[];
  for (var  i = 0; i< array.length-1 ;i++) {
    if(array[i]<=pivote){
      izquierda.push(array[i]);
    }else{
      derecha.push(array[i]);
    }
  }
  return quickSort(izquierda).concat(pivote).concat(quickSort(derecha));
  // return [].concat(quickSort(izquierda),array[pivote],quickSort(derecha))
  
}
// 1 5 6 8 9 8

function merge(izq,derec){
  var indiceizq=0;
  var indiceder=0;
  var arr=[];
  while(indiceizq<izq.length && indiceder<derec.length){
    if(derec[indiceder]<=izq[indiceizq]){
      arr.push(derec[indiceder])
      ++indiceder; 
    }
    else{
      arr.push(izq[indiceizq]);
      ++indiceizq;
    }
  }
  return arr.concat(izq.slice(indiceizq)).concat(derec.slice(indiceder));// al concatenar ambos, si alguno queda vacio y se le suma, no hay drama, ya que sumar un arreglo vacio a otro que no esta vacio , te devuelve el mismo
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  
  if(array.length===1){return array;}

  var midpos=Math.floor(array.length/2);
  var izquierda=array.slice(0,midpos);
  var derecha=array.slice(midpos);//el .slice() si le pasas 2 parametros te copia desde el 1 hasta el 2do, si le pasas 1 valor te copia desde ahi hasta el final
  
  return merge(mergeSort(izquierda),mergeSort(derecha));
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
