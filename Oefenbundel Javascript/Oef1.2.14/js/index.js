// schrijf een programma die een aantal getallen laat ingeven tot er een negatief getal wordt ingegeven. Toon vervolgens de som v/d ingegeven getallen.

let getal = 1;
let som = 0;
while (getal>0){
    getal = parseInt (window.prompt("Geef een getal"));
    som = som + getal;
}
alert (`De som van de ingegeven getallen is ${som}`);
