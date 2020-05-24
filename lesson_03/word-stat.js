/**
 * Функция для вычисления суммы кодов всех символов слова
 *
 * @param {string} word Слово
 * @returns {number} Сумма кодов всех символов слова
 */

function charCodesSum(word) {
    return word.split('').reduce((acc, item) => acc + item.charCodeAt(0), 0);
}

/**
 * Функция для анализа текста. Возврашает массив объектов со структурой
 * word: само слово
 * code: сумма кодов всех символов слова.
 *
 * @param {string} text Анализируемый текст
 * @returns { {word: string, sum: number}[] }
 */

function wordStat(text) {
    const words = text.split(' ').filter(word => word.length);
    return words.map(word => {
        return { word: word, sum: charCodesSum(word) };
    });
}
