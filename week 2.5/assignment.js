
const fs = require('fs');

function promisifiedReadFile(path) {
        // return a promise that resolves after the file is read
        return new Promise((resolve, reject) => {
            // read the file from the given path
            fs.readFile(path, 'utf8', (error, data) => {
                // if file is read then show data
                if (!error) {
                    resolve(data);
                } else {
                    // if file read fails show error
                    reject(error);
                } 
            });
        }
    );
}

const a =promisifiedReadFile('week2.5/a.txt')
a.then((data) => console.log(data))
a.catch((error) => console.log(error));