import inquirer from "inquirer";

inquirer
  .prompt([
    { name: "p1", message: "Qual é a primeira nota?" },
    { name: "p2", message: "Qual é a segunda nota?" },
  ])
  .then((data) => {
    console.log(data);
    const media = (parseInt(data.p1) + parseInt(data.p2)) / 2;
    console.log(` A media é ${media}`);
  })
  .catch((err) => console.log(err));
