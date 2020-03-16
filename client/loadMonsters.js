const loadMonsters = async () => {
  const response = await window.fetch("/api/monsters");
  const monsters = await response.json();
  console.log("MONSTERS AFTER GET", monsters);
  return monsters;
};

module.exports = loadMonsters;
