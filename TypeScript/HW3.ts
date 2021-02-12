class Check<T, U, A>{
    private tKey: T;
    private uValue: U;
    private aDescription: A;

    public set key(value: T) {
        if (value == null || value == undefined) {
            throw new Error("Значение не можут быть пустым");
        }
        this.tKey = value;
    }
    public get key(): T {
        return this.tKey;
    }

    public set value(value: U) {
        if (value == null || value == undefined) {
            throw new Error("Значение не можут быть пустым");
        }
        this.uValue = value;
    }
    public get value(): U {
        return this.uValue;
    }
    public set description(value: A) {
        if (value == null || value == undefined) {
            throw new Error("Значение не можут быть пустым");
        }
        this.aDescription = value;
    }
    public get description(): A {
        return this.aDescription;
    }

}

class Dictionary<T, U, A>{
    private data: Check<T, U, A>[] = [];

    public add(key: T, value: U, description: A) {
        let inputAdd = new Check<T, U, A>();
        inputAdd.key = key;
        inputAdd.value = value;
        inputAdd.description = description;
        this.data.push(inputAdd);
    }
    public getValue(value: U): { key: T, description: A } | null {
        for(let i = 0; i < this.data.length; i ++) {
            if(this.data[i].value == value) {
                return {
                    key: this.data[i].key,
                    description: this.data[i].description
                };
            }
        }
        return null;
    }
}

let dictionary = new Dictionary<number,string, string> ();
dictionary.add(1,"прокрастинация","Ты знаешь, что тебе нужно заняться делом, но очень важный сериал не отпускает тебя. Еще нужно летну полистать. И вообще, много всего.");
dictionary.add(2,"лень","У тебя есть список дел, но сегодня ты творческая натура и хочешь отдыхать.");
dictionary.add(3,"пятница","Когда все зовут в бар, а у тебя завтра урок на 9:00.");
dictionary.add(4,"дженерики","Очень важно и полезно, но, пожалуйста, давайте на практике без них.");
dictionary.add(5,"HTML программирование","Крикни это в IT сообществе, если стало скучно жить.");

console.log(dictionary.getValue("HTML программирование"));