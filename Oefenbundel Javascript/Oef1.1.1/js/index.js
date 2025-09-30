// Oefening 1 : deelname nationale loterij.
// Vraag leeftijd; indien > 17 jaar => Je mag deelnemen; anders mag je niet deelnemen.


var leeftijd = parseInt(window.prompt ("Wat is uw leeftijd ?"));

if (leeftijd>=18){
    alert (`Top, je bent ${leeftijd} jaar oud, meerderjarig en dus mag je deelnemen !`)
} else {alert ("Sorry, je mag niet deelnemen. Je dient minstens 18 jaar oud te zijn.")}