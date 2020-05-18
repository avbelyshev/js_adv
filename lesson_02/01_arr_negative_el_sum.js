function negativeElementsSum(array) {
    if (!Array.isArray(array)) return new Error('Входящий параметр не является массивом!');

    let result = { count: 0, sum: 0 };
    array.forEach(element => {
        if ((typeof(element) === 'number') && (element < 0)) {
            result.count++;
            result.sum += element;
        }
    });
    return result;
}

const arr = [91, 93, 45, -67, -96, -40, 34, -96, 42, -58];
const res = negativeElementsSum(arr);

console.log(res);
alert(`Отрицательные элементы массива. Количество: ${res.count}, Сумма: ${res.sum}`);
