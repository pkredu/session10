console.log('child Process executing - ',process.argv[2]);

process.on('message',(data)=>{
    console.log('\n' +'message recieved by child Process -'+process.pid+'\n message-'+data+'\n');
    process.send({
        msg:'Process Finished',
        pid:process.pid
    });
    //process.exit();
})