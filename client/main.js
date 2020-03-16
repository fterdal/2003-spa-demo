const React = require("react")

const initialMonsters = require("./monsterData");
const { formatDollars } = require("./utils");

const monsterContainer = document.getElementById("monster-container");

initialMonsters.forEach(monster => {
  console.log("HELLO MONSTERS");
  const monsterBox = document.createElement("DIV");
  monsterBox.classList.add("monster-box");
  if (monster.inCart) {
    monsterBox.classList.add("in-cart");
  }
  monsterBox.innerHTML = `
    <h2>${monster.name}</h2>
    <img src="https://robohash.org/${monster.name}?set=set2">
    <div>${formatDollars(monster.priceInCents)} / hour</div>
  `;
  monsterContainer.appendChild(monsterBox);
});
