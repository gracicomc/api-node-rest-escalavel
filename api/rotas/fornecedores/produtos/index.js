const roteador = require("express").Router({ mergeParams: true });
const Tabela = require("./TabelaProduto");

roteador.get("/", async (requisicao, resposta) => {
  const produtos = await Tabela.listar(requisicao.params.idFornecedor);
  resposta.send(JSON.stringify(produtos));
});

roteador.post("/", (requisocap, resposta) => {
  const idFornecedor = requisicao.params.idFornecedor;
  const corpo = requisicao.body;
  const dados = Object.assign({}, corpo, { fornecedor: idFornecedor });
});

module.exports = roteador;
