const ul = document.body.appendChild(document.createElement('ul'));

const catalog = [
  {
    category: 'Sporting Goods',
    price: '$49.99',
    stocked: true,
    name: 'Football',
  },
  {
    category: 'Sporting Goods',
    price: '$9.99',
    stocked: true,
    name: 'Baseball',
  },
  {
    category: 'Sporting Goods',
    price: '$29.99',
    stocked: false,
    name: 'Basketball',
  },
  {
    category: 'Electronics',
    price: '$99.99',
    stocked: true,
    name: 'iPod Touch',
  },
  {
    category: 'Electronics',
    price: '$399.99',
    stocked: false,
    name: 'iPhone 5',
  },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
];
let maxPrice = null;

document.querySelector('input').addEventListener('keyup', event => {
  maxPrice = event.target.value;
  console.log(maxPrice);
});

function filterCatalog(catalogItems) {
  return catalogItems.filter(({ price }) => price.slice(1) <= maxPrice);
}
const filterResult = filterCatalog(catalog);
