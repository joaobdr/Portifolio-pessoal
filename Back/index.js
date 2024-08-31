const express = require('express');

const port = process.env | 5000;
const app = express();

app.use('/assets', express.static('assets'));


app.get('/', (req, res)=>res.sendFile(__dirname + "/index.html"));
app.get('/api', (req, res)=>res.status(200).json({mensagem: 'Api rodando', status: 200}));
app.get('/*', (req, res) =>res.sendFile(__dirname + "/index.html"));

app.listen(port, ()=>{

    console.log(`servidor rodando na porta 5000`);
    console.log(`http://localhost:${port}`);    
})
