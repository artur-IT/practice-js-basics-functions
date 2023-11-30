let result = (i = 0);

sumTo = (number) => {
  while (i <= number) {
    result += i;
    i++;
  }
  return result;
};

console.log(sumTo(4));
