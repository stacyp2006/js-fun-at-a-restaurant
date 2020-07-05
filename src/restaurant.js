function createRestaurant(name) {
    var obj1 = {
      name: name,
      menus: {
        breakfast: [],
        lunch: [],
        dinner: [],
      }
    };
    return obj1;
}

function addMenuItem(restaurant, menuItem) {
  var menuType = menuItem.type;
  var menuArray = restaurant.menus[menuType];
  if (menuArray.includes(menuItem) == false) {
    menuArray.push(menuItem);
  };
}

function removeMenuItem(restaurant, menuItem, menuType) {
  if (menuType === "breakfast") {
    restaurant.menus.breakfast.pop();
    return `No one is eating our ${menuItem} - it has been removed from the ${menuType} menu!`;
  }else if (menuType === "dinner") {
    restaurant.menus.dinner.pop();
    return `No one is eating our ${menuItem} - it has been removed from the ${menuType} menu!`;
  }else if (menuItem.includes(menuItem) == true) {
    return `Sorry, we don't sell ${menuItem}, try adding a new recipe!`;
  }else {

  }
};


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
