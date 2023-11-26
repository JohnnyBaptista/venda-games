import { GeneroEnum } from "../../../domain/repositories/interfaces/IJogo";
import Jogo from "../../dtos/Jogo/Jogo";
import {
  Acao,
  Aventura,
  Corrida,
  Esporte,
  RPG,
} from "../../dtos/Jogo/TipoJogos";

interface JogoFactoryOperation {
  create(dados: Jogo): Jogo;
}

export default class JogoFactory {
  public static criarJogo(tipo: GeneroEnum, dados: Jogo): Jogo {
    const operations: Record<GeneroEnum, JogoFactoryOperation> = {
      [GeneroEnum.ACAO]: {
        create: (dados) => new Acao(dados),
      },
      [GeneroEnum.AVENTURA]: {
        create: (dados) => new Aventura(dados),
      },
      [GeneroEnum.CORRIDA]: {
        create: (dados) => new Corrida(dados),
      },
      [GeneroEnum.ESPORTE]: {
        create: (dados) => new Esporte(dados),
      },
      [GeneroEnum.RPG]: {
        create: (dados) => new RPG(dados),
      },
    };

    return operations[tipo].create(dados)
  }
}

