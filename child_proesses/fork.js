const ChildProcess = require('child_process');

for(let i=0; i<4;i++){
    var workerProcess = ChildProcess.fork('testFile.js',[i]);

    workerProcess.send('hello from Parent process '+process.pid);

    workerProcess.on('message',(data)=>{
        console.log('closing the channel with process',data.pid);
        process.kill(data.pid);
    })
    workerProcess.on('close',(codeReceived)=>{
        console.log('child process exited with code - '+codeReceived);
    })
}