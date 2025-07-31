// npm i recursive-readdir-sync
// npm i colors

var fs = require('fs')
var recursiveSync = require('recursive-readdir-sync')
const colors = require('colors');

var dirPath = './Test';
var files = [];
var tmpFiles = recursiveSync(dirPath);

tmpFiles.forEach(file => {
    var data = fs.readFileSync(file, {encoding:'utf8', flag:'r'});
    files.push({
        path: file,
        data: data
    })
});


var timer = setInterval(() => {
    tmpFiles = recursiveSync(dirPath);
    var myFiles = files.map(x => x.path);

    var intersected = myFiles.filter(x => tmpFiles.includes(x));
    var created = tmpFiles.filter(x => !myFiles.includes(x));
    var removed = myFiles.filter(x => !tmpFiles.includes(x));
    var changed = [];

    intersected.forEach(file => {
        var _data = fs.readFileSync(file, {encoding:'utf8', flag:'r'});
        var _file = files.filter(x => x.path == file);
        if(_file.length == 1){
            if(_file[0].data != _data){
                changed.push(file);
            }
        }
    });

    files = [];
    tmpFiles.forEach(file => {
        var data = fs.readFileSync(file, {encoding:'utf8', flag:'r'});
        files.push({
            path: file,
            data: data
        })
    });

    removed.forEach(file => {
        console.log(`${new Date(Date.now()).toISOString()}: removed, ${file}`.red);
    });

    created.forEach(file => {
        console.log(`${new Date(Date.now()).toISOString()}: created, ${file}`.green);
    });

    changed.forEach(file => {
        console.log(`${new Date(Date.now()).toISOString()}: changed, ${file}`.magenta);
    });
}, 1000);

