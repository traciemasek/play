//Write a function fib() that takes an integer n and returns the nth Fibonacci number


//this classic recursive method works fine but is O(2^n), which is exponential time and Not Good, Bob (see Binary Tree)
// function fib(n) {
//   //can't have a negative Fibonacci number
//   if (n < 0) {
//     throw new Error(
//       'Index was negative. No such thing as a negative index in a series.');
//   }

//   //establish base case
//   if(n === 0 || n === 1) {return n}

//   console.log(`computing fib(${n})`);
//   //recursive case
//   return fib(n - 1) + fib(n - 2)
// }

// fib(5)

//wrap in a class to add memoization

class Fibber {
  constructor(){
    this.memo = {}
  }

  fib(n) {

    if (n < 0) {
      throw new Error(
        'Index was negative. No such thing as a negative index in a series.');
    }
  
    //establish base case
    if(n === 0 || n === 1) {return n}

    //see if we've already calculated this
    if (this.memo.hasOwnProperty(n)) {
      console.log(`grabbing memo[${n}]`);
      return this.memo[n]
    }
  
    console.log(`computing fib(${n})`);
    //recursive case
    const result = this.fib(n - 1) + this.fib(n - 2)

    //Memoize
    this.memo[n] = result

    return result;
  }

}

new Fibber().fib(5)