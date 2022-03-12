const student = {
    name: 'Nur Hossain Farid',
    age: 20,
    favoriteNumber: [89, 49, 74, 92, 30],
    friends: ['sabbir', 'salman', 'tarquk', 'akib', 'alamin'],
}

// 01
/* -------------------------------------------------- template string ---------------------------------------- */
console.log(`My name is ${student.name}. I am ${student.age} years old. ${student.favoriteNumber[2]} is my favorite number And ${student.friends[1]} is my bestto`);

// 02
/* ------------------------------------------------ arrow function ---------------------------------------- */
const getFortyFour = () => 44;
console.log(getFortyFour());
const addNinetySeven = num => num + 97;
console.log(addNinetySeven(4));
const isEven = x => x % 2 === 0;
console.log(isEven(4));
const doMath = (num1, num2, num3) => {
    const sum = num1 + num2;
    const subtraction = num3 - num2;
    const multiplication = sum * subtraction;
    return multiplication;
}
console.log(doMath(4, 7, 9));

// 03
/* ---------------------------------------------------- spread operator ------------------------------------- */
const number = [44, 92, 39, 84, 94]
const newNumbers = [...number];
console.log(newNumbers); 

number.push(74, 47);
console.log(number);

// current array = previous array + new element
const currentNumbers = [...number,9, 28, 80];
console.log(currentNumbers);

