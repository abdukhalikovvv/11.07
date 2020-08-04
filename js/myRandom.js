let ranglar_soni = +prompt('Nechta rang kiritasiz');

let ranglar = [];

let box = document.querySelectorAll('.item');

for(i = 1; i <= ranglar_soni; i++){
    let rang = prompt(i + ' - rangni kiriting');
    ranglar.push(rang);
    console.log(ranglar);
}

alert('siz istagan ranglar ' + ranglar);

for (i = 0; i < box.length; i++){
    box[i].addEventListener('click', function () {
        this.style.background = ranglar[Math.floor(Math.random() * ranglar.length)];
    })
}


