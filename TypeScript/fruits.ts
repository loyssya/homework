export abstract class Fruit {
    public readonly sort: string = '';
    
    // constructor(public weight: number){

    // }
}

export class Apple extends Fruit {
    sort: string;
    private weightApple: number = 0;
    constructor(sort: string, weight: number) {
        super(weight);
        this.sort = sort;

        this.weight = weight;
    }
    set weight(value: number) {
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
    sort: string;
    private weightPear: number = 0;
    constructor(sort: string, weight: number) {
        super();
        this.sort = sort;
        this.weight = weight;
    }
    set weight(value: number) {
        if (value > 205) {
            value = 205;
        }
        this.weightPear = value;

    }
    get weight() {
        return this.weightPear;
    }
}