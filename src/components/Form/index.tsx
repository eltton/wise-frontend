import React from "react";
import styled from "styled-components";

const LoginForm = styled.form`
  border-radius: 8px;
  padding-left: 28px;
  padding-right: 28px;
  width: 100%;
  margin-bottom: -50px; //mobile
`;

const WelcomeMessage = styled.h1`
  font-weight: 400;
  font-style: normal;
  text-align: center;
  color: #383e71;
`;

const Tip = styled.h3`
  font-weight: 600;
  font-size: 11px;
  line-height: 20px;
  text-align: center;
  color: #989fdb;
  border: 0;
  width: 100%;
`;

const Label = styled.label`
  font-weight: 400;
  font-size: 10px;
`;

const Input = styled.input`
  margin-top: 8px;
  width: 100%;
  height: 48px;
  border: 1px solid #989fdb;
  box-sizing: border-box;
  border-radius: 8px;
  padding-left: 17px;
  font-size: 12px;
  font-weight: 400;
  line-height: 48px;
  margin-bottom: 10px;
  color: #989fdb;
  background: transparent;
  font-family: "Montserrat";
`;

const Button = styled.button`
  width: 70%;
  padding: 14px;
  background: linear-gradient(267.79deg, #383e71 0%, #9d25b0 99.18%);
  /* box-shadow: 5px 1px 15px #cf99db; */
  border-radius: 8px;
  border: none;
  outline: none;

  color: #fff;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;

  position: relative; //mobile
  bottom: -60px;
  /* top: 50%; */
  left: 50%;
  transform: translate(-50%, -50%);
`;

const P = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 10px;
  text-align: center;
  color: #989fdb;

  position: relative; //mobile
  bottom: -50px;

  a {
    color: #989fdb;
  }
`;

const Form: React.FC = () => {
  return (
    <>
      <LoginForm>
        <WelcomeMessage>
          Olá, seja <br />
          bem-vindo!
        </WelcomeMessage>
        <Tip>Para acessar a plataforma, faça seu login.</Tip>

        <Label htmlFor="email">E-MAIL</Label>

        <Input name="email" placeholder="user.name@mail.com" id="email" />

        <Label htmlFor="password">SENHA</Label>

        <Input
          name="password"
          type="password"
          placeholder="*******"
          id="password"
          autoComplete="off"
        />

        <Button type="submit">ENTRAR</Button>

        <P>Esqueceu seu login ou senha?</P>
        <P>
          Clique <a href="#">aqui</a>
        </P>
      </LoginForm>
    </>
  );
};

export default Form;
