function addClick(id, handler) {
    const e = document.getElementById(id);
    e.addEventListener("click", handler, false)
}
function addLoad(id, handler) {
    const e = document.getElementById(id);
    e.addEventListener("load", handler, false)
}
function addChange(id, handler) {
    const e = document.getElementById(id);
    e.addEventListener("change", handler, false)
}
function removeClick(id, handler) {
    const e = document.getElementById(id);
    e.removeEventListener("click", handler, false)
}
function removeLoad(id, handler) {
    const e = document.getElementById(id);
    e.removeEventListener("load", handler, false)
}
function removeChange(id, handler) {
    const e = document.getElementById(id);
    e.removeEventListener("change", handler, false)
}
addClick("ololo1", function () {
    console.log(11);
})