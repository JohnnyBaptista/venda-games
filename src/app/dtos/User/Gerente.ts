import { IGerente } from "../../../domain/repositories/interfaces/IGerente";
import Usuario from "./Usuario";

export default class Gerente extends Usuario {
    protected _salario: number;
    protected _pis: string;
    protected _dataAdmissao: Date;
  
    constructor(gerente: IGerente) {
      const { salario, pis, dataAdmissao, ...rest } = gerente;
      super({ ...rest });
      this._salario = salario;
      this._pis = pis;
      this._dataAdmissao = dataAdmissao;
    }
  
    get salario(): number {
      return this._salario;
    }
  
    get pis(): string {
      return this._pis;
    }
  
    get dataAdmissao(): Date {
      return this._dataAdmissao;
    }
  
    set salario(value: number) {
      this._salario = value;
    }
  
    set pis(value: string) {
      this._pis = value;
    }
  
    set dataAdmissao(value: Date) {
      this._dataAdmissao = value;
    }
  }