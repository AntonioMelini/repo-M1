'use strict'
// Las funciones nFactoria y nFibonacci deben resolverlas
// usando recursión. Una vez realizadas de esa forma pueden probar hacerlas
// de forma iterativa pero esto último no es obligatorio.

function nFactorial(n) {
  // devolvé el factorial de n (n!)
  // ej:
  // el factorial de 3 es  (3 * 2 * 1)
  //1=1
  //0=1
  if(n > -1 && n<2){return 1}
  else if(n<0){return "no se puede con negativos"}
  return (n * nFactorial(n-1))
}

function nFibonacci(n) {
  // Secuencia de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…
  // Retorna el enésimo numero de la serie
  // nFibonacci(0) // 0  // el elemento 0 es cero
  // nFibonacci(1) // 1 // el elemento 1 es 1
  // nFibonacci(6) // 1 // el elemento 6 es 8
  if(n===0){return 0}
  else if (n>0 && n<3){return 1}
  return nFibonacci(n-1)+nFibonacci(n-2);
/*
6=5+4
5=4+3
4=3+2
3=2+1
2=1+0
1=1+0
0=0

resultados=
0=0
1=1
2=1
3=2
4=3
5=5
6=8




*/



}

// Para esta parte no es necesario utilizar recursión.
// Implementa la clase Queue que debe contener los siguientes métodos:
// enqueue: Agrega un valor a la queue. Respeta el orden existente.
// dequeue: Remueve un valor de la queue. Obedece a FIFO y respeta el underflow (devuelve undefined cuando la queue tiene size cero, o sea, cuando no tiene ningún elemento).
// size: Devuelve el número de elementos que contiene la queue.

function Queue() {
  this.queue=[];
  Queue.prototype.enqueue=function(elem){
    this.queue.push(elem);
  }
  Queue.prototype.dequeue=function(){
    if(this.queue.length===0){
      return undefined;
    }else {
      return this.queue.shift();
    }
  }
  Queue.prototype.size=function(){
    return this.queue.length;
  }

}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
