'use strict'

const { runInThisContext } = require("vm");

// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
function BinarySearchTree(valor) {
  this.value=valor;
  this.left=null;
  this.right=null;
}



BinarySearchTree.prototype.insert=function(valor){
  if(this.value>valor){
    if(!this.left){
      return this.left=new BinarySearchTree(valor);;
    }else{
      return this.left.insert(valor);
    }
  }else if(this.value<valor){
    if(!this.right){
      return this.right=new BinarySearchTree(valor);;
    }else{
      return this.right.insert(valor);
    }
  }
}
BinarySearchTree.prototype.contains=function(valor){
  if(valor===this.value){return true}
  if(valor<this.value){
    if(!this.left){
      return false;
    }
    if(valor===this.left){
      return true;
    }else{
      return this.left.contains(valor);
    }
  }
  else{
    if(!this.right){
      return false;
    }
    if(valor===this.right){
      return true;
    }else{ return this.right.contains(valor);}
  }
}
/*tree.depthFirstForEach(function(val){testArr.push(val);});
                                                                    recibe una funcion y un valor */
BinarySearchTree.prototype.depthFirstForEach= function(cb,order){
  if(!order || order==="in-order"){
    this.left && this.left.depthFirstForEach(cb, order);
    cb(this.value);
    this.right && this.right.depthFirstForEach(cb, order);
  }else if(order=="pre-order"){
    cb(this.value);
    this.left && this.left.depthFirstForEach(cb, order);
    this.right && this.right.depthFirstForEach(cb, order);
  }
  else{
    this.left && this.left.depthFirstForEach(cb,order);
    this.right && this.right.depthFirstForEach(cb,order);
    cb(this.value);
    // si las dos expresiones son verdaderas se hace la de la derecha gracias al &&
  }
}


BinarySearchTree.prototype.breadthFirstForEach=function(cb,array=[]){
  cb(this.value);
  if(this.left) array.push(this.left);
  if(this.right) array.push(this.right);

  array.length && array.shift().breadthFirstForEach(cb,array)
  
}
//tratar con queue

BinarySearchTree.prototype.size=function(){
  if(!this.left && !this.right)    { return 1; }
  else if(this.left && !this.right){  return this.left.size()+1}
  else if(!this.left && this.right){  return this.right.size()+1}

  return 1+(this.left.size()+this.right.size());
}




// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
