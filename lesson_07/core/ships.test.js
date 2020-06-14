describe('Ship', () => {
    let ship;
    const shipParams = {
        name: 'Mikhail Svetlov',
        model: 'Cruise',
        color: 'silver',
        position: {x: 0, y: 0}
    };
    const position = { x: 10, y: 10 };

    beforeEach(function () {
        ship = new Ship(shipParams);
    });

    describe('should have property', () => {
        it('name', () => {
            assert.property(ship, 'name');
        });
        it('model', () => {
            assert.property(ship, 'model');
        });
        it('color', () => {
            assert.property(ship, 'color');
        });
        it('position', () => {
            assert.property(ship, 'position');
        });
        it('distance', () => {
            assert.property(ship, 'distance');
        });
        it('_isAnchorDroped', () => {
            assert.property(ship, '_isAnchorDroped');
        });
        it('_isDamaged', () => {
            assert.property(ship, '_isDamaged');
        });
    });

    describe('functions move and moveTo', () => {
        it('should not move with anchor dropped', () => {
            ship.dropAnchor();
            expect(() => ship.move()).to.throw('You need to rise anchor');
        });
        it('should move to north', () => {
            ship.move('n');
            assert.deepEqual(ship.position, {x: 0, y: 1});
        });
        it('should move to south', () => {
            ship.move('s');
            assert.deepEqual(ship.position, {x: 0, y: -1});
        });
        it('should move to west', () => {
            ship.move('w');
            assert.deepEqual(ship.position, {x: -1, y: 0});
        });
        it('should move to east', () => {
            ship.move('e');
            assert.deepEqual(ship.position, {x: 1, y: 0});
        });

        it('should not moveTo with anchor dropped', () => {
            ship.dropAnchor();
            expect(() => ship.moveTo()).to.throw('You need to rise anchor');
        });
        it('should moveTo change position', () => {
            ship.moveTo(position);
            assert.deepEqual(ship.position, position);
        });
        it('should moveTo change distance', () => {
            ship.moveTo(position);
            expect(ship.distance).not.to.equal(0);
        });
    });

    describe('other functions', () => {
        it('should drop anchor', () => {
            ship.dropAnchor();
            expect(ship.isAnchorDroped()).to.equal(true);
        });
        it('should rise anchor', () => {
            ship.dropAnchor();
            ship.riseAnchor();
            expect(ship.isAnchorDroped()).to.equal(false);
        });
        it('should set isDamaged', () => {
            ship.setIsDamaged(true);
            expect(ship.isDamaged()).to.equal(true);
        });
    });
});
