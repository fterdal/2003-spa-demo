const createMonster = async newMonster => {
  const { name, priceInCents } = newMonster;
  const response = await window.fetch("/api/monsters", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, priceInCents })
  });
  console.log("RESPONSE AFTER POST", response)
};

module.exports = createMonster;
