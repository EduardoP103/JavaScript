/*
Ejemplo de tipos de datos en JavaScript 
*/
// Tipo de dato string
var nombre = "Eduardo";

console.log(nombre);

nombre = 10;
console.log( typeof nombre);

// Tipo de dato númerico
var numero = 1000;
console.log(numero);

// Tipo de dato object 
var objecto = { 
    nombre: "Javier",
    apellido: "Pastor",
    celular: "999 999 999"
}

console.log(objecto);

// Tipo de dato boolean (true, false)
var bandera  = true;
console.log(typeof bandera);

// Tipo de dato function 
function miFuncion(){}
console.log( typeof miFuncion)

// Tipo de dato Symbol
var simbolo = Symbol("mi simbolo");
console.log(typeof simbolo)

// Tipo clase es una function 
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof Persona)

// Tipo undefined
var x;
console.log(x);

x = undefined;
console.log(typeof x);

// null = ausencia de valor 
var y = null;
console.log(y);

var autos = [
    'Rojo', 'Verde', 'Azul'
];
console.log(autos);
console.log(typeof autos)