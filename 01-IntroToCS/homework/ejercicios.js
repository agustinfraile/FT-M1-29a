const BinarioADecimal = (num) => {
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

BinarioADecimal('8');
console.log(BinarioADecimal('8')) 