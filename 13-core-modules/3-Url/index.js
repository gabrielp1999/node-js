<<<<<<< HEAD
const url = require("url");
const address = "https://www.meusite.com.br/catalog?produtos=notebook";
=======
const url = require('url')
const address = 'https://www.meusite.com.br/catalog?produtos=cadeira-game';
>>>>>>> 9ed4ee31c27145a943d26ec374a118557c341dac
const parsedUrl = new url.URL(address);

console.log(parsedUrl.host);
console.log(parsedUrl.pathname);
console.log(parsedUrl.search);
console.log(parsedUrl.searchParams);
<<<<<<< HEAD
console.log(parsedUrl.searchParams.get("produtos"));
=======
console.log(parsedUrl.searchParams.get("produtos"))

>>>>>>> 9ed4ee31c27145a943d26ec374a118557c341dac
