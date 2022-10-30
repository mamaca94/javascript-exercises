const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  startMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  orderPasta: function (ing1, ing2, ing3) {
    return `Here's your delicious pasta with ${ing1}, ${ing2}, ${ing3}`;
  },

  orderPizza: function () {},
};

// ****** DESTRUCTURING ****** \\

const arr = [6, 7, 8];
const newArr = [1, 2, ...arr];
console.log(newArr);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];

// join array
const menu = [...restaurant.mainMenu, ...restaurant.startMenu];
console.log(menu);

const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt("Ingredient 2?"),
  // prompt("Ingredient 3?"),
];

console.log(ingredients);
restaurant.orderPasta(...ingredients);

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
console.log(restaurant.name);
console.log(restaurantCopy.name);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.startMenu,
];

console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// ****** Functions ****** \\

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 4);
add(23, 11, 5, 7);
add(22, 33, 44, 55, 1, 2, 3, 4);

const x = [23, 5, 7];
add(...x);
