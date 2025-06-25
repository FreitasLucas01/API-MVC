const express = require("express");
const routeres = require("./src/routes/routerPerson");

const app = express();

app.use(express.json());
app.use(routeres)

const port = 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

