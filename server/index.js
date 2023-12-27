const session = require('express-session');
const express = require("express");
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true, // document.cookie로는 접속x
        maxAge: 1000 * 60 * 60,
    },
}))

app.get("*", (req, res) => {
    res.send("404 Error");
});

app.listen(port, () => {
    console.log(`주소는 localhost:${port} 입니다.`);
});