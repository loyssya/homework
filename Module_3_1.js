
var Module = {};


Module.changeP = function () {
    let chenge = document.getElementsByTagName("p");
    for (let i = 0; i < chenge.length; i++) {
        chenge[i].innerHTML = "PARAGRAPH";
    }
}

    window.onload =  Module.changeP;

