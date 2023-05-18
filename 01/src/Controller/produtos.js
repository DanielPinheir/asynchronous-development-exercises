const { getStateFromZipcode } = require("utils-playground");
const produtos = require("../bancodedados/produtos");

//GET
const listarProdutos = (req, res) => {
  return res.status(200).json(produtos);
};

const detalharProduto = (req, res) => {
  const id = Number(req.params.idProduto);

  const produto = produtos.find((produto) => Number(produto.id) == id);

  if (!produto) {
    return res.status(404).json({ mensagem: "Produto inexistente." });
  }
  return res.status(200).json(produto);
};

const calculaFreteProduto = async (req, res) => {
  const id = Number(req.params.idProduto);
  const { cep } = req.params;

  const produto = produtos.find((produto) => Number(produto.id) == id);

  if (!produto) {
    return res.status(404).json({ mensagem: "Produto inexistente." });
  }

  const estado = await getStateFromZipcode(cep);

  const estadosFreteDezPorCento = ["BA", "SE", "AL", "PE", "PB"];
  const estadosFreteQuinzePorCento = ["RJ", "SP"];
  let frete = 0;
  if (estadosFreteDezPorCento.includes(estado)) {
    frete = produto.valor * 0.1;
  } else if (estadosFreteQuinzePorCento.includes(estado)) {
    frete = produto.valor * 0.15;
  } else {
    frete = produto.valor * 0.12;
  }

  return res
    .status(200)
    .json({ produto: produto, estado: estado, frete: frete });
};

module.exports = {
  listarProdutos,
  detalharProduto,
  calculaFreteProduto,
};
