// schrijf een programma die de tafels van vermenigvuldiging afdrukt; vraag getal en eindgetal


let getal = parseInt(window.prompt ("Geef een getal waarvan ik de tafels moet afdrukken."));
let totWaar = parseInt(window.prompt("Tot waar moet ik de tafels afdrukken ?"));
let reeks = "";
for (let i=1;i<=totWaar; i=i+3){
    reeks="";
    for (let a=0;a<=2;a++) {
        if (i + a <= totWaar){
            reeks = reeks + (`${i + a} * ${getal} = ${(i + a) * getal} `)
        }
        if (a!==2 && (a+i)<totWaar){
            reeks = reeks + "; "
        }
    };
    console.log(reeks);
}





