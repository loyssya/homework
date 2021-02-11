import { Apple, Pear } from "./fruits";
class contentGenerator {
    constructor(selector, data) {
        this.data = data;
        this.container = document.querySelector(selector);
    }
    showData() {
        var _a;
        const list = document.createElement("ul");
        ['apple', 'cherry', 'lemon', 'pear'].forEach(function (product) {
            list.innerHTML += `<li><b>${product.sort}</b>: вес ${product.weight} грамм</li>`;
        });
        (_a = this.container) === null || _a === void 0 ? void 0 : _a.append(list);
    }
}
const products = new contentGenerator('.fruits', [
    new Apple('gold', 160),
    new Apple('red', 150),
    new Apple('gold', 142),
    new Apple('gold', 126),
    new Pear('lemon', 3333333),
    new Pear('dushes', 3333333),
]);
products.showData();
