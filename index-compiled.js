'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _module1Compiled = require('./module1-compiled');

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Arrow functions
var numbers = [1, 2, 3, 4, 5];
var newNumbers = numbers.map(function (n) {
  return n * n;
});
console.log(newNumbers);

// String manipulation
var sentence = 'The quick brown fox jumps over the lazy dog';
console.log(sentence.includes('fox'));
console.log(sentence.includes('horse'));
console.log('No horse'.repeat(3));

// Template literals
var firstName = 'Simon';
var lastName = 'Guest';
console.log('Welcome to this site, ' + firstName + ' ' + lastName + '. The time is ' + new Date());
console.log('*****\n*FUN*\n*****');

// Destructuring arrays
var jan = 10;
var feb = 20;
var mar = 15;
var apr = 21;

console.log('The high index in Jan was ' + jan);

// Destructuring objects
var simon = { name: 'Simon Guest', age: 21 };
var name = simon.name;
var age = simon.age;

console.log('Welcome ' + name + ', aged ' + age);

// Imports and Exports

console.log(_module1Compiled.answers);
console.log('...and the answer is: ' + _module1Compiled.answers.otherAnswer);

// Parameters
var getAddress = function getAddress() {
  var zip = arguments.length <= 0 || arguments[0] === undefined ? 98033 : arguments[0];

  return 'Your zip is ' + zip;
};
console.log(getAddress());
console.log(getAddress(98210));

// Spread args
var getNames = function getNames() {
  for (var _len = arguments.length, ids = Array(_len), _key = 0; _key < _len; _key++) {
    ids[_key] = arguments[_key];
  }

  return 'You passed ' + ids.length + ' id(s) to me... ' + ids;
};

console.log(getNames('1234'));
console.log(getNames('1234', '2345', '3456'));
console.log(getNames.apply(undefined, ['1', '2', '3', '4', '5']));

// Named args
var initCanvas = function initCanvas() {
  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var _ref$height = _ref.height;
  var height = _ref$height === undefined ? 600 : _ref$height;
  var _ref$width = _ref.width;
  var width = _ref$width === undefined ? 480 : _ref$width;

  console.log('init canvas of size: ' + height + 'x' + width);
};
initCanvas({ height: 300, width: 222 });
initCanvas({ height: 300 });
initCanvas();

// Classes

var Component = function () {
  function Component(name, description) {
    _classCallCheck(this, Component);

    this.name = name;
    this.description = description;
  }

  _createClass(Component, [{
    key: 'toString',
    value: function toString() {
      return 'Hello from ' + this.name + '(desc: ' + this.description + ')';
    }
  }]);

  return Component;
}();

var anchor = new Component('anchor', 'An Anchor Tag');
console.log(anchor.toString());

var Table = function (_Component) {
  _inherits(Table, _Component);

  function Table(name, description) {
    var rows = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

    _classCallCheck(this, Table);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Table).call(this, name, description));

    _this.rows = rows;
    return _this;
  }

  _createClass(Table, [{
    key: 'getRows',
    value: function getRows() {
      return this.rows + ' row(s) found';
    }
  }]);

  return Table;
}(Component);

var table = new Table('table', 'Table', 22);
console.log(table.toString());
console.log(table.getRows());

// Symbols
var sym1 = Symbol('1234');
var sym2 = Symbol('1234');
console.log(sym1);
console.log(sym1 === sym2);

// Maps
var person = new Map();
person.set('name', 'Simon');
console.log(person.get('name'));
console.log(person.has('name'));
console.log(person.has('age'));
console.log(person);
console.log(person.entries());

// Promises
var getData = function getData() {
  var name = arguments.length <= 0 || arguments[0] === undefined ? 'Unknown' : arguments[0];

  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('Hello, ' + name);
    }, 1000);
  });
};

getData('Simon').then(function (data) {
  console.log(data);
});

// Async execution
var promises = ['Simon', 'Joe', 'Ted'].map(getData);
Promise.all(promises).then(function (results) {
  console.log(results);
});

//# sourceMappingURL=index-compiled.js.map