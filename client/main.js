const loadMonsters = require("./loadMonsters");
const createMonster = require("./createMonster");
const { formatDollars } = require("./utils");

const monsterContainer = document.getElementById("monster-container");
const refreshMonstersBtn = document.getElementById("refresh-monsters");
const createMonsterForm = document.getElementById("new-monster-form");

async function renderMonsters() {
  const monsters = await loadMonsters();

  monsterContainer.innerHTML = "";
  monsters.forEach(monster => {
    const monsterBox = document.createElement("DIV");
    monsterBox.classList.add("monster-box");
    monsterBox.innerHTML = `
    <h2>${monster.name}</h2>
    <img src="https://robohash.org/${monster.name}?set=set2">
    <div>${formatDollars(monster.priceInCents)} / hour</div>
    `;
    monsterContainer.appendChild(monsterBox);
  });
}

async function handleFormSubmit(event) {
  event.preventDefault();
  const name = event.target.querySelector('input[name="name"]').value;
  const priceInCents = event.target.querySelector('input[name="price"]').value;
  await createMonster({ name, priceInCents });
}

refreshMonstersBtn.onclick = renderMonsters;
createMonsterForm.onsubmit = handleFormSubmit;

renderMonsters();
