'use strict';

/**
 * Класс MotorShip
 *
 * @param {Object} shipParams Параметры корабля
 */
function MotorShip(shipParams) {
    Ship.call(this, shipParams);
    this.enginePower = shipParams.enginePower;
    this.bodyMaterial = shipParams.bodyMaterial;
}

MotorShip.prototype = Object.create(Ship.prototype);
MotorShip.prototype.constructor = Ship;
