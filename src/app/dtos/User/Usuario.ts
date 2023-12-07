import { IUsuario } from "../../../domain/repositories/interfaces/IUsuario";

export default class Usuario {
  protected _codigo: number;
  protected _nome: string;
  protected _cpf: string;
  protected _rg: string;
  protected _endereco: string;
  protected _cep: string;
  protected _email: string;

  constructor(
    user: IUsuario,
  ) {
    this._codigo = user.codigo;
    this._nome = user.nome;
    this._cpf = user.cpf;
    this._rg = user.rg;
    this._endereco = user.endereco;
    this._cep = user.cep;
    this._email = user.email;
  }

  get codigo(): number {
    return this._codigo;
  }

  get nome(): string {
    return this._nome;
  }

  get cpf(): string {
    return this._cpf;
  }

  get rg(): string {
    return this._rg;
  }


  get endereco(): string {
    return this._endereco;
  }

  get cep(): string {
    return this._cep;
  }

  get email(): string {
    return this._email;
  }

  set codigo(value: number) {
    this._codigo = value;
  }

  set nome(value: string) {
    this._nome = value;
  }

  set cpf(value: string) {
    this._cpf = value;
  }

  set rg(value: string) {
    this._rg = value;
  }

  set endereco(value: string) {
    this._endereco = value;
  }

  set cep(value: string) {
    this._cep = value;
  }

  set email(value: string) {
    this._email = value;
  }
}
