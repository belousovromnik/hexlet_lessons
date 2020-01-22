const fs = require('fs');
const path = require('path');

// const getFileOwners = (dirpath, cb) => {
//   fs.readdir(dirpath, (_error1, filenames) => {
//     const readFileStat = (items, result = []) => {
//       if (items.length === 0) {
//         // Обработку ошибок пока не рассматриваем
//         cb(null, result);
//         return;
//       }
//       const [first, ...rest] = items;
//       const filepath = path.join(dirpath, first);
//       fs.stat(filepath, (_error2, stat) => {
//         readFileStat(rest, [...result, { filename: first, owner: stat.uid }]);
//       });
//     };
//     readFileStat(filenames);
//   });
// };

const PATH_FILE1 = 'C:\\Work\\test\\JS Асинхронное программирование\\test1.txt';
const PATH_FILE2 = 'C:\\Work\\test\\JS Асинхронное программирование\\test2.txt';
const compareFileSizes = (file1, file2, cb) => {
  fs.stat(PATH_FILE1, (err, stats) => {
    file1Size = stats.size;
    fs.stat(PATH_FILE2, (err, stats) => {
      file2Size = stats.size;
      cb(null, Math.sign(file1Size - file2Size));
    });
  });
};

// compareFileSizes(PATH_FILE1, PATH_FILE2);

compareFileSizes('file1', 'file2', (_err, result) => console.log(result));

// const compareFileSizes = (file1, file2, f) => {
//     fs.stat(PATH_FILE1, (err, stats) => {
//         { size:file1Size } = stats;
//         fs.stat(PATH_FILE2, (err, stats) => {
//             file2Size = stats.size;
//             f(err, Math.sign(file1Size - file2Size));
//         });
//         });
//     };
// export default compareFileSizes;
