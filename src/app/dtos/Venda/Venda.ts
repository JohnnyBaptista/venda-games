import {
  IItemVenda,
  IVenda,
} from "../../../domain/repositories/interfaces/IVenda";
import Jogo from "../Jogo/Jogo";
import Cliente from "../User/Cliente";
import Gerente from "../User/Gerente";
import Pagamento from "./Pagamento";
import Transportadora from "./Transportadora";

class ItemVenda implements IItemVenda {
  private _produto: Jogo;
  private _valor: number;
  private _quantidade: number;

  constructor(produto: Jogo, valor: number, quantidade: number) {
    this._produto = produto;
    this._valor = valor;
    this._quantidade = quantidade;
  }

  get produto(): Jogo {
    return this._produto;
  }

  get valor(): number {
    return this._valor;
  }

  get quantidade(): number {
    return this._quantidade;
  }

  set quantidade(value: number) {
    this._quantidade = value;
  }

  calcularTotal(): number {
    return this._valor * this._quantidade;
  }
}

class Venda implements IVenda {
  private _codigo: number;
  private _cliente: Cliente;
  private _gerente: Gerente;
  private _dataVenda: Date;
  private _dataEntrega: Date;
  private _itensVenda: Array<IItemVenda>;
  private _possuiItensFisicos: boolean;
  private _valorTotal: number;
  private _valorComDesconto: number;
  private _formaDePagamento: Pagamento;
  private _transportadora: Transportadora;

  constructor({
    codigo,
    cliente,
    gerente,
    dataVenda,
    dataEntrega,
    itensVenda,
    possuiItensFisicos,
    valorTotal,
    valorComDesconto,
    formaDePagamento,
    transportadora,
  }: IVenda) {
    this._codigo = codigo;
    this._cliente = cliente;
    this._gerente = gerente;
    this._dataVenda = dataVenda;
    this._dataEntrega = dataEntrega;
    this._itensVenda = itensVenda;
    this._possuiItensFisicos = possuiItensFisicos;
    this._valorTotal = valorTotal;
    this._valorComDesconto = valorComDesconto;
    this._formaDePagamento = formaDePagamento;
    this._transportadora = transportadora;
  }

  get codigo(): number {
    return this._codigo;
  }

  get cliente(): Cliente {
    return this._cliente;
  }

  get gerente(): Gerente {
    return this._gerente;
  }

  get dataVenda(): Date {
    return this._dataVenda;
  }

  get dataEntrega(): Date {
    return this._dataEntrega;
  }

  get itensVenda(): Array<IItemVenda> {
    return this._itensVenda;
  }

  get possuiItensFisicos(): boolean {
    return this._possuiItensFisicos;
  }

  get valorTotal(): number {
    return this._valorTotal;
  }

  get valorComDesconto(): number {
    return this._valorComDesconto;
  }

  get formaDePagamento(): Pagamento {
    return this._formaDePagamento;
  }

  get transportadora(): Transportadora {
    return this._transportadora;
  }

  set dataEntrega(value: Date) {
    this._dataEntrega = value;
  }

  set formaDePagamento (value: Pagamento) {
    this._formaDePagamento = value;
  }

  toString(): string {
    return `Venda #${this._codigo}`;
  }

  calcularValorTotal(): number {
    let total = 0;
    this._itensVenda.forEach((item) => {
      total += item.calcularTotal();
    });
    return total;
  }

  calcularValorDataEntrega(): number {
    return this._valorTotal * 1.1;
  }
}

export { ItemVenda };
export default Venda;
