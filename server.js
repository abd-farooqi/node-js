import http from "http";

const PORT = 8000;

const server = http.createServer((req, res) => {
  //   res.write("Hello World!");
  //   res.setHeader("Content-Type", "text/html");
  //   res.statysCode = 404;

  res.writeHead(500, { "Content-Type": "text/html" });
  res.end(JSON.stringify({ message: "Server Error!" }));
});

server.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
