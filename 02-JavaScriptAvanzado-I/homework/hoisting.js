// Hoisting

// ejercicio 1
function test() {
    console.log(a); //undefined (no hay datos todavia)
    console.log(foo()); //2

    var a = 1; //declaro e inicializo la variable a
    function foo() {
        return 2;
    }
}

test(); //undefined, 2



// ejercicio 2
var snack = 'Meow Mix';//declaro e inicializo la variable snack

function getFood(food) {

    // condicion que nunca se cumplira al tener como parametro false
    if (food) {
        var snack = 'Friskies';//declaro e inicializo la variable snack
        return snack;//retorno Friskies
    }
    return snack;//retorno Meow Mix
}

getFood(false); //error (no muestra nada)