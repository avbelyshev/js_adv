'use strict';

/**
 * Класс Pier
 *
 * @param {Position} position Координаты позиции корабля
 * @param {Ship[]} ships Массив кораблей
 */
function Pier(position, ships= []) {
    this.position = position;
    this.ships = ships;
}

Pier.prototype = {
    moor: function (ship) {
        if (this._findShip(ship)) {
            throw new Error('Ship is already moored');
        }
        if (!this._checkPosition(ship)) {
            throw new Error('The ship has not arrived yet');
        }

        ship.dropAnchor();
        this.ships.push(ship);
    },

    unmoor: function (ship) {
        if (!this._findShip(ship)) {
            throw new Error('The ship is not moored');
        }

        this.ships.splice(this.ships.indexOf(ship), 1);
        ship.riseAnchor();
    },

    _findShip: function (ship) {
        return this.ships.find(s => ship.name === s.name);
    },

    _checkPosition: function (ship) {
        return (ship.position.x === this.position.x || ship.position.y === this.position.y);
    }
}
