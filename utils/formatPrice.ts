const formatPrice = (amount: number) => {
  return new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};
export default formatPrice;
