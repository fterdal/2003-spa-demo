const formatDollars = cents => {
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
};

module.exports = {
  formatDollars
}
