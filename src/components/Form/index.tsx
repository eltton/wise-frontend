import React from "react";
import { useState } from "react";
import InputX from "../Input";
import { INPUT_TYPE } from "../Input/index.d";

import { LoginForm, WelcomeMessage, Tip, Label, Button, P } from "./styles";

import validateEmail from "../../validators/email";
import validatePassword from "../../validators/password";
import { ChangeEvent } from "react";
import { FormEvent } from "react";
import { ErrorMessage } from "../../styles/login";
import * as userAPI from "../../aggregates/user/api";

import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import notification from "antd/lib/notification";
import { useEffect } from "react";

import { IAppState } from "../../aggregates/index.d";

export const Form: React.FC<any> = () => {
  const [email, setEmail] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean | undefined>(
    undefined
  );
  const [isPasswordValid, setIsPasswordValid] = useState<boolean | undefined>(
    undefined
  );
  const [password, setPassword] = useState<string>("");

  const isAuthorized = useSelector(
    (state: IAppState) => state.user.isAuthorized
  );

  const isAuthorizing = useSelector(
    (state: IAppState) => state.user.isAuthorizing
  );

  const loginError = useSelector((state: IAppState) => state.user.loginError);

  const router = useRouter();

  async function handlePasswordBlur(e): Promise<void> {
    try {
      await validatePassword.validate({
        password: e.target.value,
      });

      setIsPasswordValid(true);
    } catch {
      setIsPasswordValid(false);
    }
  }

  async function handleEmailBlur(e): Promise<void> {
    try {
      await validateEmail.validate({
        email: e.target.value,
      });

      setIsEmailValid(true);
    } catch {
      setIsEmailValid(false);
    }
  }

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>): void {
    // set current value at local state
    setEmail(e.target.value);

    setIsEmailValid(undefined);
  }

  function handlePasswordChange(e: ChangeEvent<HTMLInputElement>): void {
    setPassword(e.target.value);

    setIsPasswordValid(undefined);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();

    await userAPI.login(email, password);
  }

  useEffect(() => {
    if (loginError !== null) {
      notification.error({
        message: "Erro",
        description: "Usuário ou senha inválidos",
        placement: "bottomLeft",
      });
    }
  }, [loginError]);

  useEffect(() => {
    if (isAuthorized === true) {
      // router.push("/Dashbord");
      notification.success({
        message: "Sucess",
        description: "Login efetuado com sucesso!",
        placement: "bottomLeft",
      });
    }
  }, [isAuthorized]);

  return (
    <>
      <LoginForm onSubmit={handleSubmit}>
        <WelcomeMessage>
          Olá, seja <br />
          bem-vindo!
        </WelcomeMessage>
        <Tip>Para acessar a plataforma, faça seu login.</Tip>
        <Label htmlFor="email">E-MAIL</Label>
        <InputX
          placeholder="user.name@mail.com"
          type={INPUT_TYPE.EMAIL}
          onChangeCallback={handleEmailChange}
          isValid={isEmailValid}
          onBlur={handleEmailBlur}
          id="email"
        />
        {isEmailValid === false && (
          <ErrorMessage>Digite um e-mail válido;</ErrorMessage>
        )}
        <Label htmlFor="password">SENHA</Label>
        <InputX
          placeholder="*******"
          type={INPUT_TYPE.PASSWORD}
          onChangeCallback={handlePasswordChange}
          isValid={isPasswordValid}
          onBlur={handlePasswordBlur}
          autoComplete="off"
          id="password"
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
