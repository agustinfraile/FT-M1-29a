function LinkedList() {
    this.head = null;
    this._length = 0;
}

function Node(value) {
    this.value = value;
    this.next = null;
}

LinkedList.prototype.remove = function () {
    // creo una nueva variable para guardar el head actual
    let current = this.head;

    // verifico si es que la lista esta vacia
    if ( current === null ){
        return null; 
    }

    // en caso de que si existan nodos voy iterando
    // voy iterando, tener en cuenta que el ultimo nodo es cuando next es null
    // para eliminar el ultimo tengo que tener en cuenta que tengo que buscar el penultimo y cambiarle el next por null
    while(current.next.next !== null) {
        current.next = current.next.next;
    }

    // guardo el elemento que estoy por eliminar en una variable para despues retornarlo
    let elementRemove = this.head.next 

    // reasigno el valor del proximo nodo por null para eliminarlo
    current.next = null;

    // elimino un valor en el largo del array
    this._length--;

    return elementRemove;
}