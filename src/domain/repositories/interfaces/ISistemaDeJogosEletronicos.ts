import Cliente from "../../../app/dtos/User/Cliente";
import Gerente from "../../../app/dtos/User/Gerente";

interface ISistemaDeJogosEletronicos {
  nomePlataforma: string;
  clientes: Array<Cliente>;
  gerentes: Array<Gerente>;
}

export type { ISistemaDeJogosEletronicos };
