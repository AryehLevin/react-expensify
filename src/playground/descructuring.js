const person = {
 name: 'Bert',
 age: 43,
 location:{
      city:'Jerusalem',
      temp: 21,
 }
}

console.log('${person.name} is ${person.age}.')

// or using descructuring

const name = person.name;
const age = person.age;

console.log('${name} is ${age}.')

// or using e6 descructuring with a default value anonymous and rename function
const {name:firstname = 'ananymous',age} = person; // creates name and age variables and gets the data
console.log('${firstname} is ${age}.')


// another example to show its use
console.log('${person.location.temp} in ${person.location.city}.')

if (person.location.city && person.location.temp) {
    console.log('${person.location.temp} in ${person.location.city}.')
}
//to simplify (with rename feature)
const {city, temp: temperature} = person.location
if (city && temperature) {
    console.log('${temperature} in ${city}.')
}

/*  ---------------array destructuring-------------------------- */
const address = ['12333 Ridgeside Rd','Durban North','Natal','1045'];

const [street,city,state,zip] = address; /* matching up by position */
const [,city,state='New York'] = address; /* matching up by position removing data we do not need*/
console.log('you are in ${city[1]} ${state[2]}. ');

