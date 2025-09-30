// Oefening : Schrijf een programma waarin je aan de gebruiker vraagt hoeveel getallen hij wil ingeven. Schrijf vervolgens het totaal van alle ingegeven getallen op het scherm.

let aantalGetallen = parseInt(window.prompt("Hoeveel getallen wil je ingeven ?"));
let som = 0;
let getal = 0;
for (let i=1;i<=aantalGetallen;i++) {
    getal = parseInt(window.prompt(`Geef het getal nummer ${i} in`));
    som = som+getal;
}
alert (`De som van de ingegeven getallen is ${som}`)
