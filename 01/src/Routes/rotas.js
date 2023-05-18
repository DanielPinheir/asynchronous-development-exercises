const express = require("express");
const {
  listarProdutos,
  detalharProduto,
  calculaFreteProduto,
} = require("../Controller/produtos");

const router = express.Router();

router.get("/produtos", listarProdutos);
router.get("/produtos/:idProduto", detalharProduto);
router.get("/produtos/:idProduto/frete/:cep", calculaFreteProduto);

module.exports = router;
