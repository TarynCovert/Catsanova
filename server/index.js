require('dotenv').config();
const express = require('express');
const controllers = require('./controllers');

const app = express();
app.use(express.json());

app.get('/cat', controllers.getCat);
app.post('/post', controllers.postMessages);
app.get('/messages', controllers.getMessages);
app.delete('/delete', controllers.deleteMessage);

const PORT = process.env.PORTSERV || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
