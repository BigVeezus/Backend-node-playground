const mongoose = require("mongoose");

const Product = require("./models/product");

mongoose
  .connect("mongodb://localhost:27017/farmStand2")
  .then(() => {
    console.log("Mongoose Connected!");
  })
  .catch((err) => {
    console.log("Mongoose didnt connect", err);
  });

// const p = new Product({
//   name: "grapefruit",
//   price: 1.99,
//   category: "fruit",
// });
// p.save()
//   .then((p) => {
//     console.log(p);
//   })
//   .catch((err) => {
//     console.log("Data wasnt saved!", err);
//   });
const seedProducts = [
  {
    name: "Chocolate milk",
    price: 500,
    category: "dairy",
  },
  {
    name: "Organic Celery",
    price: 650,
    category: "vegetable",
  },
  {
    name: "Eggplant",
    price: 100,
    category: "vegetable",
  },
  {
    name: "Apples",
    price: 200,
    category: "fruit",
  },
];

Product.insertMany(seedProducts)
  .then((res) => {
    console.log("Updated new items!!", res);
  })
  .catch((err) => {
    console.log("Failed to update items!", err);
  });
