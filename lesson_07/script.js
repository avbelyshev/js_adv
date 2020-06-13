'use strict';

const motorShipParams = {
    name: 'Mikhail Svetlov',
    model: 'Cruise',
    color: 'silver',
    position: {x: 0, y: 0},
    enginePower: 3000,
    bodyMaterial: 'steel'
};

const newMotorShipParams = {
    name: 'Rusty old',
    model: 'Seiner',
    color: 'ginger',
    position: {x: 0, y: 0},
    enginePower: 2000,
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

const motorShip = new MotorShip(motorShipParams);
motorShip.moveTo({ x: 10, y: 10 });
motorShip.move('n');
motorShip.move('e');

const pier = new Pier({x: 20, y: 15});
motorShip.moveTo(pier.position);
pier.moor(motorShip);
pier.unmoor(motorShip);
console.log(pier);
console.log(motorShip);

const shipyard = new Shipyard(MotorShip);
const shipyard2 = new Shipyard(SailingShip);
console.log(shipyard);
console.log(shipyard2);

const newMotorShip = shipyard.build(MotorShip, newMotorShipParams);
console.log(newMotorShip);
const sailingShip = shipyard2.build(SailingShip, sailingShipParams);
console.log(sailingShip);
