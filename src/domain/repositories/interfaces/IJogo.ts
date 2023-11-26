import Desenvolvedora from "../../../app/dtos/Jogo/Desenvolvedora";

enum GeneroEnum {
  ACAO = "Ação",
  AVENTURA = "Aventura",
  RPG = "RPG",
  ESPORTE = "Esporte",
  CORRIDA = "Corrida",
}

interface IDesenvolvedora {
  codigo: number;
  cnpj: string;
  nome: string;
  site: string;
  redeSocial: string;
  endereco: string;
}

interface IJogo {
  codigo: number;
  nome: string;
  descricao: string;
  desenvolvedora: Desenvolvedora;
  dataLancamento: Date;
  valor: number;
  requisitosMinimos: string;
  avaliacao: number;
  comentarios: string;
  disponivel: boolean;
}

export { GeneroEnum };
export type { IJogo, IDesenvolvedora };

