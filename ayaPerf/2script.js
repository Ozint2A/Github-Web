let activites = ["mange", "dort", "sort", "conduite", "li"];
let phrase = "dans la vie de tout les jours, je ";

for (let i = 0; i < activites.length; i++) {
  phrase += activites[i];
  if (i === activites.length - 1) {
    phrase += ".";
  } else if (i === activites.length - 2) {
    phrase += " et ";
  } else {
    phrase += ", ";
  }
}
console.log(phrase);
