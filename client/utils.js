export const formatDollars = cents => {
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
};

export const sayHello = () => {
  console.log("HELLO!")
}

function majorGreeting() {
  console.log("HELLO from majorGreeting!")
}

export default majorGreeting;
