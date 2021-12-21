// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Learning</h1>`;
appDiv.innerHTML += `<ol>
  <li>HelloWorld</li>
  <li>Call, Apply & Bind</li>
  <li>Map, Reduce & Filter</li>
  <li>Fibonacci Series</li>
  <li>Subset of array [1,2,3,1,3,4,5,6,7] from 3 to 7 position</li>
  <li>Remove the duplicate values form the array [1,2,3,1,3,4,5,6,7]</li>
</ol>`;

/********************************/
/********* HelloWorld ***********/
/********************************/

function helloWorld() {
  console.log('Welcome to the world of JS using Stackblitz');
}
helloWorld();

/********************************/
/* Call, Apply and Bind Methods */
/********************************/
var person1 = { firstName: 'Ranga', lastName: 'Komarthi' };
var person2 = { firstName: 'Zameer', lastName: 'Inamdar' };

function say(greeting) {
  console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}

say.call(person1, 'Call-1', 'Call-2');
say.call(person2, 'Call-1', 'Call-2');

say.apply(person1, ['Apply-1', 'Apply-2']);
say.apply(person2, ['Apply-1', 'Apply-2']);

let sayBindRanga = say.bind(person1);
sayBindRanga(['Bind1', 'Bind2']);

let sayBindZameer = say.bind(person2);
sayBindZameer(['Bind1', 'Bind2']);

/********************************/
/* Map, Reduce & Filter Methods */
/********************************/
// Map
let numArr = [1, 2, 3, 4, 5];
function multipleFn(n) {
  return n * 3;
}
let mulArr = numArr.map(multipleFn);
console.log(mulArr);

// Reduce
numArr = [1, 2, 3, 4, 5];
function sumFn(n1, n2) {
  return n1 + n2;
}
let sum = numArr.reduce(sumFn);
console.log(sum);

// Filter
numArr = [1, 2, 3, 4, 5];
function filterFn(n) {
  return n < 3;
}
let filterArr = numArr.filter(filterFn);
console.log(filterArr);
