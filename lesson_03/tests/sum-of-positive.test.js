const array = [-91, -93, -45, 67, 96, 40, -34, 96, -42, 58];
const positiveNumbers = [91, 93, 45, 67, 96];
const negativeNumbers = [-91, -93, -45, -67, -96];

describe('sumOfPositive', () => {
    it('array with some numbers', () => {
        assert.deepEqual(sumOfPositive(array), {count: 5, sum: 357});
    });
    it('array with only positive numbers', () => {
        assert.deepEqual(sumOfPositive(positiveNumbers), {count: 5, sum: 392});
    });
    it('array with only negative numbers', () => {
        assert.deepEqual(sumOfPositive(negativeNumbers), {count: 0, sum: 0});
    });
    it('array with some numbers with zero', () => {
        let arrayWithZero = array.slice();
        arrayWithZero.push(0);
        assert.deepEqual(sumOfPositive(arrayWithZero), {count: 5, sum: 357});
    });
    it('array with some numbers with not number item', () => {
        let arrayWithString = array.slice();
        arrayWithString.push('string');
        assert.deepEqual(sumOfPositive(arrayWithString), {count: 5, sum: 357});
    });
    it('empty array', () => {
        assert.deepEqual(sumOfPositive([]), {count: 0, sum: 0});
    });
});
