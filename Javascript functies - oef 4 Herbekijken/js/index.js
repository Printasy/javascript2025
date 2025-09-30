// print true indien ingegeven tekst is een palyndroom; false indien niet

function isPalyndroom(tekst) {
    let omgekeerd="";
    for (let i=tekst.length-1;i>0;i--){
        omgekeerd = omgekeerd + tekst.charAt(i);
        }
    if tekst === omgekeerd ? isPal=True : isPal=False;
    }
    return isPal;
}

let tekst = window.prompt ("Geef een tekst in");
isPalyndroom(tekst);
document.querySelector("#resultaat").innertext = `Is dit woord een palyndroom ? Het antwoord is : ${isPal}`;