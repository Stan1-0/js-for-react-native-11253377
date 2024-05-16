function processArray(numbers) {
  return numbers.map((number) =>
    //checking if number is odd or even
    //if even, number is squared
    //if odd, number is tripled
    number % 2 === 0 ? number * number : number * 3
  );
}

//Test code
/*
const input = [1, 3, 4, 8, 10];
let result = processArray(input);
console.log(result); //Output: [3, 9, 16, 64, 100]
*/
