/*console.log('HW5.2. Задание 2.

Сделайте функцию, которая возвращает куб числа и его квадрат. Число передается
параметром.;*/

/*let kvadrat = function (number){
    return number*number;

    }
    document.write(kvadrat(5));*/

function kvadrakub(number)

{let kvadrat = number * number;
    kub= number * number * number;

document.write("Квадрат числа " + number + " равен " + kvadrat + '</br>');
document.write("Куб числа " + number + " равен " + kub);
}

kvadrakub(3);
