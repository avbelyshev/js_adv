let array = [-91, -93, -45, 67, 96, 40, -34, 96, -42, 58];
let positiveNumbers = [91, 93, 45, 67, 96];
let negativeNumbers = [-91, -93, -45, -67, -96];

describe('sumOfPositive', () => {
    it('array with some numbers', () => {
        assert.deepEqual(sumOfPositive(array), {count: 5, sum: 357});
    });
    it('array with only positive numbers', () => {
        assert.deepEqual(sumOfPositive(positiveNumbers), {count: 5, sum: 392});
    });
    it('array with only positive numbers', () => {
        assert.deepEqual(sumOfPositive(negativeNumbers), {count: 0, sum: 0});
    });
    it('array with some numbers with zero', () => {
        array.push(0);
        assert.deepEqual(sumOfPositive(array), {count: 5, sum: 357});
    });
    it('array with some numbers with not number item', () => {
        array.push('string');
        assert.deepEqual(sumOfPositive(array), {count: 5, sum: 357});
    });
    it('empty array', () => {
        assert.deepEqual(sumOfPositive([]), {count: 0, sum: 0});
    });
});
