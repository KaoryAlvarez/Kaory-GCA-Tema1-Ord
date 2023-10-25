function raizCuadrada(a, b, c) {
    let dis = b * b - 4 * a * c;
    let raiz1, raiz2;
  
    if (dis > 0) {
      raiz1 = (-b + Math.sqrt(dis)) / (2 * a);
      raiz2 = (-b - Math.sqrt(dis)) / (2 * a);
      return [raiz1, raiz2];

    } else if (dis === 0) {
      raiz1 = -b / (2 * a);
      return [raiz1];

    } else {
      
      let parteReal = -b / (2 * a);
      let parteImaginaria = Math.sqrt(-dis) / (2 * a);
      return [parteReal + " + " + parteImaginaria + "i", parteReal + " - " + parteImaginaria + "i"];
    }
  }
  
  let raices = raizCuadrada(7, 2, 7);
//   console.log("Las raíces son: " + raices);