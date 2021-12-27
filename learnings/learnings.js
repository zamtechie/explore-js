export function learningFn() {
  console.log('In Learning JS');
  /********************************/
  /********* HelloWorld ***********/
  /********************************/

  function helloWorld() {
    // console.log('Welcome to the world of JS using Stackblitz');
  }
  helloWorld();

  /********************************/
  /* Call, Apply and Bind Methods */
  /********************************/
  var person1 = { firstName: 'Ranga', lastName: 'Komarthi' };
  var person2 = { firstName: 'Zameer', lastName: 'Inamdar' };

  function say(greeting) {
    // console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
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
  // console.log(mulArr);

  // Reduce
  numArr = [1, 2, 3, 4, 5];
  function sumFn(n1, n2) {
    return n1 + n2;
  }
  let sum = numArr.reduce(sumFn);
  // console.log(sum);

  // Filter
  numArr = [1, 2, 3, 4, 5];
  function filterFn(n) {
    return n < 3;
  }
  let filterArr = numArr.filter(filterFn);
  // console.log(filterArr);

  /********************************/
  /****** Clousure example ********/
  /********************************/

  function closureFn() {
    var name = 'Closure Function';

    function displayNameFn() {
      // console.log('ClousreFn name:', name);
    }
    return displayNameFn;
  }

  var myFunc = closureFn();
  myFunc();

  /**************************************************/
  /* IIFE - Immediatly Invoking Function Expression */
  /************* Self Invoking function *************/
  /**************************************************/

  (function () {
    // console.log('This is Self Invoking Function or IIFE');
  })();

  /**************************************************/
  /*********** Data Encoding and Decoding ***********/
  /**************************************************/
  function encodeDataFn(data) {
    return btoa(data);
  }

  function decodeDataFn(data) {
    return atob(data);
  }

  let encodedData = encodeDataFn('Zameer');
  let decodedData = decodeDataFn(encodedData);
  // console.log('encodedData:', encodedData);
  // console.log('decodedData:', decodedData);

  /**************************************************/
  /*** Different ways you can create object in js ***/
  /**************************************************/

  // Constructor
  let constructorObjFn = () => {
    function person(firstName, lastName, age) {
      this.fname = firstName;
      this.lname = lastName;
      this.age = age;
      this.printInfo = function () {
        console.log(`${this.fname} ${this.lname} whose age is ${this.age}`);
      };
    }
    let personObj1 = new person('Zameer', 'Inamdar', 36);

    // personObj1.printInfo();
  };
  constructorObjFn();

  // Object literal
  let objLiteralFn = () => {
    let person = {
      fname: 'Ranga',
      lname: 'Komarthi',
      age: 31,
      printInfo: function () {
        console.log(`${this.fname} ${this.lname} whose age is ${this.age}`);
      },
    };

    let person1 = person;
    // person1.printInfo();
  };
  objLiteralFn();

  // Object.create
  let objCreateFn = () => {
    const person = {
      fname: 'Pradeep',
      lname: 'Desai',
      age: 36,
      printInfo: function () {
        console.log(`${this.fname} ${this.lname} whose age is ${this.age}`);
      },
    };
    let personObj = Object.create(person);
    // personObj.printInfo();
  };
  objCreateFn();

  // class
  let classObjfn = () => {
    class Person {
      constructor(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
      }

      printInfo = function () {
        console.log(`${this.fname} ${this.lname} whose age is ${this.age}`);
      };
    }
    let personObj1 = new Person('Rock', 'Star', 36);
    // personObj1.printInfo();
  };
  classObjfn();

  /******************************/
  /*** Example of Web workers ***/
  /******************************/
  /*
  Web-Workers works on server, if we want to run locally then
  it needs to be run web-security-disable mode
  therefore commenting this code
  
  if (window.Worker) {
    // Creating new web worker using constructor
    var worker = new Worker('worker.js');

    var message = 'Hello';

    // Sending the message using postMessage
    worker.postMessage(message);

    // On response
    worker.onmessage = function (e) {
      console.log(e.data);
    };
  }*/

  /******************************/
  /*** Example of Async/Await ***/
  /******************************/

  const getData = async () => {
    var y = await 'Hello World';
    console.log(y);
  };

  // console.log(1);
  // getData();
  // console.log(2);
}
