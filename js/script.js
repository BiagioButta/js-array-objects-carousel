"use strict"

const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

let thumbContainer = document.getElementById('thumbContainer');
let immaginiHtml = document.getElementsByClassName('immagini');
const containerImmaginiHtml = document.getElementById('containerImmagini');
const thumbnailHtml = document.getElementsByClassName('thumbnail');
let prevButtonHtml = document.getElementById('prevButton');
let nextButtonHtml = document.getElementById('nextButton');
let colHtml = document.querySelector('.col')

let currentIndex = 0;
for (let i = 0; i < images.length; i++) {
    let classActive = "";
    if (i === currentIndex) {
        classActive = "active"
    }
    containerImmaginiHtml.innerHTML += `<div class="immagini ${classActive} ">
                                            <img  src="${images[i].url}">
                                            <div class="title">
                                                <h2>${images[i].title}</h2>
                                                <p><strong>${images[i].description}</strong></p>
                                            </div>
                                        </div>`


    thumbContainer.innerHTML += `<div class= "thumbnail ${classActive}">
                                    <img src = "${images[i].url}">
                                </div>`
}

prevButtonHtml.addEventListener('click',  prev);
function prev(){

    // al click rimuovo la classe active
    thumbnailHtml[currentIndex].classList.remove("active");
    immaginiHtml[currentIndex].classList.remove("active");

    // se arrivo al primo devo ripartire dall' ultimo
    // e in ogni caso dare active
    if (currentIndex === 0) {
        currentIndex = images.length - 1;
        thumbnailHtml[currentIndex].classList.add("active");
        immaginiHtml[currentIndex].classList.add("active");
    } else{
        currentIndex--;
        thumbnailHtml[currentIndex].classList.add("active");
        immaginiHtml[currentIndex].classList.add("active");
    }
}

nextButtonHtml.addEventListener("click", next);
function next() {

    // al click devo rimuovere la classe active
    thumbnailHtml[currentIndex].classList.remove("active");
    immaginiHtml[currentIndex].classList.remove("active");

    // se arrivo alla fine devo ripartire dalla prima immagine
    // e in ogni caso dare la classe active
    if (currentIndex === images.length - 1) {
        currentIndex = 0;
        immaginiHtml[currentIndex].classList.add("active");
        thumbnailHtml[currentIndex].classList.add("active");
    } else {
        currentIndex++;
        immaginiHtml[currentIndex].classList.add("active");
        thumbnailHtml[currentIndex].classList.add("active");
    }
};

const play = setInterval(next, 2000)