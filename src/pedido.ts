import { Cliente } from "./cliente";
import { HistoricoPedido } from "./historicoPedido";
import { ItemPedido } from "./itemPedido";



class Pedido {
  codigoPedido: number;
  itemPedido: ItemPedido[];
  cliente: Cliente;
  historicoPedido: HistoricoPedido;
  constructor(codigoPedido: number, cliente: Cliente) {
    this.codigoPedido = codigoPedido;
    this.cliente = cliente;
    this.itemPedido = [];
    this.historicoPedido = new HistoricoPedido();

  }

  addItem(itemPedido: ItemPedido): void {
    this.itemPedido.push(itemPedido);
    this.historicoPedido.acao.push("Produto:", itemPedido.produto.descricao, "-" , "Quantidade:", itemPedido.quantidade);
  }

  valorTotal(): void {
    var i: number = 0;
    var valorTotal: number = 0;
      for (i; i < this.itemPedido.length; i++) {
      valorTotal+=(this.itemPedido[i].produto.preco * this.itemPedido[i].quantidade);
    }

    console.log(`Valor total do pedido: R$ ${valorTotal}`);
   
  }
}
export { Pedido };
