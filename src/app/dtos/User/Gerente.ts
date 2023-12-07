import { IGerente } from "../../../domain/repositories/interfaces/IGerente";
import Usuario from "./Usuario";

export default class Gerente extends Usuario {
    protected _salario: number;
    protected _pis: string;
  
    constructor(gerente: IGerente) {
      const { salario, pis, ...rest } = gerente;
      super({ ...rest });
      this._salario = salario;
      this._pis = pis;
    }
  
    get salario(): number {
      return this._salario;
    }
  
    get pis(): string {
      return this._pis;
    }

    set salario(value: number) {
      this._salario = value;
    }
  
    set pis(value: string) {
      this._pis = value;
    }
  

  }