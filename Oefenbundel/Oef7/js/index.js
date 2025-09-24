// for( let i=1 ; i<=5 ; i=i+2 ){
//    console.log(i);
// }


// Som van de eerste 10 getallen; doel is ze te vragen.

var som=0;

for (let i=1; i<=10; i=i+1){
    var getal= parseInt (window.prompt( "Geef het getal"));
    som = som + getal;
    console.log(som);
}
