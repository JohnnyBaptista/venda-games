import { useState } from 'react'
import './App.css'
import { Container, Input, Label, LoginContainer, Select, Title } from './LoginStyle'
import { TipoUsuario } from './domain/repositories/interfaces/IUsuario'
import { ICliente } from './domain/repositories/interfaces/ICliente'
import { IGerente } from './domain/repositories/interfaces/IGerente'
import { useUser } from './view/context/UserContext'

function Login() {
  const [tipoUser, setTipoUser] = useState<TipoUsuario>(TipoUsuario.CLIENTE);
  const [email, setEmail] = useState<string>("");
  const [cpf, setCPF] = useState<string>("");
  const [nome, setNome] = useState<string>("");
  const [rg, setRg] = useState<string>("");
  const [endereco, setEndereco] = useState<string>("");
  const [cep, setCep] = useState<string>("");
  const [nivel, setNivel] = useState<number>(0);
  const [clienteEpico, setClienteEpico] = useState<boolean>(false);
  const [salario, setSalario] = useState<number>(0);
  const [pis, setPis] = useState<string>("");
  const [isLogin, setIsLogin] = useState(false);

  const { handleCadastro, handleLogin } = useUser();
  const handleSubmit = () => {
    let usuarioData: ICliente | IGerente;
    if (!isLogin) {

      if (tipoUser === TipoUsuario.CLIENTE) {
        usuarioData = {
          codigo: Math.floor(Math.random() * 1000), // Aqui você deve fornecer um valor apropriado
          nome,
          cpf,
          rg,
          endereco,
          cep,
          email,
        } as ICliente;
      } else {
        usuarioData = {
          codigo: Math.floor(Math.random() * 10000), // Aqui você deve fornecer um valor apropriado
          nome,
          cpf,
          rg,
          endereco,
          cep,
          email,
        } as IGerente;
      }

      if (tipoUser === TipoUsuario.CLIENTE) {
        usuarioData = {
          ...usuarioData,
          nivel,
          clienteEpico,
        };
      } else {
        usuarioData = {
          ...usuarioData,
          salario,
          pis,
        };
      }
      handleCadastro(usuarioData, tipoUser);
      return;
    }
    handleLogin(email);
  };

  return (
    <Container>
      <LoginContainer>
        <Title>{isLogin ? 'Login' : 'Cadastro'}</Title>
        {!isLogin ? (
          <span
            onClick={() => setIsLogin(true)}
            style={{ color: '#42a7f5', textDecoration: 'underline', cursor: 'pointer' }}
          >
            Já tenho conta, fazer login
          </span>
        ) :
          <span
            onClick={() => setIsLogin(false)}
            style={{ color: '#42a7f5', textDecoration: 'underline', cursor: 'pointer' }}
          >
            Não tenho conta, cadastrar
          </span>
        }
        <Label>E-mail</Label>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="E-mail"
        />
        {!isLogin && (
          <>
            <Label>CPF</Label>
            <Input
              onChange={(e) => setCPF(e.target.value)}
              type="text"
              placeholder="CPF"
            />

            <Label>Nome</Label>
            <Input
              onChange={(e) => setNome(e.target.value)}
              type="text"
              placeholder="Nome"
            />

            <Label>RG</Label>
            <Input
              onChange={(e) => setRg(e.target.value)}
              type="text"
              placeholder="RG"
            />

            <Label>Endereço</Label>
            <Input
              onChange={(e) => setEndereco(e.target.value)}
              type="text"
              placeholder="Endereço"
            />

            <Label>CEP</Label>
            <Input
              onChange={(e) => setCep(e.target.value)}
              type="text"
              placeholder="CEP"
            />

            <Label>Tipo Usuario</Label>
            <Select
              onChange={(e) => setTipoUser(e.target.value as TipoUsuario)}
              value={tipoUser}
              placeholder="Tipo usuário"
            >
              <option value={TipoUsuario.GERENTE}>Gerente</option>
              <option value={TipoUsuario.CLIENTE}>Cliente</option>
            </Select>

            {tipoUser === TipoUsuario.CLIENTE && (
              <>
                <Label>Nível</Label>
                <Input
                  onChange={(e) => setNivel(Number(e.target.value))}
                  type="number"
                  placeholder="Nível"
                />

                <Label>Cliente Épico</Label>
                <Input
                  onChange={(e) => setClienteEpico(e.target.checked)}
                  type="checkbox"
                />

              </>
            )}

            {tipoUser === TipoUsuario.GERENTE && (
              <>
                <Label>Salário</Label>
                <Input
                  onChange={(e) => setSalario(Number(e.target.value))}
                  type="number"
                  placeholder="Salário"
                />

                <Label>PIS</Label>
                <Input
                  onChange={(e) => setPis(e.target.value)}
                  type="text"
                  placeholder="PIS"
                />
              </>
            )}
          </>
        )}
        <button onClick={handleSubmit}>
          {isLogin ? 'Entrar' : 'Cadastrar'}
        </button>
      </LoginContainer>
    </Container>
  );
}

export default Login;

