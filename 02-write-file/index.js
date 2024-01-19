const fs = require('fs');
const readline = require('readline');
const filePath = '02-write-file/textfile.txt';
const writeStream = fs.createWriteStream(filePath, {
  flags: 'a',
  encoding: 'utf8',
});
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log('Welcome text! :D');
const displayPrompt = () => {
  rl.question('Enter text (Ctrl+C or type "exit" to exit): ', (inputText) => {
    if (inputText.toLowerCase() === 'exit') {
      console.log('Bye-Bye! Killing the process.');
      rl.close();
    } else {
      writeStream.write(inputText + '\n');
      displayPrompt();
    }
  });
};
displayPrompt();
rl.on('SIGINT', () => {
  console.log('Bye-Bye! Killing the process.');
  rl.close();
});
