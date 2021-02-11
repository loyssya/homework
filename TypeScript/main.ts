import{generetorContent} from "./interfaces"
import{Apple, Pear, Fruit} from "./fruits"

class contentGenerator implements generetorContent {
    container: HTMLDivElement | null;
    constructor(selector: string, private data: Fruit[]) {
        this.container = document.querySelector(selector);
    }
    showData(){
        const list: HTMLUListElement = document.createElement("ul");
        ['apple', 'cherry', 'lemon', 'pear'].forEach(function (product) {
            list.innerHTML += `<li><b>${product.sort}</b>: вес ${product.weight} грамм</li>`;
        });
        this.container?.append(list);
    }
}

const products = new contentGenerator('.fruits',[
    new Apple('gold',160),
    new Apple('red',150),
    new Apple('gold',142),
    new Apple('gold',126),
    new Pear('lemon',3333333),
    new Pear('dushes',3333333),
]);
products.showData();
