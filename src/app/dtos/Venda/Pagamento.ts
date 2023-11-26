import {
  IBoleto,
  ICartaoCredito,
  IPagamento,
  IPix,
} from "../../../domain/repositories/interfaces/IPagamento";

class Pagamento implements IPagamento {
  private _codigoNota: number;

  constructor(codigoNota: number) {
    this._codigoNota = codigoNota;
  }

  // Getter
  get codigoNota(): number {
    return this._codigoNota;
  }

  // Setter
  set codigoNota(value: number) {
    this._codigoNota = value;
  }

  // Método toString
  toString(): string {
    return `Código da Nota: ${this._codigoNota}`;
  }
}

class Boleto implements IBoleto {
  private _numero: string;

  constructor(numero: string) {
    this._numero = numero;
  }

  // Getter
  get numero(): string {
    return this._numero;
  }

  // Setter
  set numero(value: string) {
    this._numero = value;
  }

  // Método gerarCodigoBoleto
  gerarCodigoBoleto(): string {
    // Lógica para gerar o código do boleto
    return `Código do Boleto: ${Math.floor(Math.random() * 1000000)}`;
  }

  // Método toString
  toString(): string {
    return `Número do Boleto: ${this._numero}`;
  }
}

class CartaoCredito implements ICartaoCredito {
  private _nome: string;
  private _numero: string;
  private _bandeira: string;

  constructor(nome: string, numero: string, bandeira: string) {
    this._nome = nome;
    this._numero = numero;
    this._bandeira = bandeira;
  }

  get nome(): string {
    return this._nome;
  }

  get numero(): string {
    return this._numero;
  }

  get bandeira(): string {
    return this._bandeira;
  }

  // Setters
  set nome(value: string) {
    this._nome = value;
  }

  set numero(value: string) {
    this._numero = value;
  }

  set bandeira(value: string) {
    this._bandeira = value;
  }

  toString(): string {
    return `Cartão de Crédito: ${this._bandeira} - ${this._numero}`;
  }
}

class Pix implements IPix {
  private _codigoPix: string;

  constructor(codigoPix: string) {
    this._codigoPix = codigoPix;
  }

  get codigoPix(): string {
    return this._codigoPix;
  }

  set codigoPix(value: string) {
    this._codigoPix = value;
  }

  gerarCodigoPix(): string {
    return `Código PIX: ${Math.floor(Math.random() * 1000000)}`;
  }

  toString(): string {
    return `Código PIX: ${this._codigoPix}`;
  }
}

export { Pix, Boleto, CartaoCredito };

export default Pagamento;
