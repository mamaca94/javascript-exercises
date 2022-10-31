"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  startMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thusday: {
      open: 12,
      close: 22,
    },
    friday: {
      open: 11,
      close: 23,
    },
    saturday: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.startMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      this.startMenu[starterIndex],
      this.mainMenu[mainIndex],
      address,
      time
    );
  },
};

const menu = [...restaurant.startMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

console.log(restaurant.openingHours.fri?.open);

const days = [
  "monday",
  "tuesday",
  "wednesday",
  "thusday",
  "friday",
  "saturday",
  "sunday",
];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`on ${day}, we open at ${open}`);
}

// optional chaining on Methods

console.log(restaurant.order?.(0, 1) ?? "Method does not exist");

console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");

// arrays

const users = [{ name: "Jonas", email: "hello@jonas.io" }];

console.log(users[0]?.name ?? "users array empty");

// //////////////////////
// Property names from object

const properties = Object.keys(restaurant.openingHours);
console.log(properties);

let openStr = ``;

for (const day of properties) {
  console.log(`We are open ${properties.length} days a week: ${day}`);
}

// Property values

const values = Object.values(restaurant.openingHours);
console.log(values);

// entire object

const entries = Object.entries(restaurant.openingHours);
console.log(entries);

for (let [key, { open, close }] of entries) {
  open !== 0
    ? console.log(`on ${key} we open at ${open} and close at ${close}`)
    : console.log(`On ${key} we are open 24 hours`);
}
