var http = require("http");

var server = requestListener((req, res) => {
  //   console.log(req.url, req.method);
  //   console.log(res.statusCode);
  //   res.setHeader("Content-Type", "text/html");
  //   res.statusCode = 200;
  //   res.statusMessage = "OK";
  //   res.write("<h1>Hello World</h1>");
  //   res.write("<p>This is a node.js server</p>");
  //   res.end();
  if (request.url == "/") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(`
        <html>
            <head>
                <title>anasayfa</title>
                <meta charset="utf-8">
            </head>            
            <body>
                <h1>Anasayfa</h1>
            </body>
        </html>`);
    response.end();
  } else if (request.url == "/blogs") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(`
        <html>
            <head>
                <title>blogs</title>
                <meta charset="utf-8">
            </head>            
            <body>
                <h1>blog listesi</h1>
            </body>
        </html>`);
    response.end();
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.write(`
        <html>
            <head>
                <title>404</title>
                <meta charset="utf-8">
            </head>            
            <body>
                <h1>aradığınız kaynak bulunamadı.</h1>
            </body>
        </html>`);
    response.end();
  }
});

var server = http.createServer(requestListener);
server.listen(3000);
console.log("Server is running on port 3000");
