const server = require("http").createServer();
const io = require("socket.io")(server);

const PORT = 3000;

server.listen(PORT);
console.log(`Listeing on port ${3000}`);

io.on("connections", (socket) => {});
