var Promise = require('promise');
var readFile = Promise.denodeify(require('fs').readFile);
var writeFile = Promise.denodeify(require('fs').writeFile);
var access = Promise.denodeify(require('fs').access);

filepath = 'C:\\Work\\test\\JS Асинхронное программирование\\test511.txt';

const content = 'one\ntwo';
// writeFile(filepath, content)

access(filepath)
  .then(() => {
    console.log('файл есть');
  })
  .catch(е => {
    console.log('файла нет');
  })
  .then(() => {
    writeFile(filepath, content);
  })
  .catch(е => {
    throw e;
  });
