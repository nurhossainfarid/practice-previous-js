const money = 100;
let food;
if (money > 100) {
    food = 'birayni'
} else {
    food= 'cha biscuit'
}
console.log(food);


// short cut of condition if
const food2 = money > 100 ? 'biryani' : 'cha biscuit';
console.log(food2);

// multiple condition 
const food3 = (money > 100 && food === 'birayni') ? 'coke' : 'filter water';
console.log(food3);

// number to string conversion
const num = 47;
const numStr = num + '';
console.log(numStr);

// string to number conversion
const string = '74';
const strNum = +string;
console.log(strNum);

let isActive = false;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');
// use && if the left side is true then right side will be executed
isActive && showUser();
// use || if the left side i8s false then right side will be executed
isActive || showUser();
isActive ? showUser() : hideUser();

// toggle boolean
isActive = !isActive;