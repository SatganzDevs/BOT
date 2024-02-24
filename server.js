
const { Server } = require("socket.io")
const express = require('express')
const http = require('http')
const fetch = require('node-fetch')
const app = express()
const server = http.createServer(app);

const io = new Server(server);


exports.connect = async(conn, PORT) =>{
  app.get('/', (req, res) => {
  res.send('im online!');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
  //console.log('Keep Alive on ')
  //keepAlive()
});
}


//KEEP ALIVE
function keepAlive() {
    const url = `https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`
    if (/(\/\/|\.)undefined\./.test(url)) return
    setInterval(() => {
        fetch(url).catch(console.error)
    }, 5 * 1000 * 60)
}
