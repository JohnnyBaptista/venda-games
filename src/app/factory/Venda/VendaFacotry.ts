import { IVenda } from "../../../domain/repositories/interfaces/IVenda";
import Venda from "../../dtos/Venda/Venda";

export default class VendaFactory {
    static criarVenda(dados: IVenda): Venda {
      return new Venda(dados);
    }
  }