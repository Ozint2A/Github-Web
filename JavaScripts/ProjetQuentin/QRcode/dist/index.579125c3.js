// import axios from "axios";
// document.addEventListener("DOMContentLoaded", function () {
//   const input = document.getElementById("input");
//   const imageResultat = document.getElementById("imageresultat");
//   const button = document.getElementById("btn");
//   button.addEventListener("click", () => {
//     const valeur = input.value;
//     if (valeur) {
//       const imageUrl = `https://qrtag.net/api/qr_12.svg?url=${encodeURIComponent(
//         valeur
//       )}`;
//       axios
//         .get(imageUrl, { responseType: "blob" })
//         .then((response) => {
//           const data = response.data;
//           const blobUrl = URL.createObjectURL(data);
//           const img = document.createElement("img");
//           img.onload = () => URL.revokeObjectURL(blobUrl);
//           img.src = blobUrl;
//           imageResultat.innerHTML = "";
//           imageResultat.appendChild(img);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     }
//   });
// });
document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("input");
    const loadBtn = document.getElementById("loadBtn");
    const imageContainer = document.getElementById("imageContainer");
    loadBtn.addEventListener("click", ()=>{
        const valeur = input.value;
        if (valeur) {
            const imageUrl = `https://qrtag.net/api/qr_12.svg?url=${encodeURIComponent(valeur)}`;
            axios.get(imageUrl, {
                responseType: "text"
            }).then((response)=>{
                console.log("Image loaded successfully");
                const img = new Image();
                img.src = "data:image/svg+xml," + encodeURIComponent(response.data);
                imageContainer.innerHTML = ""; // Effacer le contenu précédent
                imageContainer.appendChild(img);
            }).catch((error)=>{
                console.error("Error loading image:", error);
            });
        }
    });
});

//# sourceMappingURL=index.579125c3.js.map
