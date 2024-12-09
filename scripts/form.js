const products = [
    { id: 'p1', name: 'Product 1' },
    { id: 'p2', name: 'Product 2' },
    { id: 'p3', name: 'Product 3' },
    { id: 'p4', name: 'Product 4' },
];

const productSelect = document.getElementById('productName');
products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

if (localStorage.getItem('reviewCounter') === null) {
    localStorage.setItem('reviewCounter', 0);
}

document.getElementById('reviewForm').addEventListener('submit', () => {
    let counter = parseInt(localStorage.getItem('reviewCounter'));
    localStorage.setItem('reviewCounter', ++counter);
});
