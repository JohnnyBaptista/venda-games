import Desenvolvedora from "./Desenvolvedora";

export default abstract class Jogo {
  protected _codigo: number;
  protected _nome: string;
  protected _descricao: string;
  protected _desenvolvedora: Desenvolvedora;
  protected _dataLancamento: Date;
  protected _valor: number;
  protected _requisitosMinimos: string;
  protected _avaliacao: number;
  protected _comentarios: string;
  protected _disponivel: boolean;

  constructor(
    codigo: number,
    nome: string,
    descricao: string,
    desenvolvedora: Desenvolvedora,
    dataLancamento: Date,
    valor: number,
    requisitosMinimos: string,
    avaliacao: number,
    comentarios: string,
    disponivel: boolean
  ) {
    this._codigo = codigo;
    this._nome = nome;
    this._descricao = descricao;
    this._desenvolvedora = desenvolvedora;
    this._dataLancamento = dataLancamento;
    this._valor = valor;
    this._requisitosMinimos = requisitosMinimos;
    this._avaliacao = avaliacao;
    this._comentarios = comentarios;
    this._disponivel = disponivel;
  }

  get codigo(): number {
    return this._codigo;
  }

  get nome(): string {
    return this._nome;
  }

  get descricao(): string {
    return this._descricao;
  }

  get desenvolvedora(): Desenvolvedora {
    return this._desenvolvedora;
  }

  get dataLancamento(): Date {
    return this._dataLancamento;
  }

  get valor(): number {
    return this._valor;
  }

  get requisitosMinimos(): string {
    return this._requisitosMinimos;
  }

  get avaliacao(): number {
    return this._avaliacao;
  }

  get comentarios(): string {
    return this._comentarios;
  }

  get disponivel(): boolean {
    return this._disponivel;
  }

  set codigo(value: number) {
    this._codigo = value;
  }

  set nome(value: string) {
    this._nome = value;
  }

  set descricao(value: string) {
    this._descricao = value;
  }

  set desenvolvedora(value: Desenvolvedora) {
    this._desenvolvedora = value;
  }

  set dataLancamento(value: Date) {
    this._dataLancamento = value;
  }

  set valor(value: number) {
    this._valor = value;
  }

  set requisitosMinimos(value: string) {
    this._requisitosMinimos = value;
  }

  set avaliacao(value: number) {
    this._avaliacao = value;
  }

  set comentarios(value: string) {
    this._comentarios = value;
  }

  set disponivel(value: boolean) {
    this._disponivel = value;
  }

  public abstract calcularValor(): number;
  public abstract toString(): string;
}

