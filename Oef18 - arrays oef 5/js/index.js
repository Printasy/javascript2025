// Schrijf een programma dat controleert of een bepaald getal aanwezig is in een array
// en "Gevonden!" afdrukt als het aanwezig is, anders "Niet gevonden".

let getallen = [17,32,48,3,15,92,18];
let input = window.prompt("Geef een getal");
input = parseInt(input);
let lengte = getallen.length
let check = "false";
for (let i = 0; i<lengte-1; i=i+1)
{
    if (input===getallen[i]){check = true}
    else {check = false}
}
if ( check === true ) {
    alert (`het getal ${input} is gevonden`)
}  else {
    alert(`het getal ${input} is NIET gevonden`)
}
