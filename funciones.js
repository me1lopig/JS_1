// uso de funciones en javascript

function saludo() {
    console.log("Hola a todos")
    
}

function suma(a,b) {
    let suma=a+b;
    console.log('La suma de '+a+' y de '+b+' es '+suma);
}

function suma2(a,b) {
    return a+b;
}



// llamada a la función
let a=2;
let b=3;

saludo();
suma(a,b);
console.log('Tambien la suma de '+a+' y de '+b+' es '+suma2(a,b));


