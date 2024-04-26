const resultats = document.querySelector("#boby");
console.log(resultats);

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  console.log(failureItems);
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);

// for (i = 0; i < failuresList.length; i++) {
//   resultats.innerHTML += failuresList[i];
// }

failuresList.forEach((element) => {
  resultats.innerHTML += element;
});
