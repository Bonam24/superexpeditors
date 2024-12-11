const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
const path = require('path');


app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'hbs');
app.use(express.static('public'));

const homeRouter = require('../routes/homepage');
app.use('/', homeRouter);

  app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
  });