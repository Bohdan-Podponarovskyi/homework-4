// 1
let numbers = [];

for (let i = 10; i <= 20; i++) {
    numbers.push(i)
}

console.log('1: ' + numbers.join(', '));

// 2
let squares = [];

for (let i = 10; i <= 20; i++) {
    squares.push(`${i}^2 = ${Math.pow(i, 2)}`)
}

console.log('2: ' + squares.join(', '));

// 3
let sevenMultiplicationTable = [];

for (let i = 0; i <= 9; i++) {
    sevenMultiplicationTable.push(`7*${i} = ${7 * i}`)
}

console.log('3: ' + sevenMultiplicationTable.join(', '));

// 4
let sum = 0;

for (let i = 1; i <= 15; i++) {
    sum += i
}

console.log('4: ' + sum);

// 5
let product = 15;

for (let i = 16; i <= 35; i++) {
    product *= i
}

console.log('5: ' + product);

// 6
let averageSum = 0;

for (let i = 1; i <= 500; i++) {
    averageSum += i
}

console.log('6: ' + averageSum / 500);

// 7
let evenNumberSum = 0;

for (let i = 30; i <= 80; i = i + 2) {
    evenNumberSum += i
}

console.log('7: ' + evenNumberSum);

// 8
let numbers_2 = [];

for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        numbers_2.push(i)
    }
}

console.log('8: ' + numbers_2.join(', '));

// 9 - 11
let number = 282;
let numberDividers = [];
let numberEvenDividers = [];
let sumEvenDividers = 0;

for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        numberDividers.push(i)

        if (i % 2 === 0) {
            numberEvenDividers.push(i);
            sumEvenDividers += i;
        }
    }
}

console.log('9: ' + numberDividers.join(', '));
console.log('10: ' + numberEvenDividers.join(', '));
console.log('11: ' + sumEvenDividers);

// 12
let fullMultiplicationTable = [];

for (let i = 0; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
        fullMultiplicationTable.push(`${i}*${j} = ${i * j}`)
    }
}

console.log('12: ' + fullMultiplicationTable.join(', '));