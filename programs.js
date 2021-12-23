export function programsFn() {
  console.log('In Programs JS');

  /********************************/
  /**** Factorial of a number *****/
  /********************************/
  function factorial(num) {
    let number = num;
    let factorialNumber = 1;
    if (num < 0) {
      return 'Invalid number';
    } else if (num === 0) {
      return 1;
    } else {
      while (number > 0) {
        factorialNumber *= number--;
      }
    }
    return factorialNumber;
    // console.log('factorial of:', num, ' is:', factorialNumber);
  }
  factorial(5);

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
}
