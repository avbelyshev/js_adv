'use strict';

const ship = new Ship('Best ship', 'Cruise', {x: 0, y: 0});
ship.moveTo({ x: 10, y: 10 });
ship.move('n');
ship.move('e');

const pier = new Pier({x: 20, y: 15});
ship.moveTo(pier.position);
pier.moor(ship);
pier.unmoor(ship);
console.log(pier);
console.log(ship);

// console.log(ship);
// console.log(ship.position);
// console.log(ship.distance);
// console.log(ship.isAnchorDroped());
