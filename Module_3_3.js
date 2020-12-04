
let getClass = {
    findClass: function (eClass) {
        return document.getElementsByClassName(eClass);
    }
}
console.log( getClass.findClass("about"));