const fs = require('fs');
const path = require('path');


async function createDir(path, dirname) {
    if (!fs.existsSync(`${path}${dirname}`)) {
        fs.mkdirSync(`${path}${dirname}`)
    }
}