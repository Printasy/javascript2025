// Print het omgekeerde van een getal vb 1234 wordt 4321

var getal = window.prompt("Geef een getal");
var lengte = getal.length;
var getal2 = parseInt(getal);
var rest=0
console.log(`Het aantal cijfers in ${getal} bedraagt ${lengte}`);
var omgekeerd="";
for(let i=1;i<=lengte;i++){
    rest=parseInt(getal2%10);
    console.log(`De rest is ${rest}`);
    getal2=getal2/10;
    omgekeerd=omgekeerd+rest;
};
console.log(`Wanneer je ${getal} omkeert krijg je ${omgekeerd}`)