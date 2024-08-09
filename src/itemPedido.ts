import { Produto } from "./produto";

class ItemPedido {
  quantidade: number;
  produto: Produto;
 
  addProduto(quantidade: number, produto: Produto) {
    this.quantidade = quantidade;
    this.produto = produto
  }
}
export { ItemPedido };
