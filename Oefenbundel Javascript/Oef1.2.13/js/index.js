// schrijf een programma die het kleinste gemeen veelvoud afdrukt.


let getal1 = parseInt (window.prompt ("Geef het eerste getal"));
let getal2 = parseInt (window.prompt ("Geef het tweede getal"));
let gemeenVeelvoud = 1;

for (i=1;i<=getal2;i=i+1){
    for (a=1;a<=getal1;a=a+1) {
        if (i * getal1 === a * getal2) {
            alert(`Het kleinste gemeen veelvoud is ${i * getal1}`);
            break;
        }
    }
    if (i*getal1 === a*getal2){
            break;
    }
}