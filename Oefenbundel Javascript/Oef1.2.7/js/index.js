// vraag een getal; druk op het scherm alle even getallen af tussen 0 en dit getal

let getal = parseInt (window.prompt ("Geef een getal op"));

for (let i=1; i<=getal;i++){
    if(i%2===0){
        console.log(`${i} is een even getal`)
    }
}
