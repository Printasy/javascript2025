//

let cursisten = ["Tom", "Tim", "Jan", "Natan", "Yaman"];
//   for(let i=0;i < cursisten.length ;i=i+1 ){
//    document.querySelector("#cursisten").innerHTML += `<li>${cursisten[i]}</li>`
//}

for(let cursist of cursisten){
    document.querySelector("#cursisten").innerHTML += <li>${cursist}</li>
}