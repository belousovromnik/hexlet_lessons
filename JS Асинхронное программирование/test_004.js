const fs = require('fs');
const async = require('async');
const path = require('path');
var _ = require('lodash');

const getDirectorySize = (pathDir, cb) => {
  fs.readdir(pathDir, (error1, files) => {
    if (error1) {
      cb(error1);
      return;
    }
    // console.log(files);
    async.map(files.map((x) => path.join(pathDir, x)), fs.stat, function(err, results) {
      console.log(results.isDirectory());
      console.log(results);
      cb(null, _.sumBy(results, o => o.size));
    });
  });
};

const pathDir = 'C:\\Work';
getDirectorySize(pathDir, (err, size) => {
  console.log(size);
});
