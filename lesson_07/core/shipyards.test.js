describe('Dockyard', () => {
    let motorShip;
    let sailingShip;
    let shipyard;
    const motorShipParams = {
        name: 'Mikhail Svetlov',
        model: 'Cruise',
        color: 'silver',
        position: {x: 0, y: 0},
        enginePower: 3000,
        bodyMaterial: 'steel'
    };
    const sailingShipParams = {
        name: 'Jellyfish',
        model: 'Schooner',
        color: 'brown',
        position: {x: 0, y: 0},
        numberOfMasts: 5,
        totalSailArea: 500
    };

    beforeEach(function () {
        motorShip = new MotorShip(motorShipParams);
        sailingShip = new SailingShip(sailingShipParams);
        shipyard = new Shipyard(MotorShip);
    });

    describe('function build', () => {
        it('should throw error if ship type not appropriate', () => {
            expect(() => shipyard.build(SailingShip)).to.throw('The shipyard does not serve this type of ship');
        });
        it('should build a ship of his type', () => {
            assert.instanceOf(shipyard.build(MotorShip, motorShipParams), MotorShip);
        });
    });

    describe('function repair', () => {
        it('should throw error if ship type not appropriate', () => {
            expect(() => shipyard.repair(sailingShip)).to.throw('The shipyard does not serve this type of ship');
        });
        it('should repair a ship of his type', () => {
            motorShip.setIsDamaged(true);
            shipyard.repair(motorShip);
            expect(motorShip.isDamaged()).to.equal(false);
        });
    });

    describe('function repainting', () => {
        it('should repainting a ship of his type', () => {
            shipyard.repainting(motorShip, 'white');
            expect(motorShip.color).to.equal('white');
        });
        it('should repainting a ship of another type', () => {
            shipyard.repainting(sailingShip, 'white');
            expect(sailingShip.color).to.equal('white');
        });
    });

    describe('function exchange', () => {
        it('should throw error if ship type not appropriate', () => {
            expect(() => shipyard.exchange(sailingShip)).to.throw('The shipyard does not serve this type of ship');
        });
        it('should exchange a ship of his type', () => {
            let newMotorShip = shipyard.exchange(motorShip, motorShipParams);
            assert.deepEqual(newMotorShip, new MotorShip(motorShipParams));
        });
    });
});
