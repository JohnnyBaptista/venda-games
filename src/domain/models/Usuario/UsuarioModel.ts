import UsuarioController from "../../../app/controllers/Usuario/UsuarioController";
import { ICliente } from "../../repositories/interfaces/ICliente";
import { IGerente } from "../../repositories/interfaces/IGerente";
import {  TipoUsuario } from "../../repositories/interfaces/IUsuario";

export default class UsuarioModel {
  // chama os métodos
  constructor(
    private usuarioController: UsuarioController,
  ) {
    this.usuarioController = usuarioController;
  }

  public login(email: string) {
    console.log("Buscando usuário por email: ", { email });
    const result = this.usuarioController.getUsuarioByEmail(email);
    if (result) {
      return result;
    }
    return undefined;
  }

  public criarUsuario(dados: ICliente | IGerente, tipo: TipoUsuario) {
    const result = this.usuarioController.criarNovoUsuario(tipo, dados);
    console.log("Criando usuário! ", { usuario: result });
    return result;
  }
}

