// Vraag getal en geef alle mogelijke 2decimale combinaties terug tot aan dat getal.

let getal = parseInt(window.prompt("Geef een getal."));
let output = "00";
let numString = "";
for (i=1;i<=getal;i++){
    if (i<10){
        numString = "0"+i;
    } else {
        numString = i;
    }
    output = output + "," + numString;
}
console.log(output);

