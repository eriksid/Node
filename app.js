express = require('express');
app = express();
var head = "<!DOCTYPE html>";
head += "<html lang='en'>";
head += "<head>";
head += "<meta charset='UTF-8'>";
head += "<meta name='viewport' content='width=device-width, initial-scale=1.0'>";
head += "<title>Document</title>";
head += "</head>";
dados = "<body>";
  
footer = "</body>";
footer += "</html>";
app.get('/',(req,res)=> res.send(head+"Portal de noticias"+footer));
app.get('/tecnologia', (req,res) => res.send(head+"Noticias de tecnologia"+footer))
app.listen('3000', () => console.log('Servidor rodando com Express'));