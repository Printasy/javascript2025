// Vraag aantal sterren en toon van 1 tot dat aantal sterren

let aantal = parseInt(window.prompt("Aantal sterren ?"))
let sterren = "";
for (let i = 1; i<=aantal;i++){
    sterren = sterren + "*";
    console.log (sterren);
}
