// Print een driehoek van sterretjes. Aantal rijen door de gebruiker op te geven.

let sterretjes = "";
let spaces = "";
let aantal = window.prompt("Geef een aantal");
aantal = parseInt(aantal);
let a=0;

for (a=1;a<=aantal;a=a+1) {
    for (let i = 1; i <= a; i=i+1) {
        sterretjes = sterretjes + "**";
    };
    for (space = (aantal-a); space > 0; space = space - 2) {
        spaces = spaces + "  ";
    };
    if (a%2===0){spaces=spaces+" "};
    console.log(spaces + sterretjes)
    sterretjes=""
    spaces=""
}





