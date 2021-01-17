const btnNex = document.querySelector(".next");
const images = document.querySelector(".slider img");

let active = 0;

bthNext.addEventListener("click", function () {

    images[active].style.display = "none";
    active++;
    if (active >= images.length) {
        active = 0;
    }

    images[active].style.display = "block";
}, false)

class GalleryDB {
    activeSlide = 0;
    galleryImages = document.querySelectorAll(".slider img")
    btnNext = document.querySelector(".next");
    constructor(images, btnN) {
        this.galleryImages = document.querySelectorAll(images);
        this.btnNext = document.querySelector(btnN);
        this.btnNext.addEventListener('click', () => {
            this.galleryImages[this.activeSlide].style.display = "none";
            this.activeSlide++;
            if (this.activeSlide >= this.galleryImages.length) {
                this.activeSlide = 0;
            }
            this.galleryImages[this.activeSlide].style.display = "block";
        }, false)
    }
}

let slider1 = new GalleryDB(".slider img", ".next");
console.log(slider1);

// //2 версия 
// class GallerySrc {
//     activeSlide = 0;
//     gallery = [
//         "1.jpg",
//         "2.jpg",
//         "3.jpg",
//         "4.jpg",
//         "5.jpg"
//     ];
//     constructor(image, btnN) {
//         this.galleryImage = document.querySelectorAll(image);
//         this.btnNext = document.querySelector(btnN);
//         this.btnNext.addEventListener('click', () => {
//             this.nextSlide
//         }, false)
//     }
//     nextSlide() {
        
//         if (this.activeSlide >= this.gallery.length) {
//             this.activeSlide = 0;
//         }
//         this.galleryImage.src = `img/${this.gallery[this.activeSlide]}`;
//     }
//     autoNext() {
//         srtInterval(() => {
//             this.activeSlide++;
//         }, 5000)
//     }
// }

// let slider1 = new GallerySrc(".slider img", ".next");
// console.log(slider);
