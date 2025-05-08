export function multiplicar(){
    let array = [1, 2, 3, 4]
    acumulao = 0
    for (let index = 0; index < array.length; index++) {
        
        resultado = acumulao += array[index]
    }
    console.log(resultado)
}
multiplicar()