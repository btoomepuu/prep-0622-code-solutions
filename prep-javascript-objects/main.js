/* eslint-disable prefer-const */
let person = {
  firstName: 'Brennon',
  lastName: 'Toomepuu',
  hobby: 'Playing farming RPGs'
};

console.log(person);

console.log(`The person's first name is: ${person.firstName}`);

person.job = 'none';
console.log(`The person's curent job is: ${person.job}`);

person.previousJob = 'Case Design Analyst';
console.log(`The person's previous job was: ${person.previousJob}`);

console.log(person);
