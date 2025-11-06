import { writeFile } from "fs";

const filename = process.argv[2];
const content = process.argv[3];

  if (!filename || !content) {
    console.log('Please provide a filename and content');
    console.log('EXAMPLE: node filewriter.js output.txt "Hello world"');
    process.exit(1);
  }
    writeFile(filename, content, (err)=>{
        if(err){
            console.error('Error writing file:', err);
            return;
        }
    console.log(`File "${filename}" created successfully`);
 
});

