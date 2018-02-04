// Object Destructuring

// const person = {
//   name: 'James',
//   age: 25,
//   location: {
//     city: 'Philadelphia',
//     temp: 90
//   }
// };

// console.log(`${person.name} is ${person.age}`);
// const {name: firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}`);

// const {city, temp: temperature} = person.location;
// console.log(`It's ${person.location.temp} in ${person.location.city}`);
// console.log(`It's ${temperature} in ${city}`);

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher; 
// console.log(publisherName);

// Array Destructuring
const address = ['123 S. Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
console.log(`You are in ${address[1]} ${address[2]}`);
const [, city, state = 'New York'] = address;
console.log(`You are in ${city} ${state}`);

const address2 = [];
const [, , state2 = 'California'] = address2;
console.log(`You are in ${state2}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$3.00'];
const [drink, , mediumPrice] = item;
console.log(`A medium ${drink} is ${mediumPrice}`);