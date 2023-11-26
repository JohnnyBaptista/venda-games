export default class Desenvolvedora {
  private _codigo: number;
  private _cnpj: string;
  private _nome: string;
  private _site: string;
  private _redeSocial: string;
  private _endereco: string;

  constructor(
    codigo: number,
    cnpj: string,
    nome: string,
    site: string,
    redeSocial: string,
    endereco: string
  ) {
    this._codigo = codigo;
    this._cnpj = cnpj;
    this._nome = nome;
    this._site = site;
    this._redeSocial = redeSocial;
    this._endereco = endereco;
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

  get site(): string {
    return this._site;
  }

  get redeSocial(): string {
    return this._redeSocial;
  }

  get endereco(): string {
    return this._endereco;
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

  set site(value: string) {
    this._site = value;
  }

  set redeSocial(value: string) {
    this._redeSocial = value;
  }

  set endereco(value: string) {
    this._endereco = value;
  }
}
