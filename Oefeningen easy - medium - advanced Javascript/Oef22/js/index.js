// Bereken de faculteit van een getal


let faculteit = 1;
let getal = window.prompt("Geef een getal");
getal = parseInt (getal);

for (var i=1; i <= getal ; i=i+1);{
    faculteit = faculteit * i;
}

alert (faculteit)