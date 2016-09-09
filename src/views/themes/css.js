let fs = require('fs')

let standard = fs.readFileSync(__dirname + '/standard/css/app.css', 'utf8');

export default {
    standard
}
