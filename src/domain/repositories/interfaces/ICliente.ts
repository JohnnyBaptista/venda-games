import { IUsuario } from "./IUsuario";

interface ICliente extends IUsuario {
    nivel: number;
    clienteEpico: boolean;
    dataCadastro: Date;
}


export type { ICliente }