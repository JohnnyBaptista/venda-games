'use client';

import { useContext, createContext, PropsWithChildren, useState, useMemo } from 'react'
import Usuario from '../../app/dtos/User/Usuario';
import { ICliente } from '../../domain/repositories/interfaces/ICliente';
import { IGerente } from '../../domain/repositories/interfaces/IGerente';
import { useMainApp } from './MainAppInitContext';
import { TipoUsuario } from '../../domain/repositories/interfaces/IUsuario';
import { useNavigate } from 'react-router-dom';
import SistemaDeJogosEletronicos from '../../infra/repositories/SistemaJogosEletronicos';

export type UserContextData = {
  users: Usuario[];
  handleCadastro: (dados: ICliente | IGerente, tipo: TipoUsuario) => void;
  handleLogin: (email: string) => void;
  currentUser: Usuario;
  tipoUser: TipoUsuario;
  sistemaJogos: SistemaDeJogosEletronicos;
}

export const UserContext = createContext({} as UserContextData);

export default function UserContextProvider({ children }: PropsWithChildren) {
  const { sistemaJogos } = useMainApp();
  const [users, setUsers] = useState<Usuario[]>([...sistemaJogos.clientes, ...sistemaJogos.gerentes]);
  const [currentUser, setCurrentUser] = useState<Usuario>({} as Usuario);
  const [tipoUser, setTipoUser] = useState(TipoUsuario.CLIENTE);
  const navigate = useNavigate();

  const handleCadastro = (dados: ICliente | IGerente, tipo: TipoUsuario) => {
    const result = sistemaJogos.criarUsuario(dados, tipo);
    setUsers(result)
  }

  const handleLogin = (email: string) => {
    const result = sistemaJogos.login(email);
    if (!result) {
      alert('Usuário não encontrado');
      return false;
    }
    setCurrentUser(result);
    if (typeof result === 'object' && 'nivel' in result) {
      setTipoUser(TipoUsuario.CLIENTE)
    } else {
      setTipoUser(TipoUsuario.GERENTE)
    }
    alert(`Seja bem vindo ${result?.nome}!`)
    navigate('/home')
    return true;
  }
  console.log({ users, currentUser })
  const values = useMemo<UserContextData>(() => ({
    users,
    currentUser,
    handleCadastro,
    handleLogin,
    tipoUser,
    sistemaJogos,
  } satisfies UserContextData), [users, currentUser, tipoUser, sistemaJogos])

  return (
    <UserContext.Provider value={values}>
      {children}
    </UserContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useUser() {
  const context = useContext(UserContext)

  return context;
}