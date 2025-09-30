// Maak de som van de cijfers in een getal; vraag een getal aan de gebruiker en
// gebruik een for loop om het aantal cijfers in dat getal te tellen.

var getal = parseInt(window.prompt( "Geef een getal"));
var aantal=0;
var som = 0;

while (getal>0) {
    console.log(getal);
    aantal = aantal+1;
    som=som+parseInt(getal%10);
    getal=parseInt(getal/10);
};
console.log(`bestaat uit ${aantal} cijfers`);
console.log(`De som van deze cijfers bedraagt ${som}`)

