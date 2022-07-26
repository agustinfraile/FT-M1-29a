function HashTable() {
    // guardo la cantidad de buckets
    this.numBuckets = 35;
}

HashTable.prototype.hash = function (valor) {
    let contadorLetra = 0;

    for (let i = 0; i < valor.length -1; i++) {
        contadorLetra = contadorLetra + valor[i];
    }
}

HashTable.hash(10);