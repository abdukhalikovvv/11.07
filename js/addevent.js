let box = document.querySelectorAll('.item');

for(i = 0; i < box.length; i++){
    box[i].addEventListener('click', function () {
        this.style.background = 'rgb(' + Math.random() * 256 + ',' + Math.random() * 256 + ',' + Math.random() * 256 + ')';
    })
}