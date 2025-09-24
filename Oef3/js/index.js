var leeftijd = window.prompt("Hoe oud ben je ?");
var leeftijd = parseInt(leeftijd);
console.log("Jou leeftijd is " + leeftijd)
var minleeftijd = 18;
if(leeftijd >= minleeftijd){
    console.log("okay u mag deelnemen, u bent " + leeftijd + " jaar oud")
    console.log(`u mag deelnemen, u bent ${leeftijd} jaar oud.`)
} else {
    console.log(`U bent te jong, u bent slechts ${leeftijd} jaar oud`)
}