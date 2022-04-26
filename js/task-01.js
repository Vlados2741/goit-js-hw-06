// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
// const categories = document.querySelectorAll(`.item`);
// const categoryItem = document.querySelectorAll(`h2`);
// const elementsAmount = document.querySelectorAll(`ul`);

const categoryList = document.querySelector('#categories').children;
console.log(`Number of categories: ${categoryList.length}`);
const categories = document.querySelectorAll('.item')
    .forEach((category) => {
        console.log('Category: ' + category.querySelector('h2').textContent),
        console.log('Elements: ' + category.querySelectorAll('li').length);
    });



// console.log(`Number of categories: ${categories.length}`);
// console.log(`Category: ${categoryItem[0].textContent}`);
// console.log(`Elements: ${elementsAmount[1].children.length}`);
// console.log(`Category: ${categoryItem[1].textContent}`);
// console.log(`Elements: ${elementsAmount[2].children.length}`);
// console.log(`Category: ${categoryItem[2].textContent}`);
// console.log(`Elements: ${elementsAmount[3].children.length}`);