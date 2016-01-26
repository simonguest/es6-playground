// Arrow functions
var numbers = [1, 2, 3, 4, 5];
var newNumbers = numbers.map((n) => n * n);
console.log(newNumbers);

// String manipulation
var sentence = 'The quick brown fox jumps over the lazy dog';
console.log(sentence.includes('fox'));
console.log(sentence.includes('horse'));
console.log('No horse'.repeat(3));

// Template literals
var firstName = 'Simon';
var lastName = 'Guest';
console.log(`Welcome to this site, ${firstName} ${lastName}. The time is ${new Date()}`);
console.log(
  `*****
*FUN*
*****`
);

// Destructuring arrays
var [jan, feb, mar, apr] = [10, 20, 15, 21];
console.log(`The high index in Jan was ${jan}`);

// Destructuring objects
var simon = {name: 'Simon Guest', age: 21};
var {name, age} = simon;
console.log(`Welcome ${name}, aged ${age}`);

// Imports and Exports
import { answers } from './module1.js';
console.log(answers);
console.log(`...and the answer is: ${answers.otherAnswer}`);

// Parameters
var getAddress = function (zip = 98033) {
  return `Your zip is ${zip}`;
};
console.log(getAddress());
console.log(getAddress(98210));

// Spread args
var getNames = function (...ids) {
  return `You passed ${ids.length} id(s) to me... ${ids}`;
};

console.log(getNames('1234'));
console.log(getNames('1234', '2345', '3456'));
console.log(getNames(...['1', '2', '3', '4', '5']));

// Named args
var initCanvas = function ({height=600, width=480} = {}) {
  console.log(`init canvas of size: ${height}x${width}`);
};
initCanvas({height: 300, width: 222});
initCanvas({height: 300});
initCanvas();

// Classes
class Component {
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }

  toString() {
    return `Hello from ${this.name}(desc: ${this.description})`;
  }
}

var anchor = new Component('anchor', 'An Anchor Tag');
console.log(anchor.toString());

class Table extends Component {
  constructor(name, description, rows = 0) {
    super(name, description);
    this.rows = rows;
  }

  getRows() {
    return `${this.rows} row(s) found`;
  }
}

var table = new Table('table', 'Table', 22);
console.log(table.toString());
console.log(table.getRows());

// Symbols
var sym1 = Symbol('1234');
var sym2 = Symbol('1234');
console.log(sym1);
console.log(sym1 === sym2);

// Maps
let person = new Map();
person.set('name', 'Simon');
console.log(person.get('name'));
console.log(person.has('name'));
console.log(person.has('age'));
console.log(person);
console.log(person.entries());

// Promises
var getData = function (name = 'Unknown') {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Hello, ${name}`);
    }, 1000);
  });
};

getData('Simon')
  .then((data)=> {
    console.log(data);
  });

// Async execution
var promises = ['Simon', 'Joe', 'Ted'].map(getData);
Promise.all(promises)
  .then((results) => {
    console.log(results);
  });