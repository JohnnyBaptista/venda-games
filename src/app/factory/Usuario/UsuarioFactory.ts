import { ICliente } from "../../../domain/repositories/interfaces/ICliente";
import { IGerente } from "../../../domain/repositories/interfaces/IGerente";
import { IUsuarioFactory, TipoUsuario } from "../../../domain/repositories/interfaces/IUsuario";
import Cliente from "../../dtos/User/Cliente";
import Gerente from "../../dtos/User/Gerente";
import Usuario from "../../dtos/User/Usuario";

export default class UsuarioFactory implements IUsuarioFactory {
  criarUsuario(tipo: TipoUsuario, dados: ICliente | IGerente): Usuario {
    switch (tipo) {
      case TipoUsuario.CLIENTE:
        return new Cliente(dados as ICliente);
      case TipoUsuario.GERENTE:
        return new Gerente(dados as IGerente);
      default:
        throw new Error("Tipo de usuário inválido");
    }
  }
}
