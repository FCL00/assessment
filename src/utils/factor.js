
import * as math from 'mathjs';

const calcFactorial = (n) => {
  return math.factorial(n).toString();
};

export default calcFactorial;


// this code cannot handle big number and simply crash

// const calcFatorial = (num) => {
//     if (num === 0 || num === 1) // check if the number is zero or one if so return 1
//         return 1;
//     let result = 1; // initialize the multiplier and starts at 1.
//     loop from 1 until to the give number
//     for (let i = 1; i <= num; i++) {
//       result *= i; // mutiply the current result by the loop index
//     }
//     return result; // return the factorial
//   };
// export default calcFactorial;