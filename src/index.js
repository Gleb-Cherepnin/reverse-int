module.exports = function reverse(n) {
  const absoluteNumber = Math.abs(n);

  let str = absoluteNumber.toString();

  str = str.split('').reverse().join('');

  const num = Number(str);

  return num;
};
