function salut(prenom, age) {
  if (age === undefined) {
    console.log(`Hello, ${prenom}`);
  } else {
    console.log(`Hello, ${prenom}! Vous avez ${age} ans `);
  }
}

salut("quentin", 30);
