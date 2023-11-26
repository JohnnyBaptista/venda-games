import { ICliente } from "../../../domain/repositories/interfaces/ICliente";
import Usuario from "./Usuario";

export default class Cliente extends Usuario {
  protected _dataCadastro: Date;
  protected _nivel: number;
  protected _clienteEpico: boolean;

  constructor(cliente: ICliente) {
    const { dataCadastro, nivel, clienteEpico, ...rest } = cliente;
    super({ ...rest });
    this._dataCadastro = dataCadastro;
    this._nivel = nivel;
    this._clienteEpico = clienteEpico;
  }

  get dataCadastro(): Date {
    return this._dataCadastro;
  }

  get nivel(): number {
    return this._nivel;
  }

  get clienteEpico(): boolean {
    return this._clienteEpico;
  }

  set dataCadastro(value: Date) {
    this._dataCadastro = value;
  }

  set nivel(value: number) {
    this._nivel = value;
  }

  set clienteEpico(value: boolean) {
    this._clienteEpico = value;
  }
}
