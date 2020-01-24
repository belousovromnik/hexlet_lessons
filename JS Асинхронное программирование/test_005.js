const fs = require('fs');

const watch = (filepath, interval, cb) => {
  let fileMTimeMsLast = Date.now();
  const id = setInterval(() => {
    fs.stat(filepath, function(err, stats) {
      if (err) {
        clearInterval(id);
        cb(err);
        return id;
      }
      if (stats.mtimeMs > fileMTimeMsLast) {
        fileMTimeMsLast = stats.mtimeMs;
        cb(err);
      }
    });
  }, interval);
  return id;
};

filepath = 'C:\\Work\\test\\JS Асинхронное программирование\\test1.txt';

// const id = watch(filepath, 2000, err => {
//   console.log('Wow!');
// });
// console.log(id);

let count = 0;
const id = watch(filepath, 500, () => {
  count += 1;
});
setTimeout(() => fs.appendFileSync(filepath, 'ehu'), 300);
setTimeout(() => {
  clearInterval(id);
  console.log('count-', count);
}, 1100);
