// Vraag getal en check als het een priemgetal is

let getal = parseInt (window.prompt ("Geef een getal"));
let isPriem = true;
    for (let i = 2; i<= getal/2; i++){
        if (getal%i===0){
            isPriem=false;
        }
    };
if (isPriem===true){alert ("Dit getal is een priemgetal")}
         else {alert ("Dit getal is GEEN priemgetal")
 }



