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
  
  let mayor = encontrarMayor(2, 54, 33);
  console.log("El número mayor es:", mayor);