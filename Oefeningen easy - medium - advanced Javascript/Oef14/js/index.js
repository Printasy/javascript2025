// Som van de eerste n getallen; vraag n

var getal = window.prompt ("Geef een getal");
var som = 0;

for (let i=1; i<=getal; i=i+1){
    som = som+i;
    console.log(som);
}

