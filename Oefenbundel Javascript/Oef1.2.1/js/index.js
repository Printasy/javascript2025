// Oefening 1 : deelname nationale loterij.
// Vraag leeftijd; indien > 17 jaar => Je mag deelnemen; anders mag je niet deelnemen.


let leeftijd = parseInt(window.prompt ("Wat is uw leeftijd ?"));
let volledig = true;
let teBetalen = 20;
let hoeveelVakjes = 2;

if (leeftijd >= 18){
    alert (`Top, je bent ${leeftijd} jaar oud, meerderjarig en dus mag je deelnemen !`)

    volledig = parseInt(window.prompt(`Wil je een volledig bulletin van 12 vakjes spelen ? De kostprijs hiervoor bedraagt ${teBetalen} €. Vul 1 in, indien u een volledig bulletin van 12 vakjes wenst te spelen; of 0 indien u een ander aantal vakjes wenst te spelen `));
    if (volledig === 1) {
        alert (`Top. Hier is uw bulletin. U dient ${teBetalen} € te betalen`);
    } else {
        hoeveelVakjes = parseInt (window.prompt("Hoeveel vakjes wens je te spelen ? 2, 4, 6, 8 of 10 ?"));
        switch (hoeveelVakjes){
            case 2:
                teBetalen=4;
                break;
            case 4:
                teBetalen=8;
                break;
            case 6:
                teBetalen=12;
                break;
            case 8:
                teBetalen=16;
                break;
            case 10:
                teBetalen=18;
                break;
            default:
                teBetalen=0;
        };
        alert(`U dient ${teBetalen} € te betalen.`)
    }
}
else {
    alert ("Sorry, je mag niet deelnemen. Je dient minstens 18 jaar oud te zijn.")
    }