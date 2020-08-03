// let urinish = +prompt('nechta urinish xohlaysiz?');
let ranglar = ['qizil', 'yashil', 'oq', 'sariq', 'qora', 'pushti'];
let random = Math.floor(Math.random() * ranglar.length);
let randomRang = ranglar[random];

console.log(randomRang);

// for (i = 1; i <= urinish; i++){
//     let javob = prompt('Qaysi rangligini toping. Urinishlar soni: ' + i);
//     javob = javob.toLowerCase();
//
//     if(javob == null){
//         break
//     }
//     else if(javob != randomRang){
//         continue
//     }
//     else {
//         document.write('Siz' + [i] + '-urinishda yutdingiz endi damingizni oling');
//         break
//     }
// }
document.write('<p>The end');