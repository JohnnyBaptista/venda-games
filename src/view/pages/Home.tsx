import { useState } from "react";
import { TipoUsuario } from "../../domain/repositories/interfaces/IUsuario";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { currentUser, tipoUser, users } = useUser();
  const isGerente = tipoUser === TipoUsuario.GERENTE;
  const [showUsers, setShowUsers] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-start' }}>
        <button onClick={() => navigate('/')}>Sair</button>
      </div>
      <div>
        <h1>Bem vindo {currentUser.nome}!</h1>
        {isGerente ? (
          <>
            <div style={{ display: 'flex', width: '100%' }}>
              <div className="actions" style={{ display: 'flex', width: '100%', flexDirection: 'column', marginTop: '10px' }}>
                <h3>Painel do gerente</h3>
                <div style={{ display: 'flex', width: '100%', flexDirection: 'column', margin: '10px', alignItems: 'flex-start', marginTop: '10px' }}>
                  <h4>Ações:</h4>
                  <section style={{ marginTop: '20px' }}>
                    <button onClick={() => setShowUsers(prev => !prev)}>{showUsers ? 'Fechar relatório' : 'Listar usuários'}</button>
                  </section>
                </div>
                <div style={{ width: '100%', display: 'flex', gap: 3, justifyContent: 'space-between', flexWrap: 'wrap', rowGap: 3, }}>
                  {showUsers && (
                    users.map(user => (
                      <div key={`user-${user.codigo}-${user.email}`} style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        color: 'white',
                      }} >
                        <h4 color="white">Usuário: {user.nome}</h4>
                        <span>Codigo: {user.codigo}</span>
                        <span>CEP: {user.cep}</span>
                        <span>CPF: {user.cpf}</span>
                        <span>E-mail: {user.email}</span>
                        <span>Endereço: {user.endereco}</span>
                        <span>RG: {user.rg}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div style={{ display: 'flex', width: '100%' }}>
              <div className="actions" style={{ display: 'flex', width: '100%', flexDirection: 'column' }}>
                <h3>Sistema de jogos</h3>
                <h4>Ações:</h4>
                <section>
                  <button>No actions</button>
                </section>

              </div>
            </div>
          </>
        )}
      </div>
    </div>

  );
}