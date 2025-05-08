// export function saludar() {
//     console.log("hola")
    
// }
// saludar()

function seriecinco(numeroVueltas) {
    let array =[]

    for (let i = 1; i < numeroVueltas; i++){
        array.push(i*5)

    }
    return array
    
}

console.log(seriecinco(5))