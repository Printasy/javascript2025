let i = 0;
let som=0;
while (i<=20) {
     if (i % 2 === 1) {
        som = som + i
        console.log(`De som van de oneven getallen tot ${i}: ${som}`);
     }
    i = i + 1;
}
let som2 = 0;
for (let a = 0;a<=20;a=a+1){
    if (a % 2 === 1) {
        som2=som2+a;
        console.log(`De som van de oneven getallen tot ${a}: ${som2}`);

    }
}
