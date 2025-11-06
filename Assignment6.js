import {appendFile} from 'fs';
const logMessage=`App started at ${new Date().toISOString().replace('T',' ').substring(0,19)}\n`;
appendFile('app.Log',logMessage,(err)=>{
    if(err) throw err;
    console.log('Log entry added!');
});