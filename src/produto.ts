class Produto {
  codigoProduto: number;
  descricao: string;
  preco: number;
  ativo: boolean;
  dataCadastro: Date;
  constructor(
    codigoProduto: number,
    descricao: string,
    preco: number,
    ativo: boolean,
    dataCadastro: Date
  ) {
    this.codigoProduto = codigoProduto;
    this.descricao = descricao;
    this.preco = preco;
    this.ativo = true;
    this.dataCadastro = new Date();
  }
  formatarPreco(): void {
    console.log(`R$ ${this.preco}`);
  }
  formatarData(): any {
    return `${this.dataCadastro.getDate()}/
            ${this.dataCadastro.getMonth()}/
            ${this.dataCadastro.getFullYear()}`;
  }
}
export { Produto };
