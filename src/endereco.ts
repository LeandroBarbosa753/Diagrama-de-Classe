import { Fornecedor } from "./fornecedor";

class Endereco {
  rua: string;
  bairro: string;
  cidade: string;
  estado: string;
  pais: string;
  cep: string;
  fornecedor: Fornecedor;
  constructor(
    rua: string,
    bairro: string,
    cidade: string,
    estado: string,
    pais: string,
    cep: string
  ) {
    this.rua = rua;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
    this.pais = pais;
    this.cep = cep;
  }
  addFornececedor(fornecedor: Fornecedor): void {
    this.fornecedor = fornecedor;
  }
}

export { Endereco };
