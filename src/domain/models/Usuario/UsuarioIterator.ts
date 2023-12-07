import Usuario from "../../../app/dtos/User/Usuario";
import { Iterator } from "../../repositories/interfaces/Iterator";
export default class UsuarioIterator implements Iterator<Usuario> {
  private index = 0;
  private usuarios: Usuario[];

  constructor(usuarios: Usuario[]) {
    this.usuarios = usuarios;
    console.log(this.usuarios);
  }

  hasNext(): boolean {
    return this.index < this.usuarios.length;
  }

  next(): Usuario {
    return this.usuarios[this.index++];
  }

  update(usuarios: Usuario[]){
    this.usuarios = usuarios;
  }
}
