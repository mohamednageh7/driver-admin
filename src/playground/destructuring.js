// learn about new ES6 syntacs ( destructuring)

// destructuring object
const person = {
    // name: 'mohamed',
    // age:26,
    location : {
        city: 'egypt',
        temp: 30
    }
};

const {name = 'Anonymous', age: myage = '27'} = person;
console.log(`${name} is ${myage}`);

const {city, temp: temperture} = person.location
if (temperture && city) {
    console.log(`it's ${temperture} in ${city}.`);
};

// destructuring array
const address = ['33 street of awlad', 'Egypt', , '11111'];

const [street, citie, state = 'gmsa', zip] = address;

console.log(`You are in ${citie} ${state} street ${street}`);