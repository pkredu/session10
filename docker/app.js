import axios from 'axios';
import express from 'express';


const app = express();
const port = 8080;
const host = '0.0.0.0'

app.get('/',(req,res)=>{
    res.status(200).send('WELCOME');
})

app.get('/countries',(req,res)=>{
    axios.get(`https://restcountries.com/v3.1/all`)
    .then(response=>{
        console.log(response.data[0].name)
        const responseOut = response.data;
        res.status(200).send(responseOut);
    })
    .catch(err=>{
        res.json(err);
    })
})

app.listen(port,host,()=>{
    console.log(`Server is running at ${port}`);
})