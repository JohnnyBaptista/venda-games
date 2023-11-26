import { IUsuario } from "./IUsuario";

interface IGerente extends IUsuario {
    salario: number;
    pis: string;
    dataAdmissao: Date;
}


export type { IGerente }