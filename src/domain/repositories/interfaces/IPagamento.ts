interface IPagamento {
    codigoNota: number;
    toString: () => string;
}

interface IBoleto {
    numero: string;
    gerarCodigoBoleto: () => string;
    toString: () => string;
}

interface ICartaoCredito {
    nome: string;
    numero: string;
    bandeira: string;
    toString: () => string;
}

interface IPix {
    codigoPix: string;
    toString: () => string;
    gerarCodigoPix: () => string;
}

export type { IPagamento, ICartaoCredito, IPix, IBoleto }