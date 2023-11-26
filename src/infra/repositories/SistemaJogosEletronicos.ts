// armazena dados do sistema

import Jogo from "../../app/dtos/Jogo/Jogo";
import Cliente from "../../app/dtos/User/Cliente";
import Gerente from "../../app/dtos/User/Gerente";
import { ISistemaDeJogosEletronicos } from "../../domain/repositories/interfaces/ISistemaDeJogosEletronicos";

export default class SistemaDeJogosEletronicos {
  private _nomePlataforma: string;
  private _clientes: Array<Cliente>;
  private _gerentes: Array<Gerente>;
  private _jogos: Array<Jogo>;

  constructor({
    clientes,
    gerentes,
    nomePlataforma,
    jogos,
  }: ISistemaDeJogosEletronicos) {
    this._clientes = clientes;
    this._gerentes = gerentes;
    this._nomePlataforma = nomePlataforma;
    this._jogos = jogos;
  }

  get nomePlataforma(): string {
    return this._nomePlataforma;
  }

  get clientes(): Cliente[] {
    return this._clientes;
  }

  get gerentes(): Gerente[] {
    return this._gerentes;
  }

  get jogos(): Jogo[] {
    return this._jogos;
  }

  set nomePlataforma(value: string) {
    this._nomePlataforma = value;
  }

  set jogos(value: Jogo[]) {
    this._jogos = value;
  }

  set clientes(value: Cliente[]) {
    this._clientes = value;
  }

  set gerentes(value: Gerente[]) {
    this._gerentes = value;
  }
}

