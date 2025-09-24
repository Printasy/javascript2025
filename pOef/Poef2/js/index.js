var geboorteJaar = window.prompt("Wat is uw geboortejaar ?");
var huidigJaar = window.prompt("Wat is het huidige jaar ?");

var geboorteJaar=parseInt(geboorteJaar);
var huidigJaar=parseInt(huidigJaar);

var leefTijd= huidigJaar - geboorteJaar;

console.log(`Uw huidige leeftijd is ${leefTijd} jaar.`);

if(leefTijd >= 18){
    console.log("Je mag deelnemen")
}`else{
console.log("Je mag niet deelnemen")`





