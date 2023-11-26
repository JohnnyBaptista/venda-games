import { IVenda } from "../../../domain/repositories/interfaces/IVenda";
import Pagamento from "../../dtos/Venda/Pagamento";
import Venda from "../../dtos/Venda/Venda";
import VendaFactory from "../../factory/Venda/VendaFacotry";

export default class VendaController {
  constructor() {}

  static criarNovaVenda(
    dados: Omit<IVenda, "itensVenda" | "valorTotal" | "valorComDesconto">
  ): Venda {
    const novaVenda = VendaFactory.criarVenda({
      ...dados,
      itensVenda: [],
      valorTotal: 0,
      valorComDesconto: 0,
    });
    return novaVenda;
  }

  static calcularValorTotal(venda: Venda): number {
    let total = 0;
    venda.itensVenda.forEach((item) => {
      total += item.calcularTotal();
    });
    return total;
  }

  static calcularValorComDesconto(venda: Venda, desconto: number): number {
    const valorTotal = this.calcularValorTotal(venda);
    return valorTotal - desconto;
  }

  static realizarPagamento(venda: Venda, formaDePagamento: Pagamento): void {
    venda.formaDePagamento = formaDePagamento;
  }

  static agendarEntrega(venda: Venda, dataEntrega: Date): void {
    venda.dataEntrega = dataEntrega;
  }
}

