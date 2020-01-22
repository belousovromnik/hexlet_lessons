const fromPairs = arr => {
  const arrToReturn = {};
  for (const [key, value] of arr) {
    arrToReturn[key] = value;
  }
  return arrToReturn;
};

arrToReturn = fromPairs([
  ['cat', 5],
  ['dog', 6],
  ['cat', 11]
]);
console.log(arrToReturn);

arrToReturn = fromPairs([
  ['fred', 30],
  ['barney', 40]
]);
console.log(arrToReturn);
