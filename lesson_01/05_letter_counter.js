const text = prompt('Введите текст (алфавит латинский):', 'Some text');
const letters = text.split('');
const vowels = 'aeiouy'.split('');
const consonants = 'bcdfghjklmnpqrstvwxz'.split('');

const vowelsCount = letters.filter(c => vowels.includes(c.toLowerCase())).length;
const consonantsCount = letters.filter(c => consonants.includes(c.toLowerCase())).length;

alert(`Количество гласных букв: ${vowelsCount}\nКоличество согласных букв: ${consonantsCount}`);
