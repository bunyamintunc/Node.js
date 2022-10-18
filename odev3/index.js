

const express = require('express');
const app = express();
var bodyParser = require('body-parser');



app.use(bodyParser.json())

const mw = {
   requireAuthentication : (req, res, next) => {
    console.log("bir istek geldi.")
    next()
   }
}
app.post('*', (req, res, next) => {
    console.log("Post isteği için istek gönderildi.")
    next()
})

app.use(mw.requireAuthentication);

app.get('/',(req, res) => {
    // res.send('Merhaba Dünya');
    res.json("Merhaba, Bir GET isteği attınız.");
});

app.post('/hello', (req, res) => {
    console.log(req.body.dene);
    res.status(201).send("Merhaba, Bir POST isteği attınız.");
})

app.put('/hello', (req, res) => {
    console.log(req.body.dene)
    res.send("Merhaba, PUT isteği attınız.")
})

app.delete('/hello', (req, res) => {
    console.log(req.body.id)
    res.status(202).send("Merhaba, DELETE isteği attınız.")
})

app.listen(3000, ()  => {
    console.log('Uygulama calistirildi');
})