'use strict';

/**
 * Функция вывода отчета по рейсу
 * Отображает список купленных билетов: номер билета, место, полное имя пассажира, прошел ли регистрацию на рейс.
 *
 * @param {World} world
 * @param {string} flightName номер рейса
 */
function flightDetails(world, flightName) {
    const flight = world.flights[flightName];
    if (!flight) {
        console.warn('Flight not found');
        return;
    }

    const container = document.getElementById('flight-details');
    const header = document.createElement('h1');
    const table = document.createElement('table');
    const thead = document.getElementById('table-header').content.cloneNode(true);
    const tbody = document.createElement('tbody');
    const tabletLine = document.getElementById('table-line');

    header.textContent = `*** Details of flight ${flightName} ***`;
    container.appendChild(header);
    container.appendChild(table);
    table.appendChild(thead);
    table.appendChild(tbody);

    for (let ticket of flight.tickets) {
        let row = tabletLine.content.cloneNode(true);

        row.querySelector('.id').textContent = ticket.id;
        row.querySelector('.seat').textContent = ticket.seat.toString();
        row.querySelector('.fullName').textContent = ticket.fullName;
        row.querySelector('.registration').textContent = ticket.registrationTime ? 'V' : 'X';

        tbody.appendChild(row);
    }
}

flightDetails(bigWorld, 'BH118');
