import { ITransportadora } from "../../../domain/repositories/interfaces/ITransportadora";

export default class Transportadora implements ITransportadora {
  private _codigo: number;
  private _cnpj: string;
  private _nome: string;
  private _email: string;
  private _telefone: string;
  private _endereco: string;
  private _tempoDeEntrega: string;

  constructor({
    codigo,
    cnpj,
    nome,
    email,
    telefone,
    endereco,
    tempoDeEntrega,
  }: ITransportadora) {
    this._codigo = codigo;
    this._cnpj = cnpj;
    this._nome = nome;
    this._email = email;
    this._telefone = telefone;
    this._endereco = endereco;
    this._tempoDeEntrega = tempoDeEntrega;
  }

  get codigo(): number {
    return this._codigo;
  }

  get cnpj(): string {
    return this._cnpj;
  }

  get nome(): string {
    return this._nome;
  }

  get email(): string {
    return this._email;
  }

  get telefone(): string {
    return this._telefone;
  }

  get endereco(): string {
    return this._endereco;
  }

  get tempoDeEntrega(): string {
    return this._tempoDeEntrega;
  }

  set codigo(value: number) {
    this._codigo = value;
  }

  set cnpj(value: string) {
    this._cnpj = value;
  }

  set nome(value: string) {
    this._nome = value;
  }

  set email(value: string) {
    this._email = value;
  }

  set telefone(value: string) {
    this._telefone = value;
  }

  set endereco(value: string) {
    this._endereco = value;
  }

  set tempoDeEntrega(value: string) {
    this._tempoDeEntrega = value;
  }
}
