const buyTicketForm = document.getElementById('buy-ticket-form');

buyTicketForm.addEventListener('submit', submitHandler);

/**
 * Обработчик отправки формы
 * @param {KeyboardEvent} event
 */
function submitHandler(event) {
    // прерываем всплытие что бы форма не отправлялась
    event.preventDefault();

    const formData = {
        flightName: buyTicketForm.elements.flightname.value,
        fullName: buyTicketForm.elements.fullname.value,
        type: buyTicketForm.elements.type.value,
    };

    try {
        const ticket = buyTicket(world.flights, formData.flightName, Date.now(), formData.fullName, +formData.type);
        alert(`You bought a ticket № ${ticket.id}. Seat ${ticket.seat}.`);
    } catch (error) {
        console.error(error);
        alert(error.message);
    }

    updateView()
    buyTicketForm.reset();
}
