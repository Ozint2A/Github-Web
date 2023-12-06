console.log("Hello, World!");

let age = 18;
console.log(`j'ai ${age} ans`);

if (age > 18) {
  console.log("majeur mon pote");
} else if (age === 18) {
  console.log("majeur depuis peu");
} else {
  console.log("casse toi vite poto");
}

let estCelibataire = false;
if (estCelibataire) {
  console.log("Quel chanceux !");
} else {
  console.log("Pauv' gars...");
}

let activites = ["manger", "programmer", "dormir"];

for (let i = 0; i < activites.length; i = i + 1) {
  console.log(activites[i]);
}
let count = 2;
while (count < 100) {
  count = count * 2;
  console.log(count);
}
