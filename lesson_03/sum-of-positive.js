/**
 * Функция возвращает сумму и количество положительных элементов массива.
 *
 * @param {array} arr: number[] массив чисел
 * @returns { {count: number, sum: number} } объект с параметрами вычислений
 */

function sumOfPositive(arr) {
    const filtered = arr.filter(element => (typeof(element) === 'number') && (element > 0));
    const sum = filtered.reduce((acc, item) => acc + item, 0);

    return {
        count: filtered.length,
        sum
    };
}
