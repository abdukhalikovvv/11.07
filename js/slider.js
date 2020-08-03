let slider_images = document.querySelectorAll('.slider-image img');
let slider_next_btn = document.querySelector('.slider-next-btn');
let slider_prev_btn = document.querySelector('.slider-prev-btn');
let slider = document.querySelector('.slider');


let i = 0;
slider_next_btn.onclick = function () {
    slider_images[i].classList.remove('active');
    i++;
    if(i >= slider_images.length){
        i = 0;
    }
    slider_images[i].classList.add('active')
};

slider_prev_btn.onclick = function () {
    slider_images[i].classList.remove('active');
    i--;
    if(i < 0){
        i = slider_images.length - 1;
    }
    slider_images[i].classList.add('active')
};

function slider_next() {
    slider_images[i].classList.remove('active');
    i++;
    if (i >= slider_images.length) {
        i = 0;
    }
    slider_images[i].classList.add('active');
}

// let int = setInterval(slider_next, 300);

// slider.onmouseover = function () {
//
// };

if(slider.onmouseover()){
    clearInterval(int)
}
