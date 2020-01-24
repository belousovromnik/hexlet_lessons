const fs = require('fs');
const async = require('async');
var Promise = require('promise');
var readFile = Promise.denodeify(require('fs').readFile);
var writeFile = Promise.denodeify(require('fs').writeFile);
var access = Promise.denodeify(require('fs').access);


file1path = 'C:\\Work\\test\\JS Асинхронное программирование\\test1.txt';
file2path = 'C:\\Work\\test\\JS Асинхронное программирование\\test2.txt';
file3path = 'C:\\Work\\test\\JS Асинхронное программирование\\test322.txt';

readFile(file1path, 'utf-8')
    .then((content) => console.log('1-', content))
    .then(() => readFile(file2path, 'utf-8'))
    .then((content) => console.log('2-', content))
