// schrijf een programma die ervoor zorgt dat ieder 3e getal in een reeks 2 keer voorkomt en ieder reëel 10e getal weglaat maar een spatie in de plaats zet. Vraag naar het eindgetal.

let eindGetal = parseInt (window.prompt ("Geef het eindgetal"));
let reeks = ""
let i = 1;
while (i<=eindGetal) {
    if (i%3!==0 && i%10!==0){
        reeks = reeks + i + ","};
    if (i%10===0){
        reeks = reeks + "_,"};
    if (i%3===0){
        reeks = reeks + i + "," + i + ","}
    i=i+1;
}
alert (`Dit is de reeks : ${reeks}`)