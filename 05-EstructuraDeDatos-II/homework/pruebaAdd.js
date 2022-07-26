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

let nuevaLista = new LinkedList();

nuevaLista;
console.log(nuevaLista.add('Agustin'));
console.log(nuevaLista.head);
console.log(nuevaLista.head.next);

console.log(nuevaLista.add('Denise'));
console.log(nuevaLista.head);
console.log(nuevaLista.head.next);