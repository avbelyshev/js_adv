let sum = 0;
let count = 0;

while (true) {
    const number = prompt('Введите число');
    if (number === '') {
        break;
    }

    count++;
    sum += parseInt(number);
    console.log(`Предварительный итог: ${sum}`);
}

if (count > 0) {
    const average = sum / count;
    alert(`Сумма: ${sum}\nКоличество чисел: ${count}\nСреднее арифметическое: ${average}`);
}
