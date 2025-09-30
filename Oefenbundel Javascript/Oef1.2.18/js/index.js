// schrijf een programma die een willekeurig getal bepaald tussen 1 en een ingegeven getal waarna het de bedoeling is het getal te raden.

let eindGetal = parseInt (window.prompt ("Geef het eindgetal"));
let willekeurigGetal = parseInt(Math.random() * eindGetal);
let geradenGetal = 1;
let aantal = 1
alert (`Het willekeurig getal is ${willekeurigGetal}`)
while (geradenGetal !== willekeurigGetal){
    geradenGetal = parseInt (window.prompt("Raad het getal"));
    if (geradenGetal > willekeurigGetal) {
        alert ("Het te raden getal is kleiner")
    } if (geradenGetal < willekeurigGetal) {
        alert ("Het te raden getal is groter")
    }
    aantal = aantal + 1;
}
alert (`Proficiat ! U heeft het getal ${willekeurigGetal} geraden in ${aantal} keren`)


