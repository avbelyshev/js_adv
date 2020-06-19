describe('SailingShip', () => {
    let ship;
    const sailingShipParams = {
        name: 'Jellyfish',
        model: 'Schooner',
        color: 'brown',
        position: {x: 0, y: 0},
        numberOfMasts: 5,
        totalSailArea: 500
    };

    beforeEach(function () {
        ship = new SailingShip(sailingShipParams);
    });

    it('should instance of Ship', () => {
        assert.instanceOf(ship, Ship);
    });

    it('should have property numberOfMasts', () => {
        assert.property(ship, 'numberOfMasts');
    });

    it('should have property totalSailArea', () => {
        assert.property(ship, 'totalSailArea');
    });
});
