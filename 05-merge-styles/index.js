const fs = require('fs');
const path = require('path');
const stylesFolderPath = '05-merge-styles/styles';
const outputFolderPath = '05-merge-styles/project-dist';
const outputFile = 'bundle.css';
fs.readdir(stylesFolderPath, (err, files) => {
  if (err) {
    console.error(`Error reading styles folder: ${err.message}`);
    return;
  }
  const cssFiles = files.filter(
    (file) => path.extname(file).toLowerCase() === '.css',
  );

  const stylesContentArray = [];
  cssFiles.forEach((cssFile) => {
    const filePath = path.join(stylesFolderPath, cssFile);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    stylesContentArray.push(fileContent);
  });

  const bundleFilePath = path.join(outputFolderPath, outputFile);
  fs.writeFileSync(bundleFilePath, stylesContentArray.join('\n'), 'utf8');
  console.log('Bundle.css created successfully!');
});
