export function programsFn() {
  console.log('In Programs JS');

  /*************************************/
  /* Spread Operator and Rest operator */
  /*************************************/

  let spreadAndRestOpFn = () => {
    let arr = [1, 2, 3];

    // console.log(...arr);

    function spreadOpFn(a, b, c) {
      console.log(a + b + c);
    }

    spreadOpFn(...arr);

    let a = 10;
    let b = 20;
    let c = 30;

    function restOpFn(...input) {
      let sum = 0;
      for (let i = 0; i < input.length; i++) {
        sum += input[i];
      }
      console.log(sum);
    }

    restOpFn(10, 20, 30, 40);
  };

  // spreadAndRestOpFn();

  /************************************/
  /* Different ways to clone a object */
  /************************************/

  let cloneObjFn = () => {
    // Using spead operator
    let spreadObj1 = {
      fname: 'Zameer',
      lname: 'Inamdar',
    };
    let spreadObj2 = { ...spreadObj1 };
    spreadObj2.lname = 'changed';
    let a = [1, 2, 3];
    // console.log(...a);
    // console.log(spreadObj1);
    // console.log(spreadObj2);

    let assignObj1 = {
      city: 'Pune',
      state: 'Maharashtra',
    };
    let assignObj2 = Object.assign({}, assignObj1);
    assignObj2.city = 'Mumbai';
    // console.log(assignObj1);
    // console.log(assignObj2);

    let jsonObj1 = {
      designation: 'UI Architect',
      company: 'Persistent Systems',
    };
    let jsonObj2 = JSON.parse(JSON.stringify(jsonObj1));
    jsonObj2.company = 'Barclays';
    // console.log(jsonObj1);
    // console.log(jsonObj2);
  };
  cloneObjFn();

  /********************************/
  /**** Factorial of a number *****/
  /********************************/
  function factorial(num) {
    let number = num;
    let factorialNumber = 1;
    if (num < 0) {
      return 'Invalid number';
    } else if (num === 0) {
      factorialNumber = 1;
    } else {
      while (number > 0) {
        factorialNumber *= number--;
      }
    }
    // console.log('factorial of:', num, ' is:', factorialNumber);
    return factorialNumber;
  }
  factorial(-1);

  /************************************/
  /* Fibonacci number at nth position */
  /* 0, 1, 1, 2, 3, 5, 8, 13, 21, ... */
  /************************************/

  let fibonacciFn = (position) => {
    if (position == 0) {
      return 0;
    } else if (position == 1) {
      return 1;
    } else {
      return fibonacciFn(position - 1) + fibonacciFn(position - 2);
    }
  };
  const FibonacciNum = fibonacciFn(2);
  // console.log(FibonacciNum);

  /************************************/
  /* Fibonacci series at nth position */
  /* 0, 1, 1, 2, 3, 5, 8, 13, 21, ... */
  /************************************/

  let fibonacciSeriesFn = (position) => {
    let num1 = 0,
      num2 = 1,
      nextNum = 0;
    let fibonacciArr = [];

    if (position === 0) {
      fibonacciArr.push(num1);
    } else {
      fibonacciArr.push(num1);
      fibonacciArr.push(num2);

      for (let i = 2; i < position; i++) {
        nextNum = num1 + num2;
        num1 = num2;
        num2 = nextNum;
        fibonacciArr.push(nextNum);
      }
    }
    return fibonacciArr;
  };
  const fibonacciSeries = fibonacciSeriesFn(6);
  // console.log(fibonacciSeries);

  /********************************/
  /**** Sum of array elements *****/
  /********************************/
  function summation() {
    const arr = [1, 2, 3, 4, 5];
    const sumArr = arr.reduce((n1, n2) => {
      return n1 + n2;
    });
    // console.log('sumArr:', sumArr);
  }
  summation();

  /*****************************************/
  /* All array elements multiply be number */
  /*****************************************/

  function multiplyElementsOfArray(num) {
    const arr = [1, 2, 3, 4, 5];
    const multiplyWith = num;
    function multiply(num1, num2) {
      return num1 * num2;
    }
    const multipliedArr = arr.map((elem) => {
      return multiply(elem, multiplyWith);
    });
    // console.log('Multiplied Array:', multipliedArr);
  }
  multiplyElementsOfArray(5);

  /************************************************************/
  /* Subset of array [1,2,3,1,3,4,5,6,7] from 3 to 7 position */
  /************************************************************/
  let subsetArrFn = (_) => {
    const arr = [1, 2, 3, 1, 3, 4, 5, 6, 7];
    const subsetArr = arr.splice(3, 4);
    console.log('subsetArr:', subsetArr);
  };

  // subsetArrFn();

  /************************************************************/
  /* Unique of array [1,2,3,1,3,4,5,6,7] from 3 to 7 position */
  /************************************************************/

  let removeDuplicateFn = (_) => {
    const arr = [1, 2, 3, 1, 3, 4, 5, 6, 7];
    let uniqueArr = [];

    console.log([...new Set(arr)]);

    function filterArr(num) {
      if (!uniqueArr.includes(num)) {
        uniqueArr.push(num);
        return true;
      }
    }
    arr.filter(filterArr);

    console.log(uniqueArr);
  };

  // removeDuplicateFn();

  /*************************************************************************/
  /* Count of duplicaite of array [1,2,3,1,3,4,5,6,7] from 3 to 7 position */
  /*************************************************************************/

  let countOfDuplicateFn = () => {
    let arr = [1, 2, 3, 1, 3, 4, 5, 6, 7, 1, 1, 2, 3, 4, 5, 6, 7, 8];
    let countObj = {};

    for (let i = 0; i < arr.length; i++) {
      if (countObj[arr[i]]) {
        countObj[arr[i]] += 1;
      } else {
        countObj[arr[i]] = 1;
      }
    }
    console.log(countObj);
  };
  // countOfDuplicateFn();

  /***************************************/
  /* Curring Functions eg: sum()()()()() */
  /***************************************/

  let curryingFn = () => {
    function sum(a, b, c) {
      return a + b + c;
    }

    function currySum(a) {
      return function (b) {
        return function (c) {
          return a + b + c;
        };
      };
    }
    console.log(currySum(1)(2)(3));
  };

  // curryingFn();

  /*******************************/
  /* Converting number to binary */
  /*******************************/

  let numToBinaryFn = (num) => {
    console.log(num.toString(2));
  };

  // numToBinaryFn(2);

  /*******************************************************/
  /* 3 Kids and 5 Toyes which kid will get the last toy? */
  /*******************************************************/

  let kidsToysFn = (kids, toys) => {
    let kidsPos = 1;
    while (toys > 0) {
      if (kidsPos > kids) {
        kidsPos = 1;
      }

      if (toys == 1) {
        console.log('Last kid to get the toy is:', kidsPos);
      }

      toys--;
      kidsPos++;
    }
  };

  // kidsToysFn(3, 11);
}

/*******************************************************/
/* Input = [{"a": "a"}, {"b": "b"}, {"c": "c", "d": "d"}]
	Output = {a: "a", b: "b", c: "c", d: "d"} */
/*******************************************************/
function arrToObj() {
  let input = [{ a: 'a' }, { b: 'b' }, { c: 'c', d: 'd' }];
  let output1 = input.reduce((obj, value) => {
    return {
      ...obj,
      ...value,
    };
  });

  console.log('output1:', output1);
}
// arrToObj();

/******************************************************/
/*  Input : arr = {-1, -1, 6, 1, 9, 3, 2, -1, 4, -1}  */
/*  Output : [-1, 1, 2, 3, 4, -1, 6, -1, -1, 9] */
/******************************************************/

function arrangeElements() {
  //let inputArr = ["-1", "-1", "6", "1", "9", "3", "2", "-1", "4", "-1"];
  let inputArr = [-1, -1, 6, 1, 9, 3, 2, -1, 4, -1];
  let outputArr = [];
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr.includes(i)) {
      outputArr.push(i);
    } else {
      outputArr.push(-1);
    }
  }

  console.log('outputArr:', outputArr);
}

// arrangeElements();

/******************************************************/
/*  Input : arr = [2, 3, 1, 5, 6, 9, 8, 10, 32, 54, 44, 34, 24, 54]  */
/*  Output : [1, 2, 3, 5, 6, 8, 9, 10, 24, 32, 34, 44, 54, 54] */
/******************************************************/

function sortSingleDimentionsArray(arr) {
  function sortArr(a, b) {
    return a - b;
  }

  arr.sort(sortArr);
  console.log(arr);
}

let arr = [2, 3, 1, 5, 6, 9, 8, 10, 32, 54, 44, 34, 24, 54];
// sortSingleDimentionsArray(arr);

/*************************/
/*  Sort Array of Object */
/*************************/

function sortArrayOfObjects(arrOfObj) {
  function sortArr(a, b) {
    return a.id - b.id;
  }
  arrOfObj.sort(sortArr);
  console.log(JSON.stringify(arrOfObj));
}

let arrOfObj = [
  {
    id: 1,
    name: 'pqr',
  },
  {
    id: 3,
    name: 'abc',
  },
  {
    id: 2,
    name: 'xyz',
  },
];

// sortArrayOfObjects(arrOfObj);

var str = '{123}'; // T
var str = '{123}}'; // F
var str = '{{1}23}'; // T
var str = '}123{'; // F
var str = '{123}}{'; //F
var str = '123'; //T
var str = '{123}}{'; // F
var str = '12{34}5'; // T

function stringBalance(str) {
  //console.log(str.match(new RegExp("{", "g")) || []).length));
  //console.log(("str1,str2,str3,str4".match(new RegExp("str", "g")) || []).length);
  //console.log((str.match(new RegExp("{", "g")) || []).length);
  let firstCount = (str.match(new RegExp('{', 'g')) || []).length;
  let secondCount = (str.match(new RegExp('}', 'g')) || []).length;
  console.log(str.indexOf('{'));
  console.log(firstCount);
  if (firstCount === secondCount) {
    console.log('String is balanced');
  } else {
    console.log('String is not balanced');
  }
}

// stringBalance('}123{');

/******************************************************/
/*  Input : Is string 'nitin' is Palindrom  */
/*  Output :  */
/******************************************************/

function isPalindrom(str) {
  let msg = `${str} is isPalindrom`;
  let strLength = str.length;
  let strLengthHalf = strLength / 2;

  for (let i = 0; i < strLength / 2; i++) {
    if (str[i] !== str[strLength - i - 1]) {
      msg = `${str} is not isPalindrom`;
      break;
    }
  }
  return msg;
}

function isPalindrom2(str) {
  const firstArr = str.split('');
  const strArr = str.split('');
  strArr.reverse();

  if (str === str.split('').reverse().join('')) {
    return `${str} is palidrom`;
  } else {
    return `${str} is not palindrom`;
  }
}

// console.log(isPalindrom('1nitin1'))
// console.log(isPalindrom2('cbsbbdbc'))

/******************************************************/
/*  Input : Balance String program  */
/*  Output :  */
/******************************************************/

function balaceStringProgram() {
  function isStringBalanced(str) {
    function getAllIndexOf(arr, str) {
      let index = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === str) {
          index.push(i);
        }
      }
      return index;
    }

    let isStringBalanced = false;
    let indexOfOpenBrace = getAllIndexOf(str, '{');
    let indexOfCloseBrace = getAllIndexOf(str, '}');

    if (indexOfOpenBrace.length === indexOfCloseBrace.length) {
      for (let i = 0; i < indexOfOpenBrace.length; i++) {
        if (indexOfOpenBrace[i] < indexOfCloseBrace[i]) {
          isStringBalanced = true;
        } else {
          isStringBalanced = false;
          break;
        }
      }
    } else {
      isStringBalanced = false;
    }

    return isStringBalanced;
  }

  var str = '{123}'; // T
  var str = '{123}}'; // F
  //var str = '{{1}23}'; // T
  //var str = '}123{'; // F
  //var str = '{123}}{'; //F
  //var str = '123'; //T
  //var str = '{123}}{'; // F
  //var str = '12{34}5'; // T

  if (isStringBalanced(str)) {
    console.log(`${str} is balanced string`);
  } else {
    console.log(`${str} is not balanced string`);
  }
}

//balaceStringProgram();

/******************************************************/
/*  Input : Is number prime  */
/*  Output :  */
/******************************************************/

function primeNumberProgram() {
  function isNumberPrime(num) {
    let sqrt = Math.sqrt(num);

    for (let i = 2; i <= sqrt; i++) {
      if (num % i === 0) {
        return false;
      }
    }

    return num > 1;
  }
  console.log(isNumberPrime(7));
}

// primeNumberProgram();
