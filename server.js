// Usage:
// 0. Initialize package.json
//    npm init -y
// 1. Install dependencies: 
//    npm i express body-parser
// 2. Run server:
//    node server.js

const express = require('express'); //підключаю express.js
const bodyParser = require('body-parser'); //підключаю body-parser
const path = require('path'); //підключаю вбудований модуль path
const app = express(); //ініціалізуємо express

app.use(bodyParser.json()); //задає використання body-parser
app.use(express.static(path.resolve(__dirname, './'))); //альтернатива девсерверу (починає обслуговувати файли)

app.post('/contacts', (req, res) => { //app.post - endpoint (api на бекенді, яка буде приймати запит на url /contact)
  //файлу contact у нас нема в проекті, 
  //але бекенд буде чекати запит методом post на адресу ./contacts.txt
  const fs = require('fs');
  fs.appendFile('./contacts.txt', JSON.stringify(req.body) + '\n', function (err) { //і буде додавати інформацію, яку відправимо на адресу у файл ./contacts.txt
    if (err) {
      res.status(500).send('Server error');
      return console.log(err);
    }
    console.log('Data saved: ' + JSON.stringify(req.body));
    res.send('Data saved');
  });
});

console.log(
  'Server is running on',
  process.env.PORT || 5500,
  process.env.IP || '0.0.0.0'
);

app.listen(process.env.PORT || 5500, process.env.IP || '0.0.0.0');