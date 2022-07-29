"use strict";
// No cambies los nombres de las funciones.

var arreglo = [4, 7, 1, 2, 10, 9, 3];

function quickSort(array) {
  //si el arreglo ya está ordenado, retornarlo
  if (array.length <= 1) return array;

  //crear una variable pivot que sea igual a array.length - 1
  var pivot = array[array.length - 1],
    //crear un nuevo arreglo para almacenar todos los valores menores al pivote = []
    left = [],
    //crear un nuevo arreglo para almacenar todos los valores mayores o iguales al pivote = [4, 1, 7, 2, 9, 10, 3, 2]
    right = [];

  // recorrer el arreglo elemento por elemento agregando cada elemento al sub-arreglo correspondiente
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) left.push(array[i]);
    else right.push(array[i]);
  }

  // retornar el arreglo ordenado
  return quickSort(left).concat(pivot).concat(quickSort(right));
}


function mergeSort(array) {
  // si el arreglo tiene longitud 1, retornarlo
  if (array.length === 1) return array;

  // dividir el arreglo en partes iguales
  var mid = Math.floor(array.length / 2),
    left = array.slice(0, mid),
    right = array.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  var leftIndex = 0,
    rightIndex = 0,
    finalArray = [];

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      finalArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      finalArray.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return finalArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
