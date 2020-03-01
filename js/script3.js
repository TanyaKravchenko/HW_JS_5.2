/*console.log('HW5.2. Задание 3.

Напишите функции min и max, которые возвращают меньшее и большее из чисел a и b.');*/

function min(x, y) {
    let z = Math.min(x, y);
        document.write('Меньшее из чисел ' + x + ' и ' + y + ' это число ' + z + '</br>');
}
min(30, 105);

function max(x, y) {
    let f = Math.max(x, y);
        document.write('Большее из чисел ' + x + ' и ' + y + ' это число ' + f);
    }
max(30, 105);