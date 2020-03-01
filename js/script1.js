/*console.log('HW5.2. Задание 1.

Сделайте функцию, которая отнимает от первого числа второе и делит на третье. Числа
передаются параметром.;*/

function number (number1, number2, number3) {

    let result = (number1 - number2)/number3;

    document.write('(' + number1 + '-' + number2 + ') / ' + number3 + ' = ' + result);
}
number(15, 5, 2);

