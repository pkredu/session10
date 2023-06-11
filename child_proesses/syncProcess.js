const fs = require('fs');
var process = require('process');
const childProcess = require('child_process');
//const { stdout } = require('process');

for(var i=0;i<3;i++){
    try {
        var workerProess = childProcess.execSync('node testFile.js '+i,(err,stdout,stderr)=>{
            if(err){
                console.log(err.stack);
                console.log('Error  code -' +err.code)
                console.log(err.signal);
                throw error
            }
            console.log('stdout: '+stdout);
            console.log('stderr: '+stderr);
        })
        console.log('process ',i)
    } catch (error) {
        console.log(error);
    }
   
    
    /* workerProess.on('exit',(code)=>{
        console.log('Child Process exited with code -',code)
    })  */
}