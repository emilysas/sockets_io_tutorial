var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http)

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	socket.broadcast.emit('connection', 'Another user has joined the room');
	console.log('Another user has joined the room');
  
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(3000, function() {
  console.log("listening on port 3000")
});