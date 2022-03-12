/* ----------------------------------------------- object destructuring -------------------------------------- */
const student = {
    name: 'Nur Hossain Farid',
    age: 20,
    favoriteNumber: [28, 93, 89, 38, 83],
    friends: ['Sabbir', 'Salman', 'Tareque', 'Rakib', 'Sagor', 'Akib', 'Alamin', 'Shohan', 'Arif'],
    job: 'student',
    specificSkills: {
        study: 'Software Engineering',
        varsity: 'Daffodil International University',
        address: 'Sarkar market, Ashulia, Dhaka',
        knowLanguage: 'HTML, CSS, Javascript',
        follow: {
            html: 'IT Bari and PH',
            css: 'IT Bari and PH',
            js: 'PH and SM Naim and Lear with sumit',
        }
    }
}
const {
    name,
    age
} = student;



console.log(name, age);
const [p, q, r] = student?.favoriteNumber;
console.log(p, q, r);
const [a, b, c, e] = student?.friends;
console.log(a, b, c, e);
const {
    study,
    varsity,
    address
} = student?.specificSkills;
console.log(study, varsity, address);
const {
    js
} = student?.specificSkills?.follow;
console.log(js);



/* --------------------------------------------- array destructuring ----------------------------------------- */
const number = [38, 93, 28, 40, 55];
const [w, x, y, z] = number;
console.log(w, x, y);

const product = ['Mobile', 'Laptop', 'Watch',
    {
        productName: 'botole',
        quantity: '1 half-liter water',
        brand: 'Fresh',
        price: 15,
    },
    'keyboard',
    'mouse',
    {
        oddNumber: [1, 3, 5, 7, 9],
        evenNumber: [2, 4, 6, 8, 10],
    }
];
const [i, k, l] = product;
console.log(i, k, l);
const {
    productName,
    quantity,
    brand,
    price
} = product[3];
console.log(productName, quantity, brand, price);
const [o, d, n] = product[6]?.oddNumber;
console.log(o, d, n);