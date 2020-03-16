import createMonster from "./createMonster";
import renderMonsters from "./renderMonsters";

const refreshMonstersBtn = document.getElementById("refresh-monsters");
const createMonsterForm = document.getElementById("new-monster-form");

renderMonsters();
async function handleFormSubmit(event) {
  event.preventDefault();
  const name = event.target.querySelector('input[name="name"]').value;
  const priceInCents = event.target.querySelector('input[name="price"]').value;
  await createMonster({ name, priceInCents });
}

refreshMonstersBtn.onclick = renderMonsters;
createMonsterForm.onsubmit = handleFormSubmit;
