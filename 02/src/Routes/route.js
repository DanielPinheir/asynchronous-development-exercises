const express = require("express");

const {
  listaPokemons,
  caracteristicasPokemon,
} = require("../Controller/pokemon");

const router = express.Router();

router.get("/pokemon", listaPokemons);
router.get("/pokemon/:idPokemon", caracteristicasPokemon);

module.exports = router;
