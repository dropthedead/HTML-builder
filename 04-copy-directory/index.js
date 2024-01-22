const fs = require('fs');
const path = require('path');

const sourceFolderPath = '04-copy-directory/files';
const destinationFolderPath = '04-copy-directory/files-copy';

const copyDir = async (source, destination) => {
  try {
    if (!fs.existsSync(destination)) {
      fs.mkdirSync(destination);
    }

    const files = await fs.promises.readdir(source);

    for (const file of files) {
      const sourceFilePath = path.join(source, file);
      const destinationFilePath = path.join(destination, file);

      const stats = await fs.promises.stat(sourceFilePath);
      if (stats.isFile()) {
        await fs.promises.copyFile(sourceFilePath, destinationFilePath);
        console.log(`Copied: ${file}`);
      }
    }

    console.log('Copy completed successfully!');
  } catch (error) {
    console.error(`Error copying directory: ${error.message}`);
  }
};

copyDir(sourceFolderPath, destinationFolderPath);
