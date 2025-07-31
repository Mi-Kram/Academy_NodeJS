var fs = require('fs');

var watcher = fs.watch('.', { encoding: 'utf8', recursive: true });

watcher.on('change', (event, filename) => {
    console.log(event);
    console.log(filename);
});
