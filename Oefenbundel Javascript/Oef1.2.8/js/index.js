// schrijf een programma die een getal vraagt en een reeks naast elkaar afdrukt op het scherm met comma ertussen en waarbij de waarde telkens verdubbeld maar het hoogste getal lager blijft dan het opgegeven getal.


let getal = parseInt (window.prompt ("Geef een getal op"));
let reeks = "";
for (let i=1; i<=getal;i=i*2){
    if (i*2<=getal){
        reeks = reeks + i + ","
    } else {
        reeks = reeks + i
    }
};
alert(reeks);


