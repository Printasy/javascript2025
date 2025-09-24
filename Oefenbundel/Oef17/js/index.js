// Print de veelvouden van een gegeven getal tot 100

var getal = window.prompt ("Geef een getal");
getal = parseInt(getal);
var veelvoud = 0;

for (let i=1; i<=100; i=i+1){
    veelvoud = getal*i;
    console.log(veelvoud);
}

