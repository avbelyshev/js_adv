'use strict';

/**
 * Функция пробует произвести электронную регистрацию пассажира
 *
 *  * проверка билета
 *  * проверка данных пассажира
 *  * в информации о рейсе указано время начала
 *  * и конца электронной регистрации
 *
 * @param {World} world
 * @param {string} ticketId номер билета
 * @param {string} fullName имя пассажира
 * @param {number} nowTime текущее время
 * @returns {World} если успешно или ошибка
 */
function eRegistration(world, ticketId, fullName, nowTime) {
    const flight = world.flights[ticketId.split('-')[0]];
    if (!flight) throw new Error('Flight not found');

    if (nowTime < flight.registrationStarts) throw new Error('Registration has not started yet');
    if (nowTime > flight.registartionEnds) throw new Error('Registration has already ended');

    let ticket = flight.tickets.find(t => t.id === ticketId);
    if (!ticket) throw new Error('Ticket not found');

    if (ticket.fullName !== fullName) throw new Error('Passenger name does not match ticket');
    if (ticket.registrationTime) throw new Error('Registration was completed earlier');

    ticket.registrationTime = nowTime;
    return world;
}
