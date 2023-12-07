import { IUsuario } from "./IUsuario";

interface ICliente extends IUsuario {
    nivel: number;
    clienteEpico: boolean;
}

export type { ICliente }
