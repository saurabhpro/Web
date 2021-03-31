const Promise = require('bluebird');
const readFile = Promise.promisify(require('fs').readFile);

const fileList = ['file1.txt', 'test/file2.txt', 'file3.txt'];

/**
 * Promise.all is fail fast - all resolved - RESOLVES IT, first error -REJECTS IT
 */
// const promises = fileList.map((filename) => {
//   return readFile(filename);
// });

// Promise.all(promises)
//   .then((contents) => {
//     contents.map((content) => {
//       console.log(content.toString());
//     })
//   })
//  .catch((error) => {
//     console.log("error: " + error.message);
//   });

// Console: error: ENOENT: no such file or directory, open 'file1.txt'


const promises = fileList.map((filename) => {
    return readFile(filename)
        .then((content) => {
            return {
                error: false,
                data: content.toString()
            }
        })
        .catch((error) => {
            return {
                error: true,
                data: error.message
            }
        });
});

Promise.all(promises)
    .then((arrayOfValuesOrErrors) => {
        // handling of array containing values and/or errors.

        // filter which are not successed
        const results = arrayOfValuesOrErrors
            // filter the result for only showing resolved values
            .filter((result) => {
                if (result.error) {
                    console.log(result.data)
                }

                return result.error !== true;
            })
            // use the filtered set and create a map with only its data (cleaing the error properties)
            .map((element) => {
                // just get content
                return element.data;
            });

        // output the result
        console.log(results);
    })
    .catch((error) => {
        // some coding error in handling happened
        console.log("error" + error);
    });