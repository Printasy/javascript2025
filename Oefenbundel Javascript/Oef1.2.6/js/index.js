// tel in een tekenreeks hoeveel keer een bepaald karakter voorkomt.

let tekenreeks = window.prompt("Geef een tekenreeks op");
let karakter = window.prompt ("Welk karakter moet ik tellen ?");
let lengte = tekenreeks.length;
let teller = 0;

for (i=0;i<lengte;i++){
    console.log(tekenreeks[i]);
    if (tekenreeks[i]===karakter){
    teller = teller + 1;
    }
}
alert (`Het karakter ${karakter} komt ${teller} keer voor in deze tekenreeks.`)
