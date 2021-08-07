const express = require('express');
var cors = require('cors');
const routesNavigation = require('./src/routesNavigation');

const app = express();
const port = 3000;

app.use(cors());
app.use('/', routesNavigation);

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.get('*', (request, response) => {
  response.status(404).send('Path not found !');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
