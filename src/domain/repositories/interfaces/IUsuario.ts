import Usuario from "../../../app/dtos/User/Usuario";
import { ICliente } from "./ICliente";
import { IGerente } from "./IGerente";

interface IUsuario {
  codigo: number;
  nome: string;
  cpf: string;
  rg: string;
  dataNascimento: Date;
  endereco: string;
  cep: string;
  email: string;
}
interface IUsuarioIterator {
  hasNext(): boolean;
  next(): Usuario;
}

export enum TipoUsuario {
  CLIENTE = "CLIENTE",
  GERENTE = "GERENTE",
}

interface IUsuarioFactory {
  criarUsuario(tipo: TipoUsuario, dados: ICliente | IGerente): Usuario;
}

export type { IUsuario, IUsuarioIterator, IUsuarioFactory };

