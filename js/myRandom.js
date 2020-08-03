let ranglar_soni = +prompt('Nechta rang kiritasiz');

let ranglar = new Array();

let box = document.querySelectorAll('.item');

for(i = 1; i <= ranglar_soni; i++){
    let rang = prompt(i + ' - rangni kiriting');
    ranglar.push(rang);
    console.log(ranglar);
}

alert('siz istagan ranglar ' + ranglar);

for (q = 0; q < box.length; q++){
    let random = Math.floor(Math.random() * ranglar.length);

    box[q].addEventListener('click', function () {
        console.log(random);
        this.style.background = ranglar[random];
    })
}


