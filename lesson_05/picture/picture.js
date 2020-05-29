'use strict';

let drawingField = {
    color: '',
    dimension: 0,
    cells: []
}

/**
 * Обработчик отправки формы
 * @param {KeyboardEvent} event
 */
function submitHandler(event) {
    event.preventDefault();

    const formData = {
        color: form.elements.color.value,
        dimension: form.elements.dimension.value,
    };

    drawingField.color = formData.color;
    if (drawingField.dimension !== formData.dimension) {
        drawingField.dimension = formData.dimension;

        clearTable();
        buildField(formData.dimension);
    }
}

/**
 * Обработчик нажатия на ячейку поля
 * @param {MouseEvent} event
 */
function click(event) {
    // console.log(event.type, event.target);

    if (event.target.tagName !== 'TD')
        return;

    let color = drawingField.color;
    if (event.shiftKey)
        color = 'transparent';

    event.target.style.backgroundColor = color;
    const x = +event.target.dataset.x;
    const y = +event.target.dataset.y;
    let cell = findCell(x, y);
    cell.color = color;
}

/**
 * Функция очистки содержимого таблицы
 * Пришлось делать рекурсию потому, что почему-то удалялись только четные элементы
 */
function clearTable(node) {
    if (node) node.remove();
    for (let node of table.childNodes) {
        clearTable(node);
    }
}

/**
 * Функция поиска ячейки
 * @param {number} x координата
 * @param {number} y координата
 */
function findCell(x, y) {
    return drawingField.cells.find(cell => (cell.x === x && cell.y === y));
}

/**
 * Функция построения поля для рисования
 * @param {number} dimension размерность поля
 */
function buildField(dimension) {
    if (dimension < 0) return;
    let drawingFieldCells = [];

    for (let i = 0; i < dimension; i++) {
        const tr = document.createElement("tr");
        for (let j = 0; j < dimension; j++) {
            const td = document.createElement("td");
            td.dataset.x = i.toString();
            td.dataset.y = j.toString();

            const savingCell = findCell(i, j);
            if (savingCell) {
                td.style.backgroundColor = savingCell.color;
                drawingFieldCells.push(savingCell);
            } else {
                drawingFieldCells.push({x: i, y: j});
            }
            tr.append(td);
        }
        table.append(tr);
    }
    drawingField.cells = drawingFieldCells;
}

const form = document.getElementById('drawing-options-form');
const table = document.getElementsByTagName('table')[0];

form.addEventListener('submit', submitHandler);
table.addEventListener('click', click);
