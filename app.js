const express = require('express')
const app = express();
const server = app.listen(process.env.PORT || 3000);
const io = require("socket.io")(server, { });

app.use(express.static('./public'));
app.set('views', ('./app/views'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/views/index.html');
});

io.on("connection", (socket) => {

  console.log(socket.id)

  io.to(socket.id).emit('oi', 'oi' + socket.id)
});