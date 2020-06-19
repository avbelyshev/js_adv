describe('MotorShip', () => {
    let ship;
    const motorShipParams = {
        name: 'Mikhail Svetlov',
        model: 'Cruise',
        color: 'silver',
        position: {x: 0, y: 0},
        enginePower: 3000,
        bodyMaterial: 'steel'
    };

    beforeEach(function () {
        ship = new MotorShip(motorShipParams);
    });

    it('should instance of Ship', () => {
        assert.instanceOf(ship, Ship);
    });

    it('should have property enginePower', () => {
        assert.property(ship, 'enginePower');
    });

    it('should have property bodyMaterial', () => {
        assert.property(ship, 'bodyMaterial');
    });
});
