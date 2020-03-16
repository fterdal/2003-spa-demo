import loadMonsters from "./loadMonsters"
import utils, { formatDollars, sayHello } from "./utils";

console.log(utils.majorGreeting())

const monsterContainer = document.getElementById("monster-container");

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

export default renderMonsters;
