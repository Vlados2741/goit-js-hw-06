// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsItems = ingredients.map(ingredient => {
  const ingredientItem = document.createElement(`li`);
  ingredientItem.textContent = ingredient;
  ingredientItem.classList.add(`item`);
  return ingredientItem;
});
  const ingredientsList = document.querySelector(`#ingredients`)
  ingredientsList.append(...ingredientsItems);



