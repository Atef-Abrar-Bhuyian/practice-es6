const numbers = [1, 3, 5, 7, 9];

const newNumbers = [];
for (let num of numbers) {
  num += 1;
  newNumbers.push(num);
}
console.log(newNumbers);

const newNumbers2 = numbers.map((n) => n + 1);
console.log(newNumbers2);
