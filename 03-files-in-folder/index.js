const fs = require('fs');
const path = require('path');
const folderPath = '03-files-in-folder/secret-folder';
fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error(`Error reading directory: ${err.message}`);
    return;
  }
  files.forEach((file) => {
    const filePath = path.join(folderPath, file);

    fs.stat(filePath, (err, stats) => {
      if (err) {
        console.error(`Error getting file stats: ${err.message}`);
        return;
      }

      if (stats.isFile()) {
        const fileSizeInKB = stats.size / 1024;
        console.log(
          `${path.parse(file).name} - ${path
            .parse(file)
            .ext.slice(1)} - ${fileSizeInKB.toFixed(3)}kb`,
        );
      } else {
        console.error(`Error: ${file} is a directory. Only files are allowed.`);
      }
    });
  });
});
