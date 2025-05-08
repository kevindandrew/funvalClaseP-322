export function numerosImpares(n) {
    let impares ="";
    for (let i = 0; i < n; i++) {
        impares.push(2 * i + 1);
    }
    return impares;

}
console.log(numerosImpares(5))