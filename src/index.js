module.exports = function reverse(number) {
  const stringifiedNumber = String(Math.abs(number));
  const result = stringifiedNumber.split('').reverse().join('');
  return Number(result);
};
