export class Fruit {
    constructor() {
        this.sort = '';
    }
}
export class Apple extends Fruit {
    constructor(sort, weight) {
        super(weight);
        this.weightApple = 0;
        this.sort = sort;
        this.weight = weight;
    }
    set weight(value) {
        if (value > 155) {
            value = 155;
        }
        this.weightApple = value;
    }
    get weight() {
        return this.weightApple;
    }
}
export class Pear extends Fruit {
    constructor(sort, weight) {
        super();
        this.weightPear = 0;
        this.sort = sort;
        this.weight = weight;
    }
    set weight(value) {
        if (value > 205) {
            value = 205;
        }
        this.weightPear = value;
    }
    get weight() {
        return this.weightPear;
    }
}
