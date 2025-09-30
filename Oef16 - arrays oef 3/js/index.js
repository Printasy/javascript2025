// Even getallen afdrukken uit array in console

let reeks = [17,32,58,60,70,52];

for (let i=0;i<reeks.length;i=i+1){
    if (( reeks[i]%2) === 0) {
    console.log(`(${reeks[i]} is een even getal)`);
    }
}