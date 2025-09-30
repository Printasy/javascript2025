// for( let i=1 ; i<=5 ; i=i+2 ){
//    console.log(i);
// }


// Print getallen die deelbaar zijn door 3 ; van 1 tot 30.
var data = ""
for (let i=1; i<=30; i=i+1) {
    if ((i % 3) == 0) {
        data = data + i + ",";
    }
}
data = data + i;
console.log (data)



