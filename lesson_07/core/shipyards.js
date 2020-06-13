'use strict';

/**
 * Класс Shipyard
 *
 * @param {ShipType} ShipType Класс корабля
 */
function Shipyard(ShipType) {
    this.ShipType = ShipType;
}

Shipyard.prototype = {
    checkShipType: function (ship) {
        if (!(ship instanceof this.ShipType) && (ship !== this.ShipType)) {
            throw new Error('The shipyard does not serve this type of ship');
        }
    },

    build: function (shipType, shipParams) {
        this.checkShipType(shipType);

        return new this.ShipType(shipParams);
    },

    repair: function (ship) {
        this.checkShipType(ship);

        ship.setIsDamaged(false);
    },

    repainting: function (ship, color) {
        ship.color = color;
    },

    exchange: function (ship, shipParams) {
        this.checkShipType(ship);

        return this.build(shipParams);
    }
}
