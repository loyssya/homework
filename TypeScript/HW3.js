var Check = /** @class */ (function () {
    function Check() {
    }
    Object.defineProperty(Check.prototype, "key", {
        get: function () {
            return this.tKey;
        },
        set: function (value) {
            if (value == null || value == undefined) {
                throw new Error("Значение не можут быть пустым");
            }
            this.tKey = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Check.prototype, "value", {
        get: function () {
            return this.uValue;
        },
        set: function (value) {
            if (value == null || value == undefined) {
                throw new Error("Значение не можут быть пустым");
            }
            this.uValue = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Check.prototype, "description", {
        get: function () {
            return this.aDescription;
        },
        set: function (value) {
            if (value == null || value == undefined) {
                throw new Error("Значение не можут быть пустым");
            }
            this.aDescription = value;
        },
        enumerable: false,
        configurable: true
    });
    return Check;
}());
var Dictionary = /** @class */ (function () {
    function Dictionary() {
        this.data = [];
    }
    Dictionary.prototype.add = function (key, value, description) {
        var inputAdd = new Check();
        inputAdd.key = key;
        inputAdd.value = value;
        inputAdd.description = description;
        this.data.push(inputAdd);
    };
    Dictionary.prototype.getValue = function (value) {
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i].value == value) {
                return {
                    key: this.data[i].key,
                    description: this.data[i].description
                };
            }
        }
        return null;
    };
    return Dictionary;
}());
var dictionary = new Dictionary();
dictionary.add(1, "прокрастинация", "Ты знаешь, что тебе нужно заняться делом, но очень важный сериал не отпускает тебя. Еще нужно летну полистать. И вообще, много всего.");
dictionary.add(2, "лень", "У тебя есть список дел, но сегодня ты творческая натура и хочешь отдыхать.");
dictionary.add(3, "пятница", "Когда все зовут в бар, а у тебя завтра урок на 9:00.");
dictionary.add(4, "дженерики", "Очень важно и полезно, но, пожалуйста, давайте на практике без них.");
dictionary.add(5, "HTML программирование", "Крикни это в IT сообществе, если стало скучно жить.");
console.log(dictionary.getValue("HTML программирование"));
