// Print de eerste 10 getallen van de fibonacci reeks.
let reeks = [1,1];
let som = 0;
console.log(reeks[0]);
console.log(reeks[1]);
for (let aantal=1;aantal<=8; aantal=aantal+1){
som = reeks[aantal-1] + reeks[aantal];
    reeks.push(som);
    console.log(som);
}

