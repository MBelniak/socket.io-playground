const { Server } = require('socket.io');


let socket;
const server = require('http').createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');
    if ( req.method === 'OPTIONS' ) {
        res.writeHead(200);
        res.end();
        return;
    }

    if (req.url !== '/addToBasket') {
        res.writeHead(404);
        res.end('Not found');
        return;
    }

    if (socket) {
        socket.emit("content-added-to-basket", 'New product')
    }
    res.writeHead(200);
    res.end();
});
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173"
    }
});

io.on('connection', _socket => {
    socket = _socket;
    console.log(`connect ${socket.id}`);
    socket.on('disconnect', reason => {
        console.log(`disconnect ${socket.id} due to ${reason}`);
    });
});

server.listen(3000);
