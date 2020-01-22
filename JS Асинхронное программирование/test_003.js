const fs = require('fs');
const path = require('path');

const PATH_FILE1 = 'C:\\Work\\test\\JS Асинхронное программирование\\test1.txt';
const PATH_FILE2 =
  'C:\\Work\\test\\JS Асинхронное программирование\\test11.txt';

export const move = (pathFile1, pathFile2, cb) => {
  fs.readFile(pathFile1, 'utf-8', (error1, data) => {
    if (error1) {
      cb(error1);
      return;
    }
    fs.writeFile(pathFile2, data, error2 => {
      if (error2) {
        cb(error2);
        return;
      }
      fs.unlink(pathFile1, error3 => {
        cb(error3);
      });
    });
  });
};

move(PATH_FILE1, PATH_FILE2, error => {
  if (error) {
    console.log('oops');
    return;
  }
  console.log('yes!');
});
