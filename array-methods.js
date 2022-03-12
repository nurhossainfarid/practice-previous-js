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

// show-map
const clickMap = products.map(product => product.name)
document.getElementById('map-button').addEventListener('click', () => {
    const div = document.getElementById('show-map');
    const h3 = document.createElement('h3');
    h3.innerText = `Brand-Name: ${ clickMap}`;
    div.appendChild(h3);
})

// show-foreach
document.getElementById('foreach-button').addEventListener('click', () => {
    const div = document.getElementById('show-foreach');
    const h5 = document.createElement('h5');
    products.forEach(product => h5.innerHTML = `${product.color}`);
    div.appendChild(h5);
})

// show-filter 
const clickFilter = products.filter(product => product.price >= 5000);
document.getElementById('filter-button').addEventListener('click', () => {
    const div = document.getElementById('show-filter');
    const h4 = document.createElement('h4');
    h4.innerText = `Product-price: ${ clickFilter.map(productPrice => productPrice.price)}`;
    div.appendChild(h4);
})

// show-find
const clickFind = products.find(product => product.price >= 5000);
document.getElementById('find-button').addEventListener('click', () => {
    const div = document.getElementById('show-find');
    const h4 = document.createElement('h4');
    h4.innerText = `Product-price: ${ clickFilter[0].price}`;
    div.appendChild(h4);
})