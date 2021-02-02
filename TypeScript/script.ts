let inputs = prompt("What kind of ice cream do you want?"+ 
"\nPlease write the size of ice cream: "+
"\n*Small($ 10);"+
"\n*Big($ 25)."+
"\nAlso, write at least 1 ice cream filling:"+
"\n*Chocolate (+ $ 5);"+
"\n*Caramel (+ $ 6);"+
"\n*Berries (+ $ 10)."+
"\nAdditionally, you can choose:"+
"\n*Marshmallows (+ $ 5).") || "";
let order = inputs?.match(/(big|caramel|small|chocolate|caramel|berries|marshmallows)/gmi) || [];
let orderEnum = [];
console.log(order);


enum Components {
    Big,
    Small,
    Chocolate,
    Caramel,
    Berries,
    Marshmallows
};
console.log(Components);
for (let i = 0; i < order.length; i++) {
    for (let j = 0; j < 6; j++)
        if (order[i].toLowerCase() == Components[j].toLowerCase()) {
            orderEnum.push(j);

        }
};

if (orderEnum.indexOf(0) == -1 && orderEnum.indexOf(1) == -1 ||( orderEnum.indexOf(2) == -1 && orderEnum.indexOf(3) == -1&& orderEnum.indexOf(4) == -1) ) {
    alert("You have not chosen an ice cream size or at least one ice cream filling. Please enter a valid order.");
    location.reload();

}

console.log(orderEnum);
let count = 0;
orderEnum.forEach(function (components: number) {

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
