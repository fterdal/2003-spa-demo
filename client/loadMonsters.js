// const axios = require("axios");

const loadMonsters = async () => {
  const response = await window.fetch("/api/monsters");
  const monsters = await response.json();
  // console.log("response", response);
  console.log("monsters", monsters);
  return monsters;
};

export default loadMonsters;
