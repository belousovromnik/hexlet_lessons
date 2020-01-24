const fs = require('fs');
const async = require('async');
const path = require('path');
var _ = require('lodash');

// const fsStat = (...arg) => {
//   // console.log('********************************************');
//   // console.log(...arg);
//   // fs.stat(...arg);
//   fs.stat(...arg, function(err, stats) {
//     console.log(err);
//     console.log(stats.isDirectory());
//     console.log(stats);
//   });
//   // console.log(...res);
// };

const getDirectorySize = (pathDir, cb) => {
  fs.readdir(pathDir, (error1, files) => {
    if (error1) {
      cb(error1);
      return;
    }
    async.map(
      files.map(x => path.join(pathDir, x)),
      function(oneFile, cb) {
        fs.stat(oneFile, function(err, statsOneFile) {
          if (statsOneFile.isDirectory()) {
            statsOneFile.size = 0;
          }
          cb(null, statsOneFile);
        });
      },
      function(err, results) {
        cb(
          null,
          _.sumBy(results, o => o.size)
        );
      }
    );
  });
};

const pathDir = 'C:\\Work';
getDirectorySize(pathDir, (err, size) => {
  console.log(size);
});

// решение учителя
export const getDirectorySize = (dirpath, cb) => {
  fs.readdir(dirpath, (error1, filenames) => {
    if (error1) {
      cb(error1);
      return;
    }
    const filepaths = filenames.map(name => path.join(dirpath, name));
    async.map(filepaths, fs.stat, (error2, stats) => {
      if (error2) {
        cb(error2);
        return;
      }
      const sum = _.sumBy(
        stats.filter(stat => stat.isFile()),
        'size'
      );
      cb(null, sum);
    });
  });
};
