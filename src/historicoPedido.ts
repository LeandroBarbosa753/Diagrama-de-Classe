class HistoricoPedido {
  acao: any[];
  constructor() {
    this.acao = [];
  }
  imprimirAcao(): void {
    var i: number = 0;
    for (i = 0; i < this.acao.length; i++) {
      console.log('-------------------------------------\n');
      console.log(`${i+1} °Acão foi:`, this.acao[i]);
    }
  }
}
export { HistoricoPedido };
