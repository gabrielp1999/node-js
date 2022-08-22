const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Qual é sua linguagem prefirida?", (language) => {
  if (
    language === "Javascript" ||
    language === "Js" ||
    language === "javascript"
  ) {
    console.log("JS reina");
  } else {
    console.log(`A minha linguagem preferida é ${language}`);
  }
  readline.close();
});
