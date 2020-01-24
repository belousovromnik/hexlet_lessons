const fs = require('fs');
const async = require('async');

const unionFiles = (file1path, file2path, output, cb) => {
  async.waterfall(
    [
      function readFile1(cbAsync) {
        //первая функция в цепочке
        fs.readFile(file1path, 'utf-8', (error1, data1) => {
          cbAsync(error1, data1);
        });
      },
      function readFile2(data1, cbAsync) {
        //вторая функция в цепочке
        fs.readFile(file2path, 'utf-8', (error1, data2) => {
          cbAsync(error1, data1, data2); //результат 'three'
        });
      },
      function writeFile(data1, data2, cbAsync) {
        fs.writeFile(output, `${data1}${data2}`, error3 => {
          cbAsync(error3);
        });
      }
    ],
    function(err) {
      cb(err);
    }
  );
};

file1path = 'C:\\Work\\test\\JS Асинхронное программирование\\test1.txt';
file2path = 'C:\\Work\\test\\JS Асинхронное программирование\\test2.txt';
file3path = 'C:\\Work\\test\\JS Асинхронное программирование\\test322.txt';

unionFiles(file1path, file2path, file3path, err => {
  console.log(err);
});

//  решение учителя
export const unionFiles = (inputPath1, inputPath2, outputPath, cb) => {
  waterfall(
    [
      callback => fs.readFile(inputPath1, callback),
      (data1, callback) =>
        fs.readFile(inputPath2, (err, data2) => callback(err, data1, data2)),
      (data1, data2, callback) =>
        fs.writeFile(outputPath, `${data1}${data2}`, callback)
    ],
    cb
  );
};
