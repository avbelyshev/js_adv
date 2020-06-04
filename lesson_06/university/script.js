'use strict';

const student = new Student('Петров Иван Иванович');
const student1 = new Student('Иванов Иван Иванович');
const student2 = new Student('Сидоров Иван Иванович');
const group = new Group('ИТ-1');

group.addStudent(student);
group.addStudent(student1);
group.addStudent(student2);

student1.setIsHealthy(false);

console.log(group);
console.log(group.getAbsentStudents());
