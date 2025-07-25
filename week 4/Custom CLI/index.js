const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
  .name('counter')
  .description('CLI to do file based tasks')
  .version('0.8.0');

program.command('count')
  .description('Count the number of lines in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const lines = data.split('\n').length;
        console.log(`There are ${lines} lines in ${file}`);
      }
    });
  });

program.command('char')
  .description("Count the total characters of words in a file")
  .argument('<file>','file to count char')
  .action((file) =>{
    fs.readFile(file,"utf-8",(err,data)=>{
        if(err) console.log(err);
        else{
            const words = data.length;
            console.log(words);
        }
    })
  })
program.parse();