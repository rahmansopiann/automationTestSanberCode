const prompt = require('prompt-sync')({sigint: true});

const x = prompt('Input x: ');

let akarPangkat2 = Math.sqrt(x);

if(x<0){

    console.log("Tidak bisa input bilangan negatif")

}

else if(x % 2 == 1) {

    console.log("Tidak bisa input bilangan ganjil")

}

else (console.log(akarPangkat2)) 