describe('Pier', () => {
    let ship;
    let pier;
    const shipParams = {
        name: 'Mikhail Svetlov',
        model: 'Cruise',
        color: 'silver',
        position: {x: 0, y: 0}
    };
    const position = { x: 10, y: 10 };

    beforeEach(function () {
        pier = new Pier({x: 20, y: 15});
        ship = new Ship(shipParams);
    });

    describe('should have property', () => {
        it('position', () => {
            assert.property(pier, 'position');
        });
        it('model', () => {
            assert.property(pier, 'ships');
        });
    });

    describe('function moor', () => {
        it('should throw error if the ship is already moored', () => {
            ship.moveTo(pier.position);
            pier.moor(ship);
            expect(() => pier.moor(ship)).to.throw('Ship is already moored');
        });
        it('should throw error if the ship has not arrived yet', () => {
            ship.moveTo(position);
            expect(() => pier.moor(ship)).to.throw('The ship has not arrived yet');
        });
        it('should ship anchored', () => {
            ship.moveTo(pier.position);
            pier.moor(ship);
            expect(ship.isAnchorDroped()).to.equal(true);
        });
        it('should ship moored', () => {
            ship.moveTo(pier.position);
            pier.moor(ship);
            expect(pier.ships.includes(ship)).to.equal(true);
        });
    });

    describe('function unmoor', () => {
        it('should throw error if the ship is not moored', () => {
            expect(() => pier.unmoor(ship)).to.throw('The ship is not moored');
        });
        it('should ship raise anchor', () => {
            ship.moveTo(pier.position);
            pier.moor(ship);
            pier.unmoor(ship);
            expect(ship.isAnchorDroped()).to.equal(false);
        });
        it('should ship unmoored', () => {
            ship.moveTo(pier.position);
            pier.moor(ship);
            pier.unmoor(ship);
            expect(pier.ships.includes(ship)).to.equal(false);
        });
    });
});
