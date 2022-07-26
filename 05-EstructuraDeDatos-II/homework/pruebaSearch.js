function LinkedList() {
    this.head = null;
    this._length = 0;
}

function Node(value) {
    this.value = value;
    this.next = null;
}

// - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 

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