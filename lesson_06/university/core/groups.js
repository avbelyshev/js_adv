'use strict';

/**
 * Класс Group
 *
 * @param {string} number Номер группы
 */
function Group(number) {
    this.number = number;
    this.students = [];

    this.addStudent = function (student) {
        this.students.push(student);
    };

    this.getAbsentStudents = function () {
        return this.students.filter(s => !s.isHealthy());
    };
}
