'use strict'
// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function LinkedList() {
  this.cantelem=0;
  this.head=null;
}
function Node(valor){
  this.next=null;
  this.value=valor ; 
}
LinkedList.prototype.add=function(valor){
  var nuevonode=new Node(valor);
  var current =this.head;
  if(!current){
    this.head=nuevonode
    this.cantelem++
    return nuevonode
  }
  while(current.next){
    current=current.next
  }
  current.next=nuevonode
  this.cantelem++
  return nuevonode
}

// list --> franco --> miguel --> perez-->null

LinkedList.prototype.remove=function(){
  
  
  if(!this.head){return null}
  
  if(this.head.next===null){
    var valorr=this.head.value
    this.head=null;
    return valorr;
  }
  var current=this.head;
  
  while(current.next.next){
    current=current.next
  }
  
  var valorr=current.next.value
  current.next=null;
  this.cantelem--
  return valorr;
  
}
LinkedList.prototype.search=function(elem){
  if(!this.head){return null}
  var current=this.head
  
  while(current ){
    if(typeof elem==="function"){
      if(elem(current.value)){
       return current.value
      }
    }
    else if(current.value===elem ){
      return elem
    }
    current=current.next
  }
 
  return null
}


// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos set, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable() {
  this.numBuckets=35;
  this.buckets=[];
}
HashTable.prototype.hash=function(key){
  var acum=0;
  for(var i = 0 ; i< key.length; i++){
    acum += key.charCodeAt(i);
  }
  return acum % this.numBuckets
}
HashTable.prototype.set=function(key,value){
  if(typeof key !== "string") throw new TypeError('Keys must be strings')
  var index= this.hash(key);
  if(!this.buckets[index]){
    this.buckets[index]= {}
  }
  this.buckets[index][key] = value
}
//  this.buckets[index]= es el lugar del arrreglo
//  this.buckets[index][key]=es la prop del objeto del arreglo

HashTable.prototype.get=function(key){
  var index = this.hash(key);
  return this.buckets[index][key];
}
HashTable.prototype.hasKey=function(key){
  var index = this.hash(key);
    return  !!this.buckets[index][key]
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
