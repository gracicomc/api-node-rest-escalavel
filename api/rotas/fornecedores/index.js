const roteador = require("express").Router();
const TabelaFornecedor = require("./TabelaFornecedor");
const Fornecedor = require("./Fornecedor");

//listar fornecedores
roteador.get("/", async (requisicao, resposta) => {
  const resultados = await TabelaFornecedor.listar();
  resposta.send(JSON.stringify(resultados));
});

//criar/inserir fornecedores
roteador.post("/", async (requisicao, resposta) => {
  const dadosRecebidos = requisicao.body;
  const fornecedor = new Fornecedor(dadosRecebidos);
  await fornecedor.criar();
  resposta.send(JSON.stringify(fornecedor));
});

module.exports = roteador;
