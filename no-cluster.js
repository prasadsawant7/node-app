const http = require("node:http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home Page");
  } else if (req.url === "/slow-page") {
    for (let i = 0; i < 9999999999; i++) {}
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Slow Page");
  }
});

server.listen(3000, () =>
  console.log("Server is running on port 3000\nhttp://localhost:3000")
);
