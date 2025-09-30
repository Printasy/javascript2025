// Vraag aantal sterren en toon van 1 tot dat aantal sterren + van aantal sterren tot 1

let aantal = parseInt(window.prompt("Aantal sterren ?"))
let sterren = "";
let y = 0;
for (let i = 1; i<=aantal;i++){
    sterren = sterren + "*";
    console.log (sterren);
}
sterren = "";
for (y=1;y<aantal;y++){
    for (i=1;i<=(aantal-y);i++){
        sterren = sterren + "*";
    }
    console.log(sterren);
    sterren = "";
}
