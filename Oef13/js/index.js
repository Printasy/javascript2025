// Raad een getal tussen 1 & 10

let teRadenGetal = 8;
let getal = 0;
getal = parseInt (window.prompt ("Geef het te raden getal"));
while (getal !== teRadenGetal){
    getal = parseInt (window.prompt ("Fout ! Doe opnieuw"));
}
alert ("U heeft het goed geraden");

