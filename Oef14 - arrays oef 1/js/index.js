// Som van alle elementen in een array

let reeks = [17,32,58,60,70,52]
let som = 0;
for (let i=0;i<reeks.length;i=i+1){
    som = som + reeks[i];
}
alert(`De som van deze reeks is ${som}`)