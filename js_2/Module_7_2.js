window.onload = function () {


    initInput();

    login.onfocus = function () {
        if (login.value == login.getAttribute("watermark")) {
            login.value = "";
            login.style.color = "black";
            login.style.fontStyle = "normal";
        }
    }

    login.onblur = function () {
        if (login.value == "") {
            initInput();
        }
    }

    function initInput() {
        login.value = login.getAttribute("watermark");
        login.style.color = "gray";
        login.style.fontStyle = "italic";
    }
}