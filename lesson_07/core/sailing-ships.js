'use strict';

/**
 * Класс SailingShip
 *
 * @param {Object} shipParams Параметры корабля
 */
function SailingShip(shipParams) {
    Ship.call(this, shipParams);
    this.numberOfMasts = shipParams.numberOfMasts;
    this.totalSailArea = shipParams.totalSailArea;
}

SailingShip.prototype = Object.create(Ship.prototype);
SailingShip.prototype.constructor = Ship;
