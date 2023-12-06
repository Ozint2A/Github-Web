division(10, 2);
addition(10, 2);
soustraction(10, 2);
multiplication(10, 2);

function division(n1, n2) {
  if (n2 === 0) {
    console.log("Erreur");
  } else {
    console.log(n1 / n2);
  }
}

function addition(n1, n2) {
  console.log(n1 + n2);
}

function soustraction(n1, n2) {
  console.log(n1 - n2);
}

function multiplication(n1, n2) {
  console.log(n1 * n2);
}
