var fs = require('fs');
var path = require('path');

var dir = 'src/assets/yasemin/works/assos';

function fileList(dir) {
    return fs.readdirSync(dir).reduce(function (list, file) {
        var name = path.join(dir, file);
        var isDir = fs.statSync(name).isDirectory();

        let fileName = name.replace(dir, '').replace('/', '')
        let keywordName = fileName.replace('.png', '').replace('.jpg', '');
        // let str = '{ \"name\": \"' + keywordName + '\", \"src\": \"' + fileName + '\", \"type\": \"\" },'

        let str = '{ \"src\": \"' + fileName + '\", \"class\": \"middle\" },'

        if (fileName.substr(0, 1) !== '.')
            console.log(str)

        return list.concat(isDir ? fileList(name) : [name]);
    }, []);
}



// 2. List all file names in DIR
fileList(dir).map((file) => file.split(path.sep).slice(-1)[0]);
// => ['babel', 'bower', ...]