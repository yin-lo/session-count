const express = require('express');
const session = require('express-session');
const router = require('./app/router');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
}));

app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
