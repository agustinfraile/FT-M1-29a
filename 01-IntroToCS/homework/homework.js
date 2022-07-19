'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  // variables que voy a utilizar
  let arrBinario; // para guardar las posiciones en un array del numero ingresado  
  let operacionBinaria; //hara la operacion para convertir los numeros
  let sumaBinarios = 0; //para sumar todos los numeros que voy convirtiendo

  // convertimos el dato ingresado por el usuario a un array de elementos
  arrBinario = num.split('');

  arrBinario;
  // damos vuelta los elementos del array 
  arrBinario.reverse();
  arrBinario;

  // elevamos 2 a la posicion de cada numero y multiplicamos por el valor del digito
  for (let i = 0; i < arrBinario.length; i++) {
      let corroborar = i;
      corroborar

      operacionBinaria = Math.pow(2, i) * arrBinario[i];
      operacionBinaria;
      
      sumaBinarios = sumaBinarios + operacionBinaria
  }
  
  sumaBinarios

  return sumaBinarios;
}

function DecimalABinario(num) {
  // tu codigo aca
  let arrResto = [];
  let resto;
  let numeroBinario;

  while ( num > 0  ) {
      resto = num % 2;
      resto;

      num = Math.floor(num / 2);
      num;    

      arrResto.push(resto)
      arrResto.reverse()

  }

  numeroBinario = arrResto.join('')
  return numeroBinario;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}