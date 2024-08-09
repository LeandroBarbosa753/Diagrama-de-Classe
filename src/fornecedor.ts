import { Produto } from "./produto";

class Fornecedor {
  codigoFornecedor: number;
  nome: string;
  ativo: boolean;
  documento: string;
  produto: Produto[];

  constructor(
    codigoFornecedor: number,
    nome: string,
    ativo: boolean,
    documento: string
  ) {
    this.codigoFornecedor = codigoFornecedor;
    this.nome = nome;
    this.ativo = ativo;
    this.documento = documento;
    this.produto = [];
  }
  adicionarProduto(produto: Produto): void {
    this.produto.push(produto);
  }
  listaProdutosFornecedor(): void {
    var i: number = 0;
    for (i = 0; i < this.produto.length; i++) {
      console.log(this.produto[i]);
    }
  }
}
export { Fornecedor };
