import { IUsuario } from "./IUsuario";

interface IGerente extends IUsuario {
    salario: number;
    pis: string;
}


export type { IGerente }