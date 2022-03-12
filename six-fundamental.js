// 1) Variable let and const 
const fatherName = `Sha-alam`;
let season = 'summer';
season = 'rainy';
season = `winter`;


// 2) 6 basic condition >, <, ===, !==, <=, >=
// multiple conditions : &&, ||
if (fatherName === 'Sha-alam' && season === 'rainy') {

} else if (fatherName.length > 10) {

} else {

}

// 3
/* --------------------------------------------------- array --------------------------------------------------*/
const number = [44, 74, 90, 29, 89];

// index 
console.log(number[3]);
number[4] = 98;
console.log(number);

// length 
console.log(number.length);

// indexOf()
console.log(number.indexOf(29));

// typeof()
console.log(typeof (number))

// push()
number.push(44);
console.log(number);

// pop()
number.pop();
console.log(number);

// unshift()
number.unshift(44);
console.log(number)

// shift()
number.shift();
console.log(number);

// slice
console.log(number.slice(0, 3));

// 
console.log(number.splice(0, 2));
console.log(number);


// 4
/* ---------------------------------------------------- Loop ------------------------------------------------ */
for (let i = 0; i < number.length; i++) {
    const numbers = number[i];
    console.log(numbers)
}

// 5
/* -------------------------------------------------- function --------------------------------------------- */
function multiplyNumber(num1, num2, num3) {
    const additional = num1 + num3;
    const subtraction = additional - num2;
    const multiple = additional * subtraction;
    const division = multiple / num1;
    return division;
}
console.log(multiplyNumber(4, 5, 6));

// 6
/* -------------------------------------------------- object ------------------------------------------------ */
const student = {
    name: 'Nur Hossain Farid',
    age: 32,
    professional: 'student',
}
const myVariable = 'age'
console.log(student.age); //direct by property
console.log(student['age']); // access via property name string
console.log(student[myVariable]); // access via property name in a variable
