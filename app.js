express = require('express');
app = express();
app.set('view engine','ejs');
app.get('/tecnologia', (req,res) => res.render('secao/tecnologia'));

app.get('/',(req,res)=> res.send(head+"Portal de noticias"+footer));
app.listen('3000', () => console.log('Servidor rodando com Express'));