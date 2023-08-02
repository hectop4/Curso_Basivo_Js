//inicializa las variables antes de que se ejecute el codigo se asignan el valor de undefined
console.log(miNombre);// undefined

var miNombre = "Diego";

// las funciones tambien se declaran antes de que se ejecute el codigo pero no se ejecutan hasta que se llaman
hey();



function hey() {
    console.log("Hola " + miNombre);
}