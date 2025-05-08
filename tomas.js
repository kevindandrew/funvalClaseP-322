function kOndaLoco() {
  console.log("K onda locooooo!!!");
}

function numerosPares(n_terminos) {
  let arrayPares = [];
  for (let i = 1; i < n_terminos + 1; i++) {
    arrayPares.push(i * 2);
  }
  return arrayPares;
}

export { kOndaLoco, numerosPares };
