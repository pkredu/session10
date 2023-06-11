const childProcess = require("child_process");
const { stderr } = require("process");

for(let i=0;i<4;i++){
    
    var workerProcess = childProcess.exec('node testFile.js '+i,(error,stdout,stderr)=>{
        if(error){
            //nodejs error
            console.log('ERROR-:'+error.stack);
        }
        if(stderr){
            // process error, chidl prcoess , mosule under child process
            console.log('STDERR-'+stderr);
        }
        if(stdout){
            // output in callback
            console.log('STDOUT-'+stdout);
            console.log(`mainProcess- ${process.pid} , ChildProcess-${workerProcess.pid}`)
        }
    });
    // process event
    workerProcess.on('close',(codeRecieved)=>{
        console.log('child process have exited with code-',codeRecieved);
    })
}