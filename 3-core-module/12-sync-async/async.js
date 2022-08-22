const fs = require("fs");

console.log("inicio");

fs.writeFile("biel.js", "const number = 5;", (err) => {
  setTimeout(() => {
    console.log("arquivo criado");
  }, 4000);
});

console.log("fim");
