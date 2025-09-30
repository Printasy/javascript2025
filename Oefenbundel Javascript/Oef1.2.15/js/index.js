// schrijf een programma waarbij je vraagt hoeveel getallen moeten worden ingegeven. Vraag naar de getallen en toon finaal de som ervan.

let aantal = parseInt (window.prompt ("Geef het aantal getallen op waarvan je de som wenst te maken."));
let getal = 1;
let som = 0;
let i= 1;
while (i<=aantal){
    getal = parseInt (window.prompt(`Geef getal ${i} in`));
    som = som + getal;
    i = i+1;
}
alert (`De som van de ingegeven getallen is ${som}`);
alert (`Het gemiddelde van de ingegeven getallen is ${som/(i-1)}`)


