// npm i chokidar

var fs = require('fs');
var path = require('path');
var chokidar = require('chokidar');

var dirPath = './Test';

var watcher = chokidar.watch(dirPath, {ignored: /^\./, persistent: true});

watcher
  .on('add', function(path) {console.log(`${new Date(Date.now()).toISOString()}: creation, ${path}`);})
  .on('change', function(path) {console.log(`${new Date(Date.now()).toISOString()}: change, ${path}`);})
  .on('unlink', function(path) {console.log(`${new Date(Date.now()).toISOString()}: remove, ${path}`);})
  .on('error', function(error) {console.error('Error happened' + error);})
