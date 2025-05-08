export function edad(edad) {
    console.log("Tu edad es " + edad)
}
edad();

export function sumatoria3(numero1, numero2, numero3) {
    let array = [numero1, numero2, numero3];
    for (let i = 0; i < array.length; i++) {
        array[i] = parseFloat(prompt("Dame el numero " + (i + 1)))
    }
    let value = array.reduce((aculumador, element) => aculumador + element, 0)
    alert("Tu resultado es: " + value)

}
sumatoria3()