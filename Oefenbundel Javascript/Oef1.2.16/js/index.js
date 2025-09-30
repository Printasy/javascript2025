// schrijf een programma die de faculteit van een getal weergeeft.

let getal = parseInt (window.prompt ("Geef een getal"));
let i = 1;
let faculteit = 1;
while ( i <= getal){
    faculteit = faculteit*i;
    i=i+1;
}
alert (`De faculteit van ${getal} is gelijk aan ${faculteit}`);



