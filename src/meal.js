function nameMenuItem(food) {
  return "Delicious " + food;
  //var menuItemName = nameMenuItem("Pizza");
  //var burritoItem = nameMenuItem("Burrito");
  //var sushiItem = nameMenuItem("Pizza");
  //var tacoItem = nameMenuItem("Taco");
}

function createMenuItem(name, price, type) {
  var menuItem = {
    name: name,
    price: price,
    type: type,
  };
  return menuItem;
  //var menuItemName = nameMenuItem("French Toast");
  //var menuItem = createMenuItem(menuItemName, 10.99, "breakfast");

}

//pseudocode: I want to use a condtional to prevent repeat food terms from being added
function addIngredients(food, ingredients) {
  if (ingredients.includes(food) == false) {
    ingredients.push(food);
  };
}

function formatPrice(initialPrice) {
  //I need to convert a number data type to a string to include a dollar sign
  return "$" + initialPrice.toString();
}

function decreasePrice(price) {
  return price * .9;
}

function createRecipe(title, ingredients, menuItemType) {
  var newRecipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType,
  };
  return newRecipe;
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
