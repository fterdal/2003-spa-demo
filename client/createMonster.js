// const loadMonsters = require("./loadMonsters");
import renderMonsters from "./renderMonsters";

const createMonster = async newMonster => {
  const response = await window.fetch("/api/monsters", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newMonster) // Serializing newMonster
  });
  console.log("response:", response);
  await renderMonsters();
};

export default createMonster;
