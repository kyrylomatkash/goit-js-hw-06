const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const allIngredients = document.querySelector("#ingredients");

const ingredientElements = ingredients.map((ingredient) => {
  const createIngredientElement = document.createElement("li");
  createIngredientElement.textContent = ingredient;
  createIngredientElement.classList.add("item");

  return createIngredientElement;
});

allIngredients.append(...ingredientElements);
