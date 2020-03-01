/*console.log('HW5.2. Задание 9.

Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его
цифры. И так, пока сумма не станет однозначным числом (9 и менее). Исп. рекурсию.)*/

function sumNumber (num) {
    num = String(num);

    let sum = 0;

    for(let i = 0; i < num.length; i++) {
        sum += +num[i];
    }
    console.log(sum); 
    if (sum > 9) {
        sumNumber(sum);
    }
}

sumNumber(4653);
