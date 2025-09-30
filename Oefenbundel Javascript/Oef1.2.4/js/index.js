// Vraag getal en bereken de faculteit van dat getal.

let getal = parseInt(window.prompt("Geef het getal waarvan ik de faculteit dien te berekenen."));
let faculteit = 1;
for (let i=1;i<=getal;i=i+1){
    faculteit = faculteit * i;
}
alert (`De faculteit van ${getal} is gelijk aan ${faculteit}`)
