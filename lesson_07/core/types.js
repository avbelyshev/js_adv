'use strict';

/**
 * @typedef {Object} Position
 * @property {number} x координата
 * @property {number} y координата
 */

/**
 * @typedef {Object} ShipParams
 * @property {string} name Название
 * @property {string} model Модель
 * @property {string} color Цвет
 * @property {Position} position Координаты позиции корабля
 * @property {number} enginePower Мощность двигателя
 * @property {string} bodyMaterial Материал корпуса
 * @property {number} numberOfMasts Количество мачт
 * @property {number} totalSailArea Общая площадь парусов
 */

/**
 * @typedef {Object} Ship
 * @property {string} name Название
 * @property {string} model Модель
 * @property {string} color Цвет
 * @property {Position} position Координаты позиции корабля
 * @property {number} distance Общая дистанция, которую корабль проплыл
 * @property {boolean} _isAnchorDroped Состояние якоря
 * @property {boolean} _isDamaged Признак повреждения
 */

/**
 * @typedef {Object} MotorShip
 * @property {string} name Название
 * @property {string} model Модель
 * @property {string} color Цвет
 * @property {Position} position Координаты позиции корабля
 * @property {number} distance Общая дистанция, которую корабль проплыл
 * @property {boolean} _isAnchorDroped Состояние якоря
 * @property {boolean} _isDamaged Признак повреждения
 * @property {number} enginePower Мощность двигателя
 * @property {string} bodyMaterial Материал корпуса
 */

/**
 * @typedef {Object} SailingShip
 * @property {string} name Название
 * @property {string} model Модель
 * @property {string} color Цвет
 * @property {Position} position Координаты позиции корабля
 * @property {number} distance Общая дистанция, которую корабль проплыл
 * @property {boolean} _isAnchorDroped Состояние якоря
 * @property {boolean} _isDamaged Признак повреждения
 * @property {number} numberOfMasts Количество мачт
 * @property {number} totalSailArea Общая площадь парусов
 */

/**
 * @typedef {Object} Pier
 * @property {Position} position Координаты пристани
 * @property {Ship[]} ships Массив кораблей
 */

/**
 * @typedef {Object} Shipyard
 * @property {ShipType} ShipType Класс корабля
 */
