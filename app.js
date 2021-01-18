const express = require ('express');
const app = express();
const news = require ('./modules/news')
const port = 3000;
app.use(express.static('public'));

let bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/', news.getHome);
app.post('/film/', urlencodedParser, news.getFilm);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
