const express = require("express");
const routes = require("./Routes/rotas");

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
  console.log("Servidor inicializado na porta 3000.");
});
