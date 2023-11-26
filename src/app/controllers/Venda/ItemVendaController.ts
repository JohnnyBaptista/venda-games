import { IItemVenda } from "../../../domain/repositories/interfaces/IVenda";
import Jogo from "../../dtos/Jogo/Jogo";
import Venda, { ItemVenda } from "../../dtos/Venda/Venda";

export default class ItemVendaController {
  constructor(private venda: Venda) {}

  adicionarItem(produto: Jogo, valor: number, quantidade: number): void {
    const novoItem = new ItemVenda(produto, valor, quantidade);
    this.venda.itensVenda.push(novoItem);
  }

  removerItem(index: number): void {
    if (index >= 0 && index < this.venda.itensVenda.length) {
      this.venda.itensVenda.splice(index, 1);
    }
  }

  atualizarQuantidade(index: number, novaQuantidade: number): void {
    if (index >= 0 && index < this.venda.itensVenda.length) {
      this.venda.itensVenda[index].quantidade = novaQuantidade;
    }
  }

  listarItens(): IItemVenda[] {
    return this.venda.itensVenda;
  }
}

