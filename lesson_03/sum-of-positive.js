/**
 * Функция возвращает сумму и количество положительных элементов массива.
 *
 * @param {array} arr: number[] массив чисел
 * @returns { {count: number, sum: number} } объект с параметрами вычислений
 */

function sumOfPositive(arr) {
    const filtered = arr.filter(element => (typeof(element) === 'number') && (element > 0));
    const count = filtered.length;

    if (!count) return { count: 0, sum: 0 };
    const sum = filtered.reduce((acc, item) => acc + item);

    return { sum, count };
}
