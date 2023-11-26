import Jogo from "../../../app/dtos/Jogo/Jogo";
import Cliente from "../../../app/dtos/User/Cliente";
import Gerente from "../../../app/dtos/User/Gerente";
import Pagamento from "../../../app/dtos/Venda/Pagamento";
import Transportadora from "../../../app/dtos/Venda/Transportadora";

interface IItemVenda {
  produto: Jogo;
  valor: number;
  quantidade: number;
  calcularTotal: () => number;
}

interface IVenda {
  codigo: number;
  cliente: Cliente;
  gerente: Gerente;
  dataVenda: Date;
  dataEntrega: Date;
  itensVenda: Array<IItemVenda>;
  possuiItensFisicos: boolean;
  valorTotal: number;
  valorComDesconto: number;
  formaDePagamento: Pagamento;
  transportadora: Transportadora;
  toString: () => string;
  calcularValorTotal: () => number;
  calcularValorDataEntrega: () => number;
}

export type { IVenda, IItemVenda };
