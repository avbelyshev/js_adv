describe('charCodesSum', () => {
    it('sum of word character codes', () => {
        assert.equal(charCodesSum('Lorem'), 511);
    });
    it('sum of another word character codes', () => {
        assert.equal(charCodesSum('ipsum'), 558);
    });
});

describe('wordStat', () => {
    it('text analysis', () => {
        assert.deepEqual(wordStat('Lorem ipsum dolor sit amet.'), [
            { word: 'Lorem', sum: 511 },
            { word: 'ipsum', sum: 558 },
            { word: 'dolor', sum: 544 },
            { word: 'sit', sum: 336 },
            { word: 'amet.', sum: 469 }
        ]);
    });
    it('analysis of another text', () => {
        assert.deepEqual(wordStat('Some text'), [
            { word: 'Some', sum: 404 },
            { word: 'text', sum: 453 }
        ]);
    });
});
