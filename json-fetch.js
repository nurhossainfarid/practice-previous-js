// 1) json 
const student = {
    name: 'Nur Hossain Farid',
    age: 20,
    favoriteNumber: [89, 49, 74, 92, 30],
    friends: ['sabbir', 'salman', 'tarquk', 'akib', 'alamin'],
};
const stringify = JSON.stringify(student);
console.log(stringify); // JSON notation
const convertJSObject = JSON.parse(stringify);
console.log(convertJSObject);

// 2) fetch()
const url = '';
// fetch(url)
//     .then(res => res.json())
//     .then(data => console.log(data))


// key, value
const keys = Object.keys(student);
const value = Object.values(student);
console.log(keys, value);

// add or remove from an array
const products = [{
    name: 'samsungM21',
    price: 21000,
    color: 'Blue',
    id: '9'
},
{
    name: 'laptop',
    price: 89000,
    color: 'Black',
    id: '47'
},
{
    name: 'Blue card glass',
    price: 700,
    color: 'BlackRed',
    id: '74'
},
{
    name: 'Watch',
    price: 7000,
    color: 'GrayWhite',
    id: '93'
},
];

const newProduct = { name: 'webcam', price: 700, brand: 'Lal' }

// copy products array and then add newProduct
const newProducts = [...products, newProduct];
console.log(newProducts);

// create a new array without one specific item
// remove phone means create a new array without the phone
const remaining = products.filter(product => product.name !== 'phone');
console.log(remaining);