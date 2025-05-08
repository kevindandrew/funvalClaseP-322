function esperar() {
    console.log("Esperando...");
}
esperar()

export { esperar };

// funcion que retorne n terminos de los numeros multiplos de 3  
function multiplosDeTres(n) {
    let multiplos = [];
    for (let i = 1; i <= n; i++) {
        multiplos.push(i * 3);

    }
    console.log(multiplos);
}

multiplosDeTres(10);