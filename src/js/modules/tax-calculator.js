export default const taxCalculator(price, tax) => {
  return Math.round(price * tax);
}
