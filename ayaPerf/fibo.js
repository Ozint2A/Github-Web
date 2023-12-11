function suiteFibo(longueur) {
  let maListeFibo = [0, 1];
  for (let i = 2; i < longueur; i++) {
    let nombreSuivant = maListeFibo[i - 1] + maListeFibo[i - 2];
    maListeFibo.push(nombreSuivant);
  }
  console.log(
    `les ${longueur} premiers nombres de la suite de fibonacci sont ${maListeFibo}`
  );
}
suiteFibo(10);
