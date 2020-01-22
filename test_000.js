
var crc32 = require('crc-32');

const make = () => {
  return []
};
 

const set = (map, key, value) => {
  const hash = crc32.str(key);
  const index = Math.abs(hash) % 1000;
  if (map.hasOwnProperty(index)) {
    if (map[index][0] === key) {
      map[index] = [key, value];
      return true;
    } else {
      return false;
    }
  } else {
    map[index] = [key, value];
  }
};

const get = (map, key, defaultValue = null) => {
  const hash = crc32.str(key);
  const index = Math.abs(hash) % 1000;
  if (map.hasOwnProperty(index)) {
    return map[index][1];
  } else {
    return defaultValue;
  }
};


const map = make();
let result = get(map, 'key');
console.log(result); // => null

result = get(map, 'key', 'value');
console.log(result); // => value

set(map, 'key2', 'value2');
result = get(map, 'key2');
console.log(result); // => value2
