// let login = prompt('loginni yozing:');
// let parol;
//
// if(login !== 'admin'){
//     alert('bunday login mavjud emas')
// } else{
//     parol = prompt('parolni yozing');
//
//     if(parol !== '12345'){
//         alert('parol notogri terildi')
//     } else{
//         alert('xush kelibsiz')
//     }
// }

// let age = +prompt('Yoshingizni kiriting');
//
// if(age < 10){
//     alert('Salom kichkintoy')
// }
// else if(age < 18){
//     alert('Salom mehmon')
// }
// else if(age < 110){
//     alert('Salom doda')
// }
// else if(age > 110){
//     alert('O\'zizda bo\'vurin')
// }

// let age = +prompt('Yoshingizni kiriting');
//
// if(age >= 18 && age <= 59){
//     alert('Siz hali ishlashingiz kerak')
// }
// else if(age > 59){
//     alert('Pensiyaga chiqish vaqti bo\'ldi')
// }
// else{
//     alert('Ishlashga vohli, borib o\'qi')
// }

// let a = +prompt('1-son');
// let b = +prompt('2-son');
// let c = +prompt('3-son');
//
// let res;
//
// if(a > b && a < c){
//     res = '1-son ortancha'
// } else if(b > a && b < c){
//     res = '2-son ortancha'
// } else{
//     res = '3-son ortancha'
// }
//
// alert(res);

// let number = +prompt('nechinchi oy');
//
// if(number === 1 || number === 2 || number === 12){
//     alert('Qish fasli')
// } else if(number === 3 || number === 4 || number === 5){
//     alert('Bahor fasli')
// } else if(number === 6 || number === 7 || number === 8){
//     alert('Yoz fasli')
// } else if(number === 9 || number === 10 || number === 11){
//     alert('Kuz fasli')
// } else{
//     alert('Yilda 12 oy mavjud')
// }

// let number = +prompt('son kiriting');
// let line = '';
// let i = 0;
//
// while (i < number){
//     line = line + '*';
//     document.write(line + '<br>');
//     i++;
// }

// star = '';
// for(i = 0; i <= 10; i++){
//     star = star + '*';
//     document.write(star + '<br>')
// }


// let number = +prompt('son kiriting');
//
// for(i = 0; i <= number; i++){
//     if(i == 0){
//         document.write(i + ' nol son <br>')
//     }
//     else if(i % 2 == 0){
//         document.write(i + ' juft son <br>')
//     } else (
//         document.write(i + ' toq son <br>')
//     )
// }

// let number = +prompt('son kiriting');
// let res = 0;
//
// for(i = 1; i < number; i++){
//     document.write(i + ' + ');
//     res = res + i;
// }
// res = res + number;
// document.write(number + ' = ' + res)


// let number = +prompt('son kiriting');
// let res = 0;
//
// for(i = 1; i <= number; i++){
//     res = res + i;
//     if(i == number){
//         document.write(number + ' = ' + res)
//         break;
//     }
//     document.write(i + ' + ');
// }





// var num = +prompt('son');

// var sum = 0;
// for (var i = 0; i <= num; i++) {
// 	sum += i;
// }
// alert(sum);





// function sum(a, b) {
//   return a + b;
// }

// alert(`1 + 2 = ${sum(1, 2)}.`);



// let guestList = `Guests:
//   * John
//   * Pete
//   * Mary`;

// alert(guestList);



// let str = 'Hi';

// str[0] = 'h'; // ошибка
// alert( str[0] );



// alert( 'Interface'.toLowerCase() );



// let str = 'Ослик Иа-Иа посмотрел на виадук';

// let target = 'Иа'; // цель поиска

// let pos = 0;
// while (true) {
//   let foundPos = str.indexOf(target, pos);
//   if (foundPos == -1) break;

//   alert( `Найдено тут: ${foundPos}` );
//   pos = foundPos + 1; // продолжаем со следующей позиции
// }





// let num = prompt('son kiriting');
// let lastNum = num[num.length - 1];

// if(lastNum == 5){
// 	document.write('gap yo')
// }




// Hafta kunlari
// let arr = ['Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', '<b>Shanba</b>', '<b>Yakshanba</b>'];
//
// for(i = 0; i < arr.length; i++){
// 	document.write(arr[i] + '<br>');
// }




// let sonlar = [1, 2, 3, 4, 5];
// let umumiy = 0;
//
// for(i = 0; i < sonlar.length; i++){
// 	umumiy += sonlar[i];
// }
//
// alert(umumiy);



// let massiv = ['x', 'xx', 'xxx', 'xxxx', 'xxxxx', 'xxxxxx'];
// let res = '';
//
// for(i = 0; i < massiv.length; i++){
// 	res += '"' + massiv[i] + '" ';
// }
//
// console.log(res);



let arr = [];
let str = 'x';

for(i = 0; i < 10; i++){
    arr.push(str);
    str = str + str[i];
}

console.log(arr);


// let num = [];
//
// for(i = 7; i < 10; i++){
//     num.push(i)
// }
//
// console.log(num);