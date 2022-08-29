const express = require ('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(require('./routes/routes'));

app.listen(3000);
console.log('Servidor ativo na porta 3000')
