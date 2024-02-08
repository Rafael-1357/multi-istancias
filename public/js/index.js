const socket = io('http://localhost:3000');

socket.on('oi', data => console.log(data));