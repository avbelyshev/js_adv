'use strict';

/**
 * Класс Ship
 *
 * @param {Object} shipParams Параметры корабля
 */
function Ship(shipParams) {
    this.name = shipParams.name;
    this.model = shipParams.model;
    this.color = shipParams.color;
    this.position = shipParams.position;
    this.distance = 0;
    this._isAnchorDroped = false;
    this._isDamaged = false;
}

Ship.prototype = {
    /**
     *
     * @param {string} direction ('n', 's', 'w', 'e')
     */
    move: function (direction) {
        let x = this.position.x;
        let y = this.position.y;

        switch (direction) {
            case 'n':
                y++;
                break;
            case 's':
                y--;
                break;
            case 'w':
                x--;
                break;
            case 'e':
                x++;
                break;
        }

        return this.moveTo({x, y});
    },

    moveTo: function (position) {
        if (this._isAnchorDroped)
            throw new Error('You need to rise anchor');

        this.distance += Math.sqrt((position.x - this.position.x) ** 2 + (position.y - this.position.y) ** 2);
        this.position = position;

        return true;
    },

    dropAnchor: function () {
        this._isAnchorDroped = true;
    },

    riseAnchor: function () {
        this._isAnchorDroped = false;
    },

    isAnchorDroped: function () {
        return this._isAnchorDroped;
    },

    setIsDamaged: function (isDamaged) {
        this._isDamaged = isDamaged;
    },

    isDamaged: function () {
        return this._isDamaged;
    }
}
