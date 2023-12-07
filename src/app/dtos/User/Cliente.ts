import { ICliente } from "../../../domain/repositories/interfaces/ICliente";
import Usuario from "./Usuario";

export default class Cliente extends Usuario {
  protected _nivel: number;
  protected _clienteEpico: boolean;

  constructor(cliente: ICliente) {
    const { nivel, clienteEpico, ...rest } = cliente;
    super({ ...rest });
    this._nivel = nivel;
    this._clienteEpico = clienteEpico;
  }



  get nivel(): number {
    return this._nivel;
  }

  get clienteEpico(): boolean {
    return this._clienteEpico;
  }

  set nivel(value: number) {
    this._nivel = value;
  }

  set clienteEpico(value: boolean) {
    this._clienteEpico = value;
  }
}
