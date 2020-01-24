var Promise = require('promise');
var readFile = Promise.denodeify(require('fs').readFile);
var writeFile = Promise.denodeify(require('fs').writeFile);

// const reverse = (src, dest) => {
//     return promises.readFile(src, 'utf-8')
//       .then((content) => console.log(content));
//   };

file1path = 'C:\\Work\\test\\JS Асинхронное программирование\\test1.txt';
file2path = 'C:\\Work\\test\\JS Асинхронное программирование\\test1212.txt';
// reverse(file1path);

// readFile(file1path, 'utf-8')
//   .then(content =>
//     content
//       .split('\r\n')
//       .reverse()
//       .join('\r\n')
//   )
//   .then(content => writeFile(file1path, content));


const reverseLines = (data) => data.split('\n').reverse().join('\n');
const content = 'one\ntwo';

console.log(reverseLines(content));

filepath = 'C:\\Work\\test\\JS Асинхронное программирование\\test5.txt';
file1path = 'C:\\Work\\test\\JS Асинхронное программирование\\test51.txt';

// writeFile(filepath, content)

// readFile(filepath, 'utf-8')
//   .then(content => writeFile(file1path, content.split('\n').reverse().join('\n')))

// readFile(file1path, 'utf-8')
//   .then(content => console.log(content));


// .then((content) => fs.writeFile(file2path, content.split('\r\n').reverse().join('\r\n')));
