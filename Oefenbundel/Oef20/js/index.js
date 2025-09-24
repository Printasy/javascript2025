// Print priemgetallen tussen 1 & 100

var isPriemGetal = 0;
for (var getal = 2; getal <= 100; getal = getal + 1) {
    for (var i = 1; i <= getal; i = i + 1) {
        if (getal % i == 0) {
            isPriemGetal = isPriemGetal + 1
        };
    }
    if (isPriemGetal==2){
        console.log(`${getal} is een priemgetal`)
    };
    isPriemGetal = 0;
}
