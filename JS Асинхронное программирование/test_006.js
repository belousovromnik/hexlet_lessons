const fs = require('fs');
const async = require('async');

const unionFiles_old = (inputPath1, inputPath2, outputPath, cb) => {
  fs.readFile(inputPath1, 'utf-8', (error1, data1) => {
    if (error1) {
      cb(error1);
      return;
    }
    fs.readFile(inputPath2, 'utf-8', (error2, data2) => {
      if (error2) {
        cb(error2);
        return;
      }
      fs.writeFile(outputPath, `${data1}${data2}`, (error3) => {
        if (error3) {
          cb(error3);
          return;
        }
        cb(null); // не забываем последний успешный вызов
      });
    });
  });
}

const unionFiles = (inputPath1, inputPath2, outputPath, cb) => {
  let dataFile1 = '';
  let dataFile2 = '';

  async.waterfall([
    function(callback) {
      callback(null, 'one', 'two');
    },
  ], function (err, result) {
    // fs.writeFile(outputPath, `${dataFile1}${dataFile2}`, (error3) => {
    //   console.log(data1)
    // });
    console.log(err)
  });
}

file1path = 'C:\\Work\\test\\JS Асинхронное программирование\\test1.txt';
file2path = 'C:\\Work\\test\\JS Асинхронное программирование\\test2.txt';
file3path = 'C:\\Work\\test\\JS Асинхронное программирование\\test3.txt';
unionFiles(file1path, file2path, file3path, () => console.log('123'));
