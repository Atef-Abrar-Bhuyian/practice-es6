const numbers = [33, 50, 79, 90, 101, 30];

const divisibleBy10 = numbers.filter(n => n % 10 === 0);
console.log(divisibleBy10);


const divisibleBy10_2 = numbers.find(n => n % 10 === 0);
console.log(divisibleBy10_2);