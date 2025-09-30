// schrijf een programma die alle priemgetallen op een rij afdrukt

let getal = parseInt (window.prompt ("Geef een getal op"));
let isPriem = true;
let reeks="2";
let i=0;
let y=0;
console.log(`Het ingegeven getal is ${getal}`);
for ( i=3; i<=getal;i++){
    for ( y=2;y<=i/2;y++){
        if ((i % y == 0) && (i!==2)) {
            isPriem = false;
        };
    }
    if (isPriem===true){
         reeks = reeks + " , " + i;
    }
    isPriem = true;
 };
console.log (reeks);


