import axios from "axios";

const button = document.getElementById("btn");
const nekoImg = document.getElementById("nekoImg");

button.addEventListener("click", () => {
  fetch("https://nekos.best/api/v2/neko")
    .then((response) => response.json())
    .then((json) => console.log(json.results[0].url));
});
