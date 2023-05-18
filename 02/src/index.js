const express = require("express");
const routes = require("./Routes/route");

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
  "Iniciando servidor na porta 3000.";
});
