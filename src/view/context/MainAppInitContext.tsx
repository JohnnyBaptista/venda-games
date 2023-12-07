'use client';

import { useContext, createContext, PropsWithChildren } from 'react'
import SistemaDeJogosEletronicos from '../../infra/repositories/SistemaJogosEletronicos';

export type MainAppContextData = {
    sistemaJogos: SistemaDeJogosEletronicos;
}

// const usuarios: IUsuario[] = [
//     {
//         codigo: 1,
//         nome: "João Silva",
//         cpf: "123.456.789-01",
//         rg: "1234567",
//         endereco: "Rua A, 123",
//         cep: "12345-678",
//         email: "joao.silva@email.com",
//     },
//     {
//         codigo: 2,
//         nome: "Maria Oliveira",
//         cpf: "987.654.321-09",
//         rg: "9876543",
//         endereco: "Avenida B, 456",
//         cep: "54321-876",
//         email: "maria.oliveira@email.com",
//     },
//     {
//         codigo: 3,
//         nome: "Carlos Santos",
//         cpf: "456.789.012-34",
//         rg: "4567890",
//         endereco: "Rua C, 789",
//         cep: "98765-432",
//         email: "carlos.santos@email.com",
//     },
// ];

export const MainAppContext = createContext({} as MainAppContextData);

export default function MainAppContextProvider({ children }: PropsWithChildren) {
    const sistemaJogos = new SistemaDeJogosEletronicos("Venda games")
    const { clientes, gerentes } = sistemaJogos;
    console.log({clientes, gerentes})
   

    console.log({ sistemaJogos })
    return (
        <MainAppContext.Provider value={{ sistemaJogos }}>
            {children}
        </MainAppContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useMainApp() {
    const context = useContext(MainAppContext)

    return context;
}