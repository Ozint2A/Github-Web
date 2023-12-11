function addition(n1, n2) {
  console.log(n1 + n2);
}
function soustraction(n1, n2) {
  console.log(n1 - n2);
}
function multiplication(n1, n2) {
  console.log(n1 * n2);
}

function division(n1, n2) {
  if (n2 === 0) {
    console.log("erreur");
  } else {
    console.log(n1 / n2);
  }
}

addition(10, 10);
soustraction(10, 5);
multiplication(10, 2);
division(0, 1);
