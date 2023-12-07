// armazena dados do sistema

import UsuarioController from "../../app/controllers/Usuario/UsuarioController";
import Jogo from "../../app/dtos/Jogo/Jogo";
import Cliente from "../../app/dtos/User/Cliente";
import Gerente from "../../app/dtos/User/Gerente";
import Usuario from "../../app/dtos/User/Usuario";
import UsuarioFactory from "../../app/factory/Usuario/UsuarioFactory";
import UsuarioIterator from "../../domain/models/Usuario/UsuarioIterator";
import UsuarioModel from "../../domain/models/Usuario/UsuarioModel";
import { ICliente } from "../../domain/repositories/interfaces/ICliente";
import { IGerente } from "../../domain/repositories/interfaces/IGerente";
import { ISistemaDeJogosEletronicos } from "../../domain/repositories/interfaces/ISistemaDeJogosEletronicos";
import {
  IUsuario,
  TipoUsuario,
} from "../../domain/repositories/interfaces/IUsuario";

export default class SistemaDeJogosEletronicos
  implements ISistemaDeJogosEletronicos
{
  private _nomePlataforma: string;
  private _clientes: Array<Cliente> = [];
  private _gerentes: Array<Gerente> = [];
  private _jogos: Array<Jogo> = [];

  private usuarioController: UsuarioController;
  private usuarioIterator: UsuarioIterator;
  private usuarioModel: UsuarioModel;
  private usuarioFactory: UsuarioFactory;

  constructor(nomePlataforma: string) {
    this._nomePlataforma = nomePlataforma;

    this.usuarioIterator = new UsuarioIterator([]);
    this.usuarioFactory = new UsuarioFactory();
    this.usuarioController = new UsuarioController(
      this.usuarioIterator,
      this.usuarioFactory
    );
    this.usuarioModel = new UsuarioModel(this.usuarioController);

    const usuario1: IUsuario = {
      codigo: 1,
      nome: "Usuário 1",
      cpf: "123.456.789-01",
      rg: "1234567",
      endereco: "Rua A, 123",
      cep: "12345-678",
      email: "usuario1@example.com",
    };

    const usuario2: IUsuario = {
      codigo: 2,
      nome: "Usuário 2",
      cpf: "987.654.321-01",
      rg: "7654321",
      endereco: "Rua B, 456",
      cep: "98765-432",
      email: "usuario2@example.com",
    };

    const usuario3: IUsuario = {
      codigo: 3,
      nome: "Usuário 3",
      cpf: "987.654.311-01",
      rg: "7654321",
      endereco: "Rua C, 456",
      cep: "98765-432",
      email: "usuario3@example.com",
    };

    // Instâncias de Clientes
    const cliente1: ICliente = {
      ...usuario1,
      nivel: 2,
      clienteEpico: false,
    };
    this.criarUsuario(cliente1, TipoUsuario.CLIENTE);

    const cliente2: ICliente = {
      ...usuario2,
      nivel: 3,
      clienteEpico: true,
    };
    this.criarUsuario(cliente2, TipoUsuario.CLIENTE);
    // Instâncias de Gerentes

    const gerente: IGerente = {
      ...usuario3,
      salario: 7000,
      pis: "987-654-321-01",
    };
    this.criarUsuario(gerente, TipoUsuario.GERENTE);
    const users = [...this._clientes, ...this._gerentes];
    this.usuarioController.uptadeUsuarios(users);
  }

  public listarUsers() {
    return this.usuarioController.listarUsuarios();
  }

  public criarUsuario(dados: ICliente | IGerente, tipo: TipoUsuario) {
    const user = this.usuarioModel.criarUsuario(dados, tipo);
    if (tipo === TipoUsuario.CLIENTE) {
      this._clientes.push(user as Cliente);
    } else {
      this._gerentes.push(user as Gerente);
    }
    return [...this._clientes, ...this._gerentes] as Usuario[];
  }

  public login(email: string) {
    return this.usuarioModel.login(email);
  }

  /// getters e setters

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

