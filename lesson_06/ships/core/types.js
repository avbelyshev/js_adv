'use strict';

/**
 * @typedef {Object} Position
 * @property {number} x координата
 * @property {number} y координата
 */

/**
 * @typedef {Object} Ship
 * @property {string} name Название
 * @property {string} model Модель
 * @property {Position} position Координаты позиции корабля
 * @property {number} distance Общая дистанция, которую корабль проплыл
 * @property {boolean} _isAnchorDroped Состояние якоря
 */

/**
 * @typedef {Object} Pier
 * @property {Position} position Координаты пристани
 * @property {Ship[]} ships Массив кораблей
 */
