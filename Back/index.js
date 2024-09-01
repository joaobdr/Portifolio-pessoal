const express = require('express');
const cors = require('cors');

const port = process.env | 5000;
const app = express();

app.use(cors())
app.use('/assets', express.static('assets'));
let n = 0 ;

app.get('/', (req, res)=>{
    n = n + 1;

    res.sendFile(__dirname + "/index.html")
});
app.get('/api', (req, res)=>res.status(200).json({visitas: n}));
app.get('/*', (req, res) =>res.sendFile(__dirname + "/index.html"));

app.listen(port, ()=>{

    console.log(`servidor rodando na porta 5000`);
    console.log(`http://localhost:${port}`);    
})
