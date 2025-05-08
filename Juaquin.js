function encontrarMayor(a, b, c) {
    let mayor = a;
  
    if (b > mayor) {
      mayor = b;
    }
    if (c > mayor) {
      mayor = c;
    }
  
    return mayor;
  }
  
  let mayor = encontrarMayor(21, 54, 23);
  console.log("El número mayor es:", mayor);