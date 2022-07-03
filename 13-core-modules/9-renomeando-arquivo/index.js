const fs = require('fs');

fs.rename("biel.php", "biel.dart", (err) =>{
    if(err){
        console.log(err)
    }

    console.log('arquivo renomeado')
});