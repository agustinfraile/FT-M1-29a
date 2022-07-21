// SCOPE Y HOISTING

// Determina que sera impreso en la consola, sin ejecutar el codigo.

// ejercicio 1
x = 1; //asignacion de variable 
var a = 5; //declaracion y asignacin de la variable 
var b = 10; //declaracion y asignacin de la variable 

// declaracion y asignacion de la variable c donde guarda una funcion anonima
var c = function(a, b, c) { 
    var x = 10; //declaracion de la variable x
    console.log(x); //mostrara el valor de x por consola
    console.log(a); //mostrara el valor de a por consola
    // declaracion y asignacion de la variable f donde guarda una funcion anonima
    var f = function(a, b, c) {
    b = a; //reasignacion de la variable b por la variable a
    console.log(b); //mostrara el valor de b por consola
    b = c; //reasignacion de la variable b por la variable c
    var x = 5; //declaracion de la variable x
    }
    f(a,b,c); //ejecuto la funcion que guarde en la variable f
    //mostrara por consola 5
    console.log(b);//mostrara el valor de b por consola
}
c(8,9,10); //ejecuto la funcion que guarde en la variable c
//mostrara por consola 10,8,8,9
console.log(b); //mostrara 10 por consola
console.log(x); //mostrara 1 por consola



// ejercicio 2
console.log(bar); //mostrara undefined ya que a esta altura no tiene el dato de que tiene dentro de la variable
console.log(baz); //mostrara error ya que no hay una declaracio de esta variable para mostrar algun tipo de dato
// a partir de aqui no mustra nada por el error 
foo(); 
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;



// ejercicio 3
var instructor = "Tony"; //inicializo y declaro la variable instructor
// este condicional siempre pasara ya que de condicion tiene true
if(true) {
    var instructor = "Franco"; //declara una nueva variable con el mismo nombre que la anterior pero distinto dato
}
// como paso el if anterior cambia el dato que tiene guardado la variable instructor
console.log(instructor); //muestra Franco



// ejercico 4
var instructor = "Tony"; //inicializo y declaro la variable instructor
console.log(instructor); //muestro por consola Tony
// IIFE (funcion anonima autoinvocada)
(function() {
    // condicioinal que pasara al tener de condicion true
    if(true) {
        var instructor = "Franco"; //declaracion e inicializacion de variable 
        console.log(instructor); //muestro por consola Franco
    }
})();
console.log(instructor); //muestro por consola Tony



// ejercicio 5
var instructor = "Tony"; //inicalizo y declaro la variable instructor
let pm = "Franco"; //inicializo y declaro la variable pm
// condicioinal que pasara al tener de condicion true
if (true) {
    var instructor = "The Flash"; //inicializo y declaro la varibla instructor
    let pm = "Reverse Flash";//inicializo y declaro la variable pm (nueva)
    console.log(instructor); //muestro por consola The Flash
    console.log(pm);//muestro por consola Reverse Flash
}
console.log(instructor);//muestro por consola The Flash
console.log(pm);//muestro por consola Franco (global)




