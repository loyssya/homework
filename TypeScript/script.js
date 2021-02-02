"use strict";
var inputs = prompt("What kind of ice cream do you want?" +
    "\nPlease write the size of ice cream: " +
    "\n*Small($ 10);" +
    "\n*Big($ 25)." +
    "\nAlso, write at least 1 ice cream filling:" +
    "\n*Chocolate (+ $ 5);" +
    "\n*Caramel (+ $ 6);" +
    "\n*Berries (+ $ 10)." +
    "\nAdditionally, you can choose:" +
    "\n*Marshmallows (+ $ 5).") || "";
var order = (inputs === null || inputs === void 0 ? void 0 : inputs.match(/(big|caramel|small|chocolate|caramel|berries|marshmallows)/gmi)) || [];
var orderEnum = [];
console.log(order);
var Components;
(function (Components) {
    Components[Components["Big"] = 0] = "Big";
    Components[Components["Small"] = 1] = "Small";
    Components[Components["Chocolate"] = 2] = "Chocolate";
    Components[Components["Caramel"] = 3] = "Caramel";
    Components[Components["Berries"] = 4] = "Berries";
    Components[Components["Marshmallows"] = 5] = "Marshmallows";
})(Components || (Components = {}));
;
console.log(Components);
for (var i = 0; i < order.length; i++) {
    for (var j = 0; j < 6; j++)
        if (order[i].toLowerCase() == Components[j].toLowerCase()) {
            orderEnum.push(j);
        }
}
;
if (orderEnum.indexOf(0) == -1 && orderEnum.indexOf(1) == -1 || (orderEnum.indexOf(2) == -1 && orderEnum.indexOf(3) == -1 && orderEnum.indexOf(4) == -1)) {
    alert("You have not chosen an ice cream size or at least one ice cream filling. Please enter a valid order.");
    location.reload();
}
console.log(orderEnum);
var count = 0;
orderEnum.forEach(function (components) {
    switch (components) {
        case Components.Big:
            count += 25;
            break;
        case Components.Small:
            count += 10;
            break;
        case Components.Chocolate:
            count += 5;
            break;
        case Components.Caramel:
            count += 6;
            break;
        case Components.Berries:
            count += 10;
            break;
        case Components.Marshmallows:
            count += 5;
            break;
    }
});
document.write("Your order: " + inputs + "<br>" + "Your account: " + count + "$");
