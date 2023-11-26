import { ICliente } from "../../../domain/repositories/interfaces/ICliente";
import { IGerente } from "../../../domain/repositories/interfaces/IGerente";
import {
  IUsuarioFactory,
  TipoUsuario,
} from "../../../domain/repositories/interfaces/IUsuario";
import Cliente from "../../dtos/User/Cliente";
import Gerente from "../../dtos/User/Gerente";
import Usuario from "../../dtos/User/Usuario";

interface UsuarioFactoryOperation {
  create: (dados: ICliente | IGerente) => Usuario;
}

export default class UsuarioFactory implements IUsuarioFactory {
  private operations: Record<TipoUsuario, UsuarioFactoryOperation> = {
    [TipoUsuario.CLIENTE]: {
      create: (dados) => new Cliente(dados as ICliente),
    },
    [TipoUsuario.GERENTE]: {
      create: (dados) => new Gerente(dados as IGerente),
    },
  };

  public criarUsuario(tipo: TipoUsuario, dados: ICliente | IGerente): Usuario {
    return this.operations[tipo].create(dados);
  }
}
