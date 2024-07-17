// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(num, exponent) {
  //base case: exponent == 0
  //changing input: exponent

  //take number and multiple it by itself exponent number of times
  if (exponent === 0) {
    return 1;
  }

  return num * power(num, exponent - 1);
}

//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function factorial(n) {
  //base case: n =1
  //changing input: n--

  //multiply n by n-1 until n =1

  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

factorial(1);
factorial(2);
factorial(4);
factorial(7);

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
  //base case: end of the array
  //changing input: The number being multiplied

  if (arr.length === 0) {
    return 1;
  }

  // Recursive case: multiply the first element by the product of the rest of the array
  return arr[0] * productOfArray(arr.slice(1));
}

productOfArray([1, 2, 3]);

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21 // 6+5+4+3+2+1=21
// recursiveRange(10) // 55

function recursiveRange(n) {
  //start from 0 and then add all the numbers between 0 and n

  //basecase: n =1
  //changing input: n

  if (n === 1) {
    //do something
    return 1;
  }

  console.log(`N is: ${n}`);

  return n + recursiveRange(n - 1);
}

recursiveRange(6);

let doubleArr = [];
function recursiveDouble(arr) {
  if (arr.length === 0) {
    return 1;
  }

  // Recursive case: multiply the first element by the product of the rest of the array
  return arr[0] * recursiveDouble(arr.slice(1));
}

recursiveDouble([3, 4, 5]);
