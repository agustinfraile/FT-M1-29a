"use strict";
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  // 0. Declarar una variable 'factores' y asignarle como valor inicial un arreglo conteniendo únicamente el número 1.
  var factores = [1];
  //    Declarar una variable divisor y asignarle el valor inicial de 2. Este será nuestro mínimo divisor.
  var divisor = 2;

  while (num > 1) {
    // 1. Dividir num por el mínimo divisor posible (variable divisor), siendo el divisor un número natural mayor a uno y mayor al divisor previamente utilizado.
    if (num % divisor === 0) {
      //      1A. Si la división da resto 0,
      //          almacenar el divisor dentro del arreglo 'factores',
      factores.push(divisor);
      //          repetir el proceso desde el paso 1, tomando el cociente de la división como dividendo de la nueva división
      num = num / divisor;
    } else {
      //      1B. Si la división da resto distinto de 0,
      //          incrementar el divisor en 1 y repetir el proceso desde el paso 1.
      divisor++;
    }
  }

  // 2. Cuando el dividendo sea igual a 1, dar por terminado el procedimiento y retornar el conjunto de todos los divisores.
  return factores;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  var swapped = true;

  while (swapped) {
    swapped = false;

    // Recorrer el arreglo desde la primera posición hasta la anteúltima
    for (let i = 0; i < array.length - 1; i++) {
      // Comparar cada elemento con el elemento inmediatamente siguiente
      if (array[i] > array[i + 1]) {
        // Si el elemento siguiente es menor al seleccionado (es decir, están desordenados), invertir el orden
        var auxiliar = array[i];
        array[i] = array[i + 1];
        array[i + 1] = auxiliar;

        // Si al terminar de recorrer todo el arreglo no se hizo ningún cambio, dar por terminado el procedimiento
        swapped = true;
      }
    }
  }
  // Retornar el arreglo ordenado
  return array;
}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  // Recorrer el arreglo desde el segundo elemento hasta el último con una variable i
  for (let i = 1; i < array.length; i++) {
    // Guardar el elemento array[i] en una variable auxiliar
    var auxiliar = array[i];
    // Con una variable j recorrer el arreglo desde i - 1 hasta el primer elemento
    var j = i - 1;

    while (j >= 0 && array[j] > auxiliar) {
      // Si el elemento array[i] es menor a array[j], mover array[j] una posición hacia adelante (a array[j+1])
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = auxiliar;
  }

  return array;
}

//    [1, 2, 3, 4, 5, 8]
//                 i
//                j

//min = 5
//i = 4

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for (let i = 0; i < array.length - 1; i++) {
    var min = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }

    if (min !== i) {
      var auxiliar = array[i];
      array[i] = array[min];
      array[min] = auxiliar;
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
