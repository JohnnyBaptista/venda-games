import Usuario from "../../../app/dtos/User/Usuario";
import { IUsuarioIterator } from "../../repositories/interfaces/IUsuario";

export default class UsuarioIterator implements IUsuarioIterator {
  private index = 0;
  private usuarios: Usuario[];

  constructor(usuarios: Usuario[]) {
    this.usuarios = usuarios;
  }

  hasNext(): boolean {
    return this.index < this.usuarios.length;
  }

  next(): Usuario {
    this.index = this.index + 1;
    return this.usuarios[this.index];
  }
}
