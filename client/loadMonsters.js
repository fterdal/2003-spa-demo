const loadMonsters = async () => {
  const response = await window.fetch("/api/monsters");
  const monsters = await response.json();
  console.log("monsters", monsters);
  return monsters;
};

module.exports = loadMonsters;
