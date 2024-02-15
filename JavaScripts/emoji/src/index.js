import axios from "axios";

const button = document.getElementById("btn");
const emoji = document.getElementById("emoji");

button.addEventListener("click", () => {
  axios
    .get("https://emojihub.yurace.pro/api/random")
    .then((response) => {
      console.log(response.data);
      emoji.innerHTML = response.data.htmlCode[0];
    })
    .catch((error) => {
      console.log(error);
    });
});
