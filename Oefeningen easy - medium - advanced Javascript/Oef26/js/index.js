// Vindt de grootste deler van een getal. Vraag een getal.

var inputGetal = window.prompt("Geef een getal");
var deler=0;
for (let i=1; i<=inputGetal/2;i++){
    if(inputGetal%i===0){
        deler = i;
    }
}
alert(`De grootste deler is ${deler}`)


