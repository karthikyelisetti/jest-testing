const express = require("express");
const getHome = require("./routes/hello.router");

const app = express();
const port = 3000;

app.use("/", getHome);

app.listen(port, ()=> {
    console.log(`Listening to PORT: ${port}`)
});

module.exports = app;