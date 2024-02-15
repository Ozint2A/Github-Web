import axios from "axios";

const input = document.getElementById("search");
const button = document.getElementById("btn");
const container = document.getElementById("liens");

button.addEventListener("click", () => {
  const valeur = input.value;
  const limiteur = 10;
  axios
    .get(
      `https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=${limiteur}&gsrsearch='${valeur}'`
    )
    .then((response) => {
      const data = response.data;
      container.innerHTML = "";

      for (let pageId in data.query.pages) {
        const page = data.query.pages[pageId];
        const pageTitre = page.title;
        const pageUrl = `http://en.wikipedia.org/?curid=${pageId}`;

        const nouveauBouton = document.createElement("button");
        nouveauBouton.textContent = pageTitre;
        nouveauBouton.addEventListener("click", () => {
          window.open(pageUrl);
        });
        container.appendChild(nouveauBouton);
      }
      input.value = "";
    })
    .catch((error) => {
      console.log(error);
    });
});
