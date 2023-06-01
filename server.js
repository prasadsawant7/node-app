const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home Page");
  } else if (req.url === "/api/employee") {
    res.writeHead(200, { "Content-Type": "application/json" });
    const employee = {
      emp_id: 001,
      name: "Prasad",
      salary: 100000,
      department: "Development",
      branch: "Mumbai",
    };
    res.end(JSON.stringify(employee));
  }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log("Server is running on port 3000"));
