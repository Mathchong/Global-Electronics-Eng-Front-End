import { useState } from "react";
import styled from "styled-components";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
  }
  return (
    <Background>
      <LoginWrapper>
        <div className="LeftSide">
          <div className="Title">
            <h1>Login</h1>
            <h2>Sistema de Homologações</h2>
          </div>
          <div className="FormWrapper">
            <Form onSubmit={handleSubmit}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                required
              />
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                name="senha"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                required
              />
              <button type="submit" disabled={loading}>
                Login
              </button>
            </Form>
          </div>
        </div>
      </LoginWrapper>
    </Background>
  );
}

const Background = styled.div`
  display: flex;

  height: 100vh;
  width: 100%;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    45deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 64, 121, 1) 23%,
    rgba(0, 212, 255, 1) 100%
  );
`;

const LoginWrapper = styled.div`
  background-color: lightblue;
  min-width: 700px;
  max-width: 80vw;
  min-height: 300px;
  max-height: 50vh;
  margin: auto;
  border-radius: 8px;

  display: flex;
  h1 {
    font-size: 2.5em;
    margin-top: 10px;
    margin-bottom: 5px;
  }

  .LeftSide {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .Title {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: left;
    }
  }

  .FormWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    width: 100%;
  }
`;

const Form = styled.form`
  input {
    margin-top: 3px;
    margin-bottom: 10px;
    height: 20px;
    border-radius: 5px;
    border: none;
  }

  button {
    color: black;
    border-radius: 5px;
    border: none;
    margin-top: 15px;
    height: 25px;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
`;
