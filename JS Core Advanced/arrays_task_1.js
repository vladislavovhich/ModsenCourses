function increaseArrElemens(arr) {
    return arr.map(item => fixFloatNumber(item * 1.1))
}

/* Сделал эту функцию, так как при перемножении чисел из-за особого представления
 чисел с плавающей точкой в js возникала такая ситуация: 10 * 1.1 = 11.00000000000001
*/
function fixFloatNumber(number) {
    return Math.round(number * 100) / 100;
}

let arr = [1, 2, 3, 4, 5]

console.log(increaseArrElemens(arr)) // 1.1 2.2 3.3 4.4 5.5