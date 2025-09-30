// Print getallen tussen 1 & n die deelbaar zijn door 5; vraag naar n

var getal = window.prompt ("Geef een getal ");
getal = parseInt (getal);

for (let i=1; i<=getal; i=i+1) {
    if ((i % 5) == 0) {
        console.log(i);
    } else {
    }
}

