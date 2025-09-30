// schrijf een programma die de fibonacci reeks afdrukt. Vraag hoeveel getallen er gedrukt moeten worden.


// let getal1 = parseInt (window.prompt ("Geef het eerste getal"));
// let getal2 = parseInt (window.prompt ("Geef het tweede getal"));
// let gemeneDeler = 1;
//
// for (let i=1;i<=getal2;i++){
//     if (getal2%i===0){
//         if (getal1%i===0){
//             gemeneDeler=i;
//         }
//     }
// }
// alert (`De gemenedeler is ${gemeneDeler}`)

let getal1 = parseInt (window.prompt ("Geef het eerste getal"));
let getal2 = parseInt (window.prompt ("Geef het tweede getal"));
let gemeneDeler = 1;

for (let i=getal2;i>0;i--){
    if (getal2%i===0){
        if (getal1%i===0){
            gemeneDeler=i;
            break;
        }
    }
}
alert (`De gemenedeler is ${gemeneDeler}`)
