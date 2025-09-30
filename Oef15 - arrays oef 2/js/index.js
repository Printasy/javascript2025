// Som van alle elementen in een array

let reeks = [17,32,58,60,70,52];
let grootste = 0;
for (let i=0;i<reeks.length;i=i+1){

    if (grootste < reeks[i]) {
    grootste = reeks[i];
    }
}
alert(`Het grootste getal van deze is ${grootste}`)