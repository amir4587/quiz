var visaAntalRatt = "ja";
var text = ["Antal korrekta svar", "Av antal", "Procentsats"];

function ratta() {
    var antalRatt = 0;
    var i = 1;
    while (typeof (eval("document.fragefalt.svar" + i)) == "object") {
        for (var j = 0; j < eval("document.fragefalt.svar" + i + ".length"); j++) {
            if (eval("document.fragefalt.svar" + i + "[" + j + "].checked") && eval("document.fragefalt.svar" + i + "[" + j + "].value") == "true") {
                antalRatt++;
                break;
            }
        }
        i++;
    }
    i--;

    if (visaAntalRatt == "ja") {
        alert(text[0] + ": " + antalRatt + "\n" + text[1] + ": " + i + "\n" + text[2] + ": " + Math.round(antalRatt / i * 100) + "%");
    }
}