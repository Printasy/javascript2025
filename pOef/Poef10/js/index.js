
var job= parseInt( window.prompt("Ben je 1=zelfstandig, 2=arbeider, 3=bediende of 4=ambtenaar ?"));

switch (job) {
    case 1:
        alert("wellicht werk je zeer veel");
        break;
    case 2:
        alert("wellicht werk je veel");
        break;
    case 3:
        alert("wellicht werk je zozo");
    case 4:
        alert("duuuh")
    default:
        alert("Je hebt foute waarde ingevuld");
}