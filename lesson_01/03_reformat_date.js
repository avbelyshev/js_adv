const input = prompt('Введите дату в формате ММ/ЧЧ/ГГГГ: ');
const date = new Date(Date.parse(input));
const dateRu = date.toLocaleString("ru", {day: 'numeric', month: 'numeric', year: 'numeric'} );

console.log(date);
console.log(dateRu);

alert(`Дата в формате ЧЧ.ММ.ГГГГ - ${dateRu}`);
