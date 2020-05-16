const text = prompt('Введите текст:', 'Some text.  Some   text.   Some    text   .');

let numberOfSpace = 0;
let correctText = [];
text.split('').forEach(value => {
    if (value === ' ') {
        numberOfSpace++;
    } else {
        numberOfSpace = 0;
    }

    if (numberOfSpace < 2) {
        correctText.push(value);
    }
});

alert(correctText.join(''));
