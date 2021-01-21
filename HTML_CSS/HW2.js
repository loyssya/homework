const hotels = [
    {
        imgUrl: "../imgHtml/BANKHOTEL.jpg",
        name: "BANKHOTEL",
        stars: 5,
        article: "Отель BANKHOTEL с рестораном, фитнес-центром, баром и садом расположен во Львове. К услугам гостей терраса и семейные номера. В числе прочих удобств — круглосуточная стойка регистрации и бесплатный Wi-Fi на всей территории. Осуществляется доставка еды и напитков в номер. Для гостей организуют трансфер от/до аэропорта.",
        avgCost: "3 960",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10292.325498080858!2d24.021008!3d49.8409285!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3ae752dea3746844!2sBANKHOTEL!5e0!3m2!1sru!2sua!4v1611270406456!5m2!1sru!2sua"
    },
    {
        imgUrl: "../imgHtml/GrandHotelLvivLuxury&Spa.jpg",
        name: "Grand Hotel",
        stars: 4,
        article: "Гостиница «Гранд Отель» расположена в историческом центре Львова. В ее оформлении гармонично сочетаются современные удобства и изысканная классическая атмосфера. На всей территории работает бесплатный Wi-Fi.",
        avgCost: "2 850",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10292.361985245932!2d24.027354!3d49.8407571!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd2f1e8a6da288949!2sGrand%20Hotel%20Lviv!5e0!3m2!1sru!2sua!4v1611270568383!5m2!1sru!2sua"
    },
    {
        imgUrl: "../imgHtml/MarionSpa.jpg",
        name: "Marion Spa",
        stars: 4,
        article: "Отель MARION SPA расположен на курорте Буковель. При отеле работает ресторан. Стойка регистрации открыта круглосуточно. Осуществляется доставка еды и напитков в номер. На всей территории отеля предоставляется бесплатный Wi-Fi. При отеле открыт оздоровительный и спа-центр с крытым бассейном, хаммам и гидромассажной ванной.",
        avgCost: "3 528",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10605.055057396892!2d24.4194769!3d48.3554551!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb1133029deb6f518!2z0JPQvtGC0LXQu9GMIE1BUklPTiBTUEEg0JHRg9C60L7QstC10LvRjA!5e0!3m2!1sru!2sua!4v1611270651749!5m2!1sru!2sua"
    },
    {
        imgUrl: "../imgHtml/NEMOHotelResort&SPA.jpg",
        name: "NEMO Hotel",
        stars: 5,
        article: "Курортный спа-отель NEMO расположен в историческом центре Одессы, рядом с пляжем Ланжерон. К услугам гостей плавательные бассейны с морской водой, оздоровительный и спа-центр, а также частный пляж. В числе прочих удобств этого 5-звездочного отеля — комплекс саун с крытым бассейном, кинотеатр и летние террасы с видом на море и парк. ",
        avgCost: "3 700",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10990.19432198449!2d30.7647764!3d46.4774489!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfb1a9248c0bb15e!2sNEMO%20Hotel%20Resort%20%26%20SPA!5e0!3m2!1sru!2sua!4v1611270687520!5m2!1sru!2sua"
    },
    {
        imgUrl: "../imgHtml/RadissonBluHotel.jpg",
        name: "Radisson Blu Hotel",
        stars: 4,
        article: "Этот отель расположен в историческом центре Киева, в 2 минутах ходьбы от станции метро Площадь Контрактова. К услугам гостей круглосуточная стойка регистрации, бесплатный Wi-Fi и фитнес-центр.",
        avgCost: "2 562",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10161.764839300018!2d30.5097157!3d50.4515082!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc053edcbb31aaa7!2z0KDQtdC00ZbRgdC-0L0g0JHQu9GO!5e0!3m2!1sru!2sua!4v1611270811744!5m2!1sru!2sua"
    },
    {
        imgUrl: "../imgHtml/SkyLoftHotelKyivbyRixwell.jpg",
        name: "Sky Loft Hotel",
        stars: 4,
        article: "Отель Sky Loft Kyiv by Rixwell расположен в самом центре Киева. Рядом гости могут посетить такие популярные достопримечательности, как Национальный спортивный комплекс «Олимпийский» (600 метров), улица Крещатик (1 км) и Владимирский собор (16 минут ходьбы).",
        avgCost: "2 562",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10164.514217112777!2d30.5244651!3d50.4387061!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x362908fce7ac959b!2sSky%20Loft%20Hotel%20Kyiv%20by%20Rixwell!5e0!3m2!1sru!2sua!4v1611270844428!5m2!1sru!2sua"
    }
];
function generateHotels() {
    const container = document.getElementById("hotels");
    hotels.forEach(hotel => {
        let template = document.querySelector('#templateHotel');
        let clone = template.content.cloneNode(true);
        clone.querySelector("img").src = hotel.imgUrl;
        clone.querySelector(".name").innerHTML = hotel.name;
        clone.querySelector("#numbers").innerHTML = hotel.stars;
        clone.querySelector("article").innerHTML = hotel.article;
        clone.querySelector(".cost>p").innerHTML = hotel.avgCost;
        clone.querySelector("button").addEventListener("click", function () {
            document.querySelector("#mapUrl>iframe").src = hotel.mapUrl;
            document.getElementById("mapUrl").classList.toggle("hide");
        }, false);
        container.appendChild(clone);
    });

}

window.onload = function () {
    document.getElementById("mapUrl").addEventListener("click", function (e) {
        e.target.classList.toggle('hide');
    }, false)
}

