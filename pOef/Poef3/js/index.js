var getal1 = window.prompt("Geef getal 1 in");
var getal2 = window.prompt("Geef getal 2 in");

var getal1=parseInt(getal1);
var getal2=parseInt(getal2);

console.log(getal1);
console.log(getal2);

if (getal1 >= getal2){
    console.log (`Uw leeftijd is ${getal1-getal2}`);
} else {
    console.log (`Uw leeftijd is ${getal2-getal1}`);
}
