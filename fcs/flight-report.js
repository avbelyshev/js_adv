'use strict';

/**
 * Функция генерации отчета по рейсу
 *
 * Отчет строится на основании данных, содержащихся в параметре flight
 *
 *  * проверка рейса
 *  * подсчет
 *
 * @param {World} world
 * @param {Flight} flight номер рейса
 * @param {number} nowTime текущее время
 * @returns {Report} отчет
 */
function flightReport(world, flight, nowTime) {
    const flightObject = world.flights[flight];
    if (!flightObject) throw new Error('Flight not found');

    const registration = (flightObject.registrationStarts <= nowTime && flightObject.registartionEnds >= nowTime);
    const complete = (nowTime > flightObject.registartionEnds);
    const countOfSeats = flightObject.seats;
    const reservedSeats = flightObject.tickets.length;
    const registeredSeats = flightObject.tickets.filter(t => t.registrationTime).length;

    const report = {
        flight: flightObject.name,
        registration,
        complete,
        countOfSeats,
        reservedSeats,
        registeredSeats
    };
    return {
        ...report
    };
}
