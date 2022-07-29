"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
  this.head = null;
  this._length = 0;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

// agregar un nuevo nodo al final de la lista
LinkedList.prototype.add = function(data) {
  // guardo el valor actual del head en una variable
  let current = this.head;
  // creo una variable instanciando a un nuevo nodo
  let nuevoNodo = new Node(data);

  // verifico si es que la lista esta vacia
  if ( current === null ) {
      this.head = nuevoNodo; //agrego el nodo en el head de la lista
      this._length++; //sumo uno al largo de la lista
      return nuevoNodo; //retorno el nodo
  }

  // si es que la lista no esta vacia
  // itero la lista hasta que el proximo nodo no exista con la prop next
  // cuando el proximo nodo es next quiere decir que estoy en el ultimo 
  while (current.next !== null) {
      current = current.next; // para iterar necesito ir igualando el actual con el prox.
  }

  // cuando llego al ultimo nodo salgo del bucle 
  current.next = nuevoNodo; //igualo el proximo current al nuevo nodo
  this._length++; //aumento en 1 el largo de la lista

  return nuevoNodo; //retorno el nodo
}



// elimina el ultimo nodo de la lista y retorna su valor
LinkedList.prototype.remove = function () {
  // creo una nueva variable para guardar el head actual
  let current = this.head;

  // verifico si es que la lista esta vacia
  if ( current === null ){
      return null; 
  }

  // en caso de que exista un solo nodo en la lista
  if( current.next === null ) {
    this.head = null; //reasigno el valor del head por null
    this._length--; //elimino un numero en el largo de la lista

    return current.value; //retorno el valor del nodo que borre
  }

  // en caso de que si existan nodos voy iterando
  // voy iterando, tener en cuenta que el ultimo nodo es cuando next es null
  // para eliminar el ultimo tengo que tener en cuenta que tengo que buscar el penultimo y cambiarle el next por null
  // itero mientras current.next.next exista (no sea null)
  while(current.next.next !== null) {
      current = current.next; //sobreescribo el nodo siguiente en el actual
  }

  // guardo el ultimo nodo que estoy por eliminar en una variable para despues retornarlo
  let elementRemove = current.next;

  // reasigno el valor del proximo nodo por null para eliminarlo
  current.next = null;

  // elimino un numero en el largo de la lista
  this._length--;

  return elementRemove.value;
}


// busca un nodo en particular mediante un parametro
LinkedList.prototype.search = function ( valor ) {
  let current = this.head;

  if ( current === null ) {
      return null;
  }
  
  // itero mientras exista un valor en current
  while( current ) {
      if ( typeof(valor) === 'function' ) {
          if (valor(current.value) ) {
              return current.value;
          }
      }
      
      // caso que el valor no es una funcion. Solo un dato.
      if( current.value === valor) {
          return current.value;
      }
      // itero current con el siguiente para que sea dinamico
      current = current.next;
  }

  return null;

  
}


/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {
  // guardo la cantidad de buckets
  this.numBuckets = 35;

  // estuctura para guardar los datos
  this.buckets = [];
}


// metodo set
HashTable.prototype.set = function (clave, valor) {
  // error para cuando no sea un string
  if (typeof clave !== "string") {
    throw new TypeError ('Keys must be strings'); //del test
  }

  let index = this.hash(clave) //retorna un numero hasheado

  //sin o tengo ningun dato guardado en index
  if (!this.buckets[index]) { 
    this.buckets[index] = {}; //hago que sea un objeto
  }


  this.buckets[index][clave] = valor; //guardo en la posicion index subposicion clave, el valor 
}

HashTable.prototype.get = function (clave) {
  let index = this.hash(clave); //hasheo la clave retornando el numero
  return this.buckets[index][clave]; //retorno el valor
} 

HashTable.prototype.hasKey = function (clave) {
  let index = this.hash(clave);

  return this.buckets[index].hasOwnProperty(clave); //con la propiedad para saber si esta o no esta dentro del objeto (booleano)
}

HashTable.prototype.hash = function (valor) {
    let contadorLetra = 0;

    //itera las letras y le suma el valor del charcodeat
    for (let i = 0; i < valor.length; i++) {
      contadorLetra = contadorLetra + valor.charCodeAt(i);
    }

    return contadorLetra % this.numBuckets; //de esta manera nunca se pasa del numero
}
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
