const invertCase = str => {
  let strRet = '';
  for (let i = 0; i < str.length; i += 1) {
    const letter = str[i];
    if (letter === letter.toUpperCase()) {
      strRet += letter.toLowerCase();
    } else {
      strRet += letter.toUpperCase();
    }
  }
  return strRet;
};

console.log(invertCase('Hello, World!')); // hELLO, wORLD!
console.log(invertCase('I loVe JS')); // i LOvE js
