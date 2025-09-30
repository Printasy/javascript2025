// schrijf een programma die de fibonacci reeks afdrukt. Vraag hoeveel getallen er gedrukt moeten worden.


let aantal = parseInt(window.prompt ("Hoeveel getallen uit de fibonacci reeks moet ik afdrukken ?"));
let reeks = [1,1];
let som = 0;
for (let i=2;i<aantal;i++) {
    som = reeks[i-1] + reeks[i-2];
    reeks.push(som);
};
alert (`Fibonacci reeks : ${reeks.join(", ")}`);






