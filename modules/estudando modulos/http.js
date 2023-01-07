//Servidor usando http

const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url == "/home") {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end("<h1>Hello World</h1>");
    }

    if (req.url == "/users") {
        const users = [
            {
                name: "John Doe",
                email: "John@email.com"
            },
            {
                name: "Jane Doe",
                email: "Jane@email.com"
            }
        ];

        res.writeHead(200, {'Content-Type':'application/json'});
        res.end(JSON.stringify(users));
    }
});



server.listen(port, () => console.log(`Rodando na porta ${port}!`)); 