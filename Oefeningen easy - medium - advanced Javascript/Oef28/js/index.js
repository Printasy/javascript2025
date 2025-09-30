// Maak de som van de eerste n getallen van de fibonacci reeks.

var aantal= parseInt(window.prompt("Hoeveel getallen uit de fibonacci reeks ?"));
let reeks = [1,1];
let fibo = 0;
let som=0;
console.log(reeks[0]);
console.log(reeks[1]);
for (let i=1;i<=8; i=i+1){
fibo = reeks[i-1] + reeks[i];
    reeks.push(fibo);
    console.log(fibo);
    som=som+fibo;
}
som=som+2;
console.log(`De som van deze fibonacci getallen is ${som}`)