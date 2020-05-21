function charCodesSum(word) {
    let sum = 0;
    word.split('').forEach(letter => {
        sum += letter.charCodeAt(0);
    });
    return sum;
}

function textAnalysis(text) {
    if (typeof(text) !== 'string') return new Error('Входящий параметр не является строкой!');

    return text.split(' ').map(word => {
        return { word: word, sum: charCodesSum(word) };
    });
}

const text = 'Lorem ipsum dolor sit amet.';
console.log(textAnalysis(text));
