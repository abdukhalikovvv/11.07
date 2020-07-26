// let book = {
//     title : 'Shaytanat',
//     author: 'Tohir Malik',
//     id    : 1,
//     price : '100$',
// };
// console.log(book);
//
// for (let informs in book){
//     document.write(informs + '<br>');
// }


let nums = [1, 5, 8, -3, -6, -9];

console.log(nums);

// function getMinusNums(array) {
//     return array.filter(function (value) {
//         return value < 0;
//     })
// }
//
// console.log(getMinusNums(nums));

function getNegativeNums(array) {
    let negatives = [];

    for (i = 0; i < array.length; i++){
        if(array[i] < 0){
            negatives.push(array[i]);
        }
    }
    return negatives;
}

console.log(getNegativeNums(nums));
