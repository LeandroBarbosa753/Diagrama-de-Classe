import { Fornecedor } from "./fornecedor";
import { Endereco } from "./endereco";
import { Cliente } from "./cliente";
import { Pedido } from "./pedido";
import { Produto } from "./produto";
import { ItemPedido } from "./itemPedido";
import { HistoricoPedido } from "./historicoPedido";


// CLIENTE

const cliente_001 = new Cliente(1, "João", "123.456.789-00");

console.log(cliente_001);

// PRODUTO

const produto_001 = new Produto(
  1,
  " Arroz Parboilizado",
  7.99,
  true,
  new Date()
);


//ITEM PEDIDO

const itemPedido_001 = new ItemPedido();

itemPedido_001.addProduto(2, produto_001);

 console.log(itemPedido_001);

// PEDIDO


const pedido_001 = new Pedido(1, cliente_001);

pedido_001.addItem(itemPedido_001);


console.log(pedido_001);


// HISTORICO PEDIDO

const historicoPedido_001 = new HistoricoPedido(); 

historicoPedido_001.acao.push(pedido_001);
console.log(historicoPedido_001.imprimirAcao());



// FORNECEDOR

const fornecedor_001 = new Fornecedor(
  1,
  "Mercado do João",
  true,
  "123.456.789-00"
);

fornecedor_001.adicionarProduto(produto_001);

//fornecedor_001.listaProdutosFornecedor();

console.log(fornecedor_001);


// ENDEREÇO

const endereco_001 = new Endereco(
  "Aquilino Pacheco",
  "Centro",
  "São Paulo",
  "SP",
  "Brasil",
  "12345-678"
);

endereco_001.addFornececedor(fornecedor_001);

console.log(endereco_001);

