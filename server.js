const express = require("express");
const vegetableRoutes = require("./src/vegetables/routes");

const app = express();
const port = 6002;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello world");
})

app.use("https://amintuapi.onrender.com", vegetableRoutes);

app.listen(port, () => console.log('running active port'));