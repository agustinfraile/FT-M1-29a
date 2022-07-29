const {
    Queue,
    Node,
    LinkedList,
    BinarySearchTree
} = require('./DS.js')

// Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [1, [2, [3,4]], [5,6], 7];
//    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
// Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
// [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]

var countArray = function(array) {
    // Tu código aca:
    let suma = 0; // 28

    // [1, [2, [3,4]], [5,6], 7]
    //  e

    array.forEach(function (elemento) {
    if (Array.isArray(elemento)) suma += countArray(elemento);
    // si es array tal cosa A
    else suma += elemento;
    // si no es array tal otra B
    });

    return suma;
}

console.log("count", countArray([1, [2, [3, 4]], [5, 6], 7])); // 28



// Implementar la función countProps: a partir de un objeto en el cual cada propiedad puede contener
// cualquier tipo de dato, determinar la cantidad de propiedades de objetos en cualquier nivel, ya sea el inicial
// u objetos anidados
// Ejemplo:
var obj = {
    a: {
        a1: 10,
        a2: 'Franco',
        a3: {f: 'r', a: 'n', c: {o: true}}
    },
    b: 2,
    c: [1, {a: 1}, 'Franco']
}
// Object.keys(obj) // --> ["a", "b", "c"]

// countProps(obj)--> Deberia devolver 10 ya que el objeto inicial tiene 3 propiedades, pero a su vez
// dentro de a tenemos 3 propiedades mas, luego a3 tiene otras 3 y por ultimo c tiene una extra.
// Propiedades: a, a1, a2, a3, f, a, c, o, b, c --> 10 en total

var countProps = function(obj) {
    console.log("entré");
    // Tu código aca:
    // Pseudocódigo

    // En primer lugar, declarar una variable contadora
    // Con el método Object.keys(), contar las propiedades del objeto padre y asignar ese total como valor inicial de la variable contadora
    var total = Object.keys(obj).length;
    // Recorrer el objeto evaluando el tipo de dato almacenado en cada propiedad
    for (let prop in obj) {
        if (typeof obj[prop] === "object" && !Array.isArray(obj[prop])) {
            // Si el tipo de dato es 'object' (pero NO es array), tomar ese dato como nuevo objeto padre y repetir el proceso, sumando a nuestra variable contadora ese total
            total += countProps(obj[prop]);
            // Si el tipo de dato no es un objeto, ignorarlo
        }
    }
    // Retornar la variable contadora
    return total;

}

// console.log(countProps(obj));


// Implementar el método changeNotNumbers dentro del prototype de LinkedList que deberá cambiar
// aquellos valores que no puedan castearse a numeros por 'Kiricocho' y devolver la cantidad de cambios que hizo
// Aclaracion: si el valor del nodo puede castearse a número NO hay que reemplazarlo
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> ['2'] --> [false] --> ['Franco']
//    lista.changeNotNumbers();
//    Ahora la lista quedaría: Head --> [1] --> ['2'] --> [false] --> ['Kirikocho] y la función debería haber devuelto el valor 1

LinkedList.prototype.changeNotNumbers = function(){
    // Tu código aca:
    // Pseudocodigo

    let current = this.head; // Node {}
    // Contar los cambios que hicimos
    let contador = 0;

    while (current) {
        // Necesitamos preguntar a cada valor de los nodos
        // Ver si podemos transformar ese valor a un Number
        // Si es el caso: Debemos reemplazarlo por 'Kiricocho'

        // Number --> Number("Pepe") --> transforma un valor a numero
        //                          si no puede transformarlo a numero, nos devuelve VALOR -> NaN
        // Number.isNaN(Number("Pepe"))
        if (Number.isNaN(Number(current.value))) {
        // debe ser transformado
            current.value = "Kiricocho";
            contador++;
        }
        current = current.next;
    }   

    // retorno la cantidad de cambios
    return contador;
}

// const listita = new LinkedList()
// listita.add(1)
// listita.add("2")
// listita.add(false)
// listita.add("Pepe")
// console.log(listita)

// console.log("metodo", listita.changeNotNumbers())

// Implementar la función mergeQueues que a partir de dos queues recibidas por parametro
// debe devolver una nueva Queue que vaya mergeando los nodos de las anteriores.
// Ejemplo:
// - queueOne: [7,3,5]
// - queueTwo: [2,4,6]
// mergeQueues(queueOne, queueTwo) --> [7,2,3,4,5,6]
// IMPORTANTE: NO son arreglos sino que son Queues.

var mergeQueues = function(queueOne, queueTwo) {
    // Tu código aca:
  // crear una variable cuyo valor inicial sea una nueva instancia de Queue
    var merged = new Queue();
    // recorrer ambas queues recibidas por parámetro
    while (queueOne.size() || queueTwo.size()) {
        // remover el primer nodo de la primera Queue para agregarlo a la nueva
        if (queueOne.size()) merged.enqueue(queueOne.dequeue());
        // remover el primer nodo de la segunda Queue para agregarlo a la nueva
        if (queueTwo.size()) merged.enqueue(queueTwo.dequeue());
    }
    // repetir hasta que ambas queues estén vacías
    // retornar la nueva queue
    return merged;
};

var queueTree = new Queue();
queueTree.enqueue(7);
queueTree.enqueue(3);
queueTree.enqueue(5);
var queueFour = new Queue();
queueFour.enqueue(2);
queueFour.enqueue(4);
queueFour.enqueue(6);

// console.log(mergeQueues(queueTree, queueFour))


// Implementar la funcion closureMult que permita generar nuevas funciones que representen
// las tablas de multiplicación de distintos numeros
// Ejemplo: 
// - var multByFour = closureMult(4);
// - multByFour(2) --> 8 (2 * 4)
// - multByFour(5) --> 20
// - var multBySix = closureMult(6);
// - multBySix(4) --> 24

var closureMult = function(multiplier) {
    // Tu código aca:
    // Tu código aca:
    return function (numero) {
        return numero * multiplier;
    };
}

/*
    CLOSURE{ LEXICAL.. }
    FN B 
    CONSOLE.LOG(pepe)
*/

// Implementar el método sum dentro del prototype de BinarySearchTree
// que debe retornar la suma total de los valores dentro de cada nodo del arbol
BinarySearchTree.prototype.sum = function() {
    // Tu código aca:
    // Declarar una variable contadora, cuyo valor inicial sea el value del nodo raíz
    var total = this.value;

    // Si existe otro nodo a la derecha, tomar ese nodo como nuevo nodo raíz y repetir el proceso, sumando a la variable contadora el subtotal obtenido
    if (this.right) total += this.right.sum();
    if (this.left) total += this.left.sum();
    // Si existe otro nodo a la izquierda, tomar ese nodo como nuevo nodo raíz y repetir el proceso, sumando a la variable contadora el subtotal obtenido

    // Retornar la variable contadora
    return total;
}

var bst = new BinarySearchTree(15);
bst.insert(10);
bst.insert(17);
bst.insert(5);
bst.insert(7);
bst.insert(3);
bst.insert(25);

console.log(bst.sum());

module.exports = {
    countArray,
    countProps,
    mergeQueues,
    closureMult
}