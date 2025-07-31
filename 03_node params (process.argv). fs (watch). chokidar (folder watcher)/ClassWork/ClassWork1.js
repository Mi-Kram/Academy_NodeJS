// npm i glob

const fs = require('fs');
const glob = require('glob');

class MyFolderClass{
    constructor() { }
    
    get Path(){
        return this.path;
    } 
    set Path(val){
        this.path = val;
    } 
    
    get Mask(){
        return this.mask;
    } 
    set Mask(val){
        this.mask = val;
    }

    get Files(){
        return this.files;
    }
    set Files(val){
        this.files = val;
    }

    get MinLength(){
        return this.minLength;
    }
    set MinLength(val){
        this.minLength = val;
    }

    get MaxLength(){
        return this.maxLength;
    }
    set MaxLength(val){
        this.maxLength = val;
    }

    Read(){
        this.files = this.ReadRecursive(this.path);
    }

    ReadRecursive(path){
        let files = [];
        var dirs = this.GetFolders(path);

        dirs.forEach(dir => {
            files = [...files, ...this.ReadRecursive(dir)];
        });
        
        let fileList = glob.sync(path + '/' + this.mask);
        fileList = this.FilterFiles(fileList);

        files = [...files, ...fileList];
        return files;
    }

    FilterFiles(files){
        let minLength = this.minLength;
        let maxLength = this.maxLength;

        if(minLength){
            files = files.filter(x => fs.statSync(x).size > minLength);
        }
        if(maxLength){
            files = files.filter(x => fs.statSync(x).size < maxLength);
        }

        return files;
    }

    GetFolders(path){
        return fs.readdirSync(path, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory())
            .map(dirent => path + '/' + dirent.name);
    }

    Show(){
        this.files.forEach(x => {
            console.log(`${(fs.statSync(x).size + ':').padEnd(6)} ${x}`);
        });        
    }
}


var folder = new MyFolderClass();

folder.Path = 'C:/Users/Михаил/Desktop';
folder.Mask = '*.js';

folder.MinLength = 0;
folder.MaxLength = 1024;

folder.Read();
folder.Show();

