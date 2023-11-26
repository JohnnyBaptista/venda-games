import UsuarioIterator from "../../../domain/models/Usuario/UsuarioIterator";
import { ICliente } from "../../../domain/repositories/interfaces/ICliente";
import { IGerente } from "../../../domain/repositories/interfaces/IGerente";
import { TipoUsuario } from "../../../domain/repositories/interfaces/IUsuario";
import Usuario from "../../dtos/User/Usuario";
import UsuarioFactory from "../../factory/Usuario/UsuarioFactory";

export default class UsuarioController {
  constructor(
    private usuarioIterator: UsuarioIterator,
    private usuarioFactory: UsuarioFactory
  ) {
    this.usuarioIterator = usuarioIterator;
    this.usuarioFactory = usuarioFactory;
  }

  public listarUsuarios(): Usuario[] {
    const usuarios: Usuario[] = [];
    while (this.usuarioIterator.hasNext()) {
      const usuario = this.usuarioIterator.next();
      usuarios.push(usuario);
    }
    return usuarios;
  }

  public criarNovoUsuario(
    tipo: TipoUsuario,
    dados: ICliente | IGerente
  ): Usuario {
    return this.usuarioFactory.criarUsuario(tipo, dados);
  }

  getUsuarioByCodigo(codigo: number): Usuario | undefined {
    while (this.usuarioIterator.hasNext()) {
      const usuario = this.usuarioIterator.next();
      if (usuario.codigo === codigo) {
        return usuario;
      }
    }
    return undefined; // Retorna undefined se não encontrar nenhum usuário com o código especificado
  }
}
