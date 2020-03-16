const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(morgan("dev"));

app.use(express.static("public"));
app.use(express.json());

const monsters = [
  { id: 1, name: "Maurice", priceInCents: 7999, age: 823, inCart: false },
  { id: 2, name: "Jorrild", priceInCents: 1950, age: 220, inCart: false },
  { id: 3, name: "Frankie", priceInCents: 10890, age: 171, inCart: false },
  { id: 4, name: "Kristy", priceInCents: 8799, age: 142, inCart: false }
];

// GET a list of all monsters
app.get("/api/monsters", (req, res, next) => {
  res.json(monsters);
});

// POST a new monster
app.post("/api/monsters", (req, res, next) => {
  console.log(req.body)
  const { name, priceInCents, age, inCart } = req.body;
  monsters.push({ id: monsters.length + 1, name, priceInCents, age, inCart });
  res.sendStatus(201);
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
