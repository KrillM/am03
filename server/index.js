const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const port = 8000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

server.listen(port, () => {
    console.log(`주소는 localhost:${port} 입니다.`);
});