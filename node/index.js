let toto = "Toto";

const titi = "Titi";

function maFonction(name, age) {
  console.log(`Bienvenue, ${name} ! Vous avez ${age} ans.`);
  return age;
}

let age = maFonction("Quentin", 30);

let maFonction2 = (name) => {
  console.log(`Bienvenue, ${name} !`);
};

maFonction2("Nicolas");

(() => {
  console.log("Coucou");
})();

let formateur = {
  name: "Quentin",
  display: true,
};

// if (formateurs.length) {
//   console.log("Vrai");
// } else {
//   console.log("Faux");
// }

for (let i = 0; i < 10; i++) {
  console.log(i);
}

let formateurs = [
  {
    name: "Quentin",
    age: 31,
    display: true,
  },
  {
    name: "Nicolas",
    age: 29,
    display: true,
  },
  {
    name: "Balthazar",
    age: 22,
    display: false,
  },
];

// for (let i = 0; i < formateurs.length; i++) {
//   console.log(formateurs[i]);
// }

// for formateur in formateurs:
//    pass
formateurs.forEach((formateur) => {
  if (formateur.age % 2 == 1) {
    console.log(formateur.name);
  }
});
