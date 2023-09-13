require('dotenv').config();
// const path = require('path');
const express = require('express');
const controllers = require('./controllers');

const app = express();
app.use(express.json());

// // Serve static files from the React app
// app.use(express.static(path.join(__dirname, '../client/dist')));
// app.use(express.json());

app.get('/cat', controllers.getCat);
app.post('/post', controllers.postMessages);
app.get('/messages', controllers.getMessages);

const PORT = process.env.PORTSERV || 3000;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening on port ${PORT}`);
});
