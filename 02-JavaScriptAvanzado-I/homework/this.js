// THIS

var fullname = 'Juan Perez'; //declaracion e inicializacion de la variable 
// declaracion e inicializacion de la variable que guarda un objeto
var obj = {
    fullname: 'Natalia Nerea',
    prop: {
        fullname: 'Aurelio De Rosa',
        getFullname: function() {
            return this.fullname; 
        }
    }
};

console.log(obj.prop.getFullname()); //Aurelio De Rosa

var test = obj.prop.getFullname;//guardo en una variable la funcion sin ejecutar

console.log(test()); //ejecuto la variable que cree y muestra Juan Perez (global)