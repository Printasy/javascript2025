// print Tafel

function printTafel(getal) {
    for (let i=1;i<=10;i++){
        document.querySelector("#resultaat").innerHTML += `<li>${i} x $(getal) is gelijk aan ${i * getal}</li>`;
    }
}

let getal = parseInt (prompt ("Geef een getal in waarvan ik de tafels moet tonen"));
printTafel(getal);



// function isEven(getal){
//      return getal%2 === 0;
// }
//
// let getal = parseInt(prompt("Geef een getal in ?"))
// let resultaat = isEven(getal);
// document.querySelector("#resultaat").innerText = resultaat;

