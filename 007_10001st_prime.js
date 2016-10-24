// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10001st prime number?


function findPrime(num){
  let prime = 0;
  let tally = 0;
  let current = 2;
    while (tally <= num){
    for (let i=current-1; i >= 1; i--){
      if (i == 1){
        prime = current;
        tally++;
        current++;
        break;
      } else if (current%i == 0){
        current++;
        break;
      } else {
        continue;
      }
    }
  }
  return prime;
}

console.log(findPrime(8))
