import axios from "axios";

const input = document.getElementById("input");
const imageResultat = document.getElementById("imageresultat");
const button = document.getElementById("btn");
const button2 = document.getElementById("save");
const button3 = document.getElementById("refresh");

button.addEventListener("click", () => {
  const valeur = input.value;
  const hauteur = 200;
  const largeur = 200;
  if (valeur) {
    const imageUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${valeur}&amp;size=${hauteur}x${largeur}`;
    axios
      .get(imageUrl, { responseType: "blob" })
      .then((response) => {
        const data = response.data;
        console.log(data);
        imageResultat.innerHTML = "";
        const img = document.createElement("img");
        img.src = URL.createObjectURL(data);
        imageResultat.appendChild(img);
        input.value = "";
      })
      .catch((error) => {
        console.log(error);
      });
  }
});
button2.addEventListener("click", () => {
  const img = document.querySelector("#imageresultat img");
  if (img) {
    saveImage(img.src);
  } else {
    console.log("Aucune image à sauvegarder.");
  }
});
button3.addEventListener("click", () => {
  imageResultat.innerHTML = "";
});

function saveImage(src) {
  const link = document.createElement("a");
  link.href = src;
  link.download = "qr_code.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
