const childProcess = require("child_process");
    
    var workerProcess = childProcess.spawn('node',['testFile.js',1]);
    // stream-event
    workerProcess.stdout.on('data',(data)=>{
        console.log('recived in STDOUT-'+data);
        console.log(`mainProcess- ${process.pid} , ChildProcess-${workerProcess.pid}`)
    })
    workerProcess.stderr.on('data',(err)=>{
        console.log('recived in STDERR-'+err);
    })

    // process event
    workerProcess.on('close',(codeRecieved)=>{
        console.log('child process have exited with code-',codeRecieved);
    })

      
    var workerProcess2 = childProcess.spawn('node',['testFile.js',1]);
    // stream-event
    workerProcess2.stdout.on('data',(data)=>{
        console.log('recived in STDOUT-'+data);
        console.log(`mainProcess- ${process.pid} , ChildProcess-${workerProcess.pid}`)
    })
    workerProcess2.stderr.on('data',(err)=>{
        console.log('recived in STDERR-'+err);
    })

    // process event
    workerProcess2.on('close',(codeRecieved)=>{
        console.log('child process have exited with code-',codeRecieved);
    })