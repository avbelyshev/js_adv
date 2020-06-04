'use strict';

/**
 * Класс Ship
 *
 * @param {string} name Название
 * @param {string} model Модель
 * @param {Position} position Координаты позиции корабля
 */
function Ship(name, model, position) {
    this.name = name;
    this.model = model;
    this.position = position;
    this.distance = 0;
    this._isAnchorDroped = false;

    /**
     *
     * @param {string} direction ('n', 's', 'w', 'e')
     */
    this.move = function (direction) {
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
    };

    this.moveTo = function (position) {
        if (this._isAnchorDroped)
            throw new Error('You need to rise anchor');

        this.distance += Math.sqrt((position.x - this.position.x) ** 2 + (position.y - this.position.y) ** 2);
        this.position = position;

        return true;
    };

    this.dropAnchor = function () {
        this._isAnchorDroped = true;
    };

    this.riseAnchor = function () {
        this._isAnchorDroped = false;
    };

    this.isAnchorDroped = function () {
        return this._isAnchorDroped;
    };
}
