const fs = require('fs');

 module.exports.ls = () => {
   fs.readdir('./', (err, files) => {
     const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(filesToString);
   });
 };

 module.exports.touch = () => {
   // your code here
   fs.writeFileSync('touch_file_example.js')
 };

 module.exports.mkdir = () => {
  // your code here
  fs.mkdirSync('mkdir_example',[0o777])
};
