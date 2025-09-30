// inverteer de waarden in een array van getallen

console.log ("Methode 1 via for loop")

let reeks = [17, 32, 58, 60, 70, 52];
let omgekeerde = [];

for (let i = reeks.length - 1; i >= 0; i--) {
    omgekeerde.push(reeks[i]);
};

console.log (`Jou ingegeven reeks is ${reeks}, omgekeerd wordt dit ${omgekeerde}`)

console.log ("Methode 2 via reverse feature")

let reeks2 = [17, 32, 58, 60, 70, 52];
console.log (`Jou ingegeven reeks is ${reeks2}, omgekeerd wordt dit ${reeks2.reverse()}`)

