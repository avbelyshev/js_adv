'use strict';

/**
 * Класс Student
 *
 * @param {string} fullname ФИО
 */
function Student(fullname) {
    [this.surname, this.firstname, this.middlename] = fullname.split(' ');
    this._isHealthy = true;

    this.getFullName = function () {
        return `${this.surname} ${this.firstname} ${this.middlename}`;
    };

    this.getSurnameInitials = function () {
        return `${this.surname} ${this.firstname[0]}. ${this.middlename[0]}.`;
    };

    this.setIsHealthy = function (isHealthy) {
        this._isHealthy = isHealthy;
    };

    this.isHealthy = function () {
        return this._isHealthy;
    };
}
