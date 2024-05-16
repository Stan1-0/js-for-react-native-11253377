function processArray(numbers) {
  return numbers.map((number) =>
    //checking if number is odd or even
    //if even, number is squared
    //if odd, number is tripled
    number % 2 === 0 ? number * number : number * 3
  );
}

function formatArrayStrings(strings, processedNumbers) {
  return strings.map((str, index) => {
    if (processedNumbers[index] % 2 == 0) {
      return str.toUpperCase();
    } else {
      return str.toLowerCase();
    }
  });
}

/*Test code for processArray
const input = [1, 3, 4, 8, 10];
console.log(processArray(input)); //Output: [3, 9, 16, 64, 100]
 */

/*Test code for formatArrayStrings
 const strings = ["hello", "world", "example", "array"];
const numbers = [1, 3, 4, 8,];
const processedNumbers = processArray(numbers);
console.log(formatArrayStrings(strings, processedNumbers));
 */