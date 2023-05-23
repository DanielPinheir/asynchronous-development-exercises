# Exercícios - Programação Assíncrona

## Exercícios

1. Cálculo de frete
Vamos criar uma API para cálcular o frete de um produto.

A nossa API deverá possuir três rotas e todas utilizarão o método **GET**.

A rota **GET** `/produtos` deverá fazer a listagem dos produtos que estão listados no arquivo `produtos.js`, na pasta `bancodedados`.

A rota **GET** `/produtos/:idProduto` deverá fazer o detalhamento de um produto através do `id`, passado como parâmetro na rota.

A rota **GET** `/produtos/:idProduto/frete/:cep` receberá dois parâmetros de rota. O primeiro `idProduto` receberá o id do produto que será calculado o frete, e o segundo `cep` receberá o cep (sem pontuação) para que seja encontrado o estado referente ao cep informado.

Esta rota deverá calcular o frete do produto de acordo com as regras abaixo.

Para encontrar o estado através do cep informado, usaremos a função `getStateFromZipcode`, da biblioteca `utils-playground`, que pode ser baixada no **NPM**, e pode ser encontrado no link abaixo:

https://www.npmjs.com/package/utils-playground

**Regras para cálculo de frete**

- O valor padrão do frete será de `12%` do valor do produto
- Para os estados `BA, SE, AL, PE e PB` o valor do frete será de `10%`
- Para os estados `SP e RJ` o valor do frete será de `15%`

**Exemplo:**

Caso chamado a rota **GET** `/produtos/1/frete/41256250`, a resposta deverá ser:

```json
{
  "produto": {
    "id": 1,
    "nome": "Teclado mecânico Keychron K2",
    "valor": 100000
  },
  "estado": "BA",
  "frete": 10000
}
```
###### tags: `módulo 2` `exercícios` `lógica` `nodeJS`


2. API Pokemon
Neste exercício criaremos uma API para responder informações de pokemons.
Para isso, utilizaremos como fonte dos dados as funções `listarPokemons` e `detalharPokemon`, da biblioteca `utils-playground`, que pode ser baixada no NPM, e pode ser encontrado no link abaixo:

https://www.npmjs.com/package/utils-playground

Deste modo, o fluxo será:

1. O usuário vai chamar a API que você vai criar
2. Sua API vai chamar as funções e aguardar o retorno delas
3. Sua API vai retornar os dados que forem pedidos abaixo para o usuário

Todas as requisições deverão ser assíncronas **aguardando o retorno de cada chamada (quando necessário)**, antes de executar qualquer outro comando.

Criaremos apenas dois métodos (verbos **HTTP**) para o mesmo recurso **pokemon** (`http://localhost:8000/pokemon`):

-   **GET** para listar os pokemons
-   **GET** com id ou nome para retornar informações de 1 pokemon

Abaixo detalharemos como cada um dos métodos deverão funcionar:

**A) GET sem parâmetro de rota**

Como a quantidade existente de pokemons é bem grande será necessário trabalhar com paginação dos dados.

A função `listarPokemons` que utilizaremos já é preparada para a paginação, sendo possível informar um argumento com a página desejada. Cada página retorna 10 pokemons e caso a página não seja informada como argumento da função, será retornada a primeira página.

**Exemplo:**

```javascript
const pokemons = listarPokemons()
// aqui será listado os 10 pokemons da primeira página.

const pokemons = listarPokemons(3)
// aqui será listado os 10 pokemons da terceira página.
```

Nós não precisamos de todas as propriedades. Portanto, selecionaremos algumas propriedades do pokemon retornados pela função para repassar aos consumidores da nossa api.

As propriedades selecionadas deverão ser:

-   id
-   name
-   height
-   weight
-   base_experience
-   forms
-   abilities
-   species

Sendo assim, como exemplo, ao requisitarmos `http://localhost:8000/pokemon/1/` ou `http://localhost:8000/pokemon/bulbasaur/` na nossa API, deverá ser retornado:

```json
{
    "id": 1,
    "name": "bulbasaur",
    "height": 7,
    "weight": 69,
    "base_experience": 64,
    "forms": [
        {
            "name": "bulbasaur",
            "url": "https://pokeapi.co/api/v2/pokemon-form/1/"
        }
    ],
    "abilities": [
        {
            "ability": {
                "name": "overgrow",
                "url": "https://pokeapi.co/api/v2/ability/65/"
            },
            "is_hidden": false,
            "slot": 1
        },
        {
            "ability": {
                "name": "chlorophyll",
                "url": "https://pokeapi.co/api/v2/ability/34/"
            },
            "is_hidden": true,
            "slot": 3
        }
    ],
    "species": {
        "name": "bulbasaur",
        "url": "https://pokeapi.co/api/v2/pokemon-species/1/"
    }
}
```
---
**Observações:**

-   É necessário se atentar para o uso do **await** quando uma função utiliza **promises**.
-   Todas as rotas deverão seguir os padrões **REST** o mais fielmente possível.
-   Todas as requisições deverão ser **assíncronas**.

###### tags: `módulo 2` `exercícios` `lógica` `nodeJS`
