const loadMonsters = require("./loadMonsters");
const { formatDollars } = require("./utils");

const monsterContainer = document.getElementById("monster-container");

async function renderMonsters() {
  const monsters = await loadMonsters();

  monsterContainer.innerHTML = "";

  monsters.forEach(monster => {
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
}

renderMonsters();
