import { GeneroEnum } from "../../../domain/repositories/interfaces/IJogo";
import Desenvolvedora from "../../dtos/Jogo/Desenvolvedora";
import Jogo from "../../dtos/Jogo/Jogo";
import {
  Acao,
  Aventura,
  Corrida,
  Esporte,
  RPG,
} from "../../dtos/Jogo/TipoJogos";

export default class JogoFactory {
  public static criarJogo(
    tipo: GeneroEnum,
    codigo: number,
    nome: string,
    descricao: string,
    desenvolvedora: Desenvolvedora,
    dataLancamento: Date,
    valor: number,
    requisitosMinimos: string,
    avaliacao: number,
    comentarios: string,
    disponivel: boolean
  ): Jogo {
    switch (tipo) {
      case GeneroEnum.ACAO:
        return new Acao(
          codigo,
          nome,
          descricao,
          desenvolvedora,
          dataLancamento,
          valor,
          requisitosMinimos,
          avaliacao,
          comentarios,
          disponivel
        );
      case GeneroEnum.AVENTURA:
        return new Aventura(
          codigo,
          nome,
          descricao,
          desenvolvedora,
          dataLancamento,
          valor,
          requisitosMinimos,
          avaliacao,
          comentarios,
          disponivel
        );
      case GeneroEnum.RPG:
        return new RPG(
          codigo,
          nome,
          descricao,
          desenvolvedora,
          dataLancamento,
          valor,
          requisitosMinimos,
          avaliacao,
          comentarios,
          disponivel
        );
      case GeneroEnum.ESPORTE:
        return new Esporte(
          codigo,
          nome,
          descricao,
          desenvolvedora,
          dataLancamento,
          valor,
          requisitosMinimos,
          avaliacao,
          comentarios,
          disponivel
        );
      case GeneroEnum.CORRIDA:
        return new Corrida(
          codigo,
          nome,
          descricao,
          desenvolvedora,
          dataLancamento,
          valor,
          requisitosMinimos,
          avaliacao,
          comentarios,
          disponivel
        );
      default:
        throw new Error("Tipo de jogo inválido");
    }
  }
}

