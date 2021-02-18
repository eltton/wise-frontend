import React from "react";
import { useState } from "react";
import InputX from "../Input";
import { INPUT_TYPE } from "../Input/index.d";

import {
  LoginForm,
  WelcomeMessage,
  Tip,
  Label,
  Button,
  P,
} from "../../styles/form";

import validateEmail from "../../validators/email";
import validatePassword from "../../validators/password";
import { ChangeEvent } from "react";
import { FormEvent } from "react";
import { ErrorMessage } from "../../styles/login";

const Form: React.FC<any> = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [isEmailValid, setIsEmailValid] = useState<boolean | undefined>(
    undefined
  );
  const [isPasswordValid, setIsPasswordValid] = useState<boolean | undefined>(
    undefined
  );

  async function handleEmailBlur(e: { target: { value: any } }): Promise<void> {
    try {
      await validateEmail.validate({
        email: e.target.value,
      });

      setIsEmailValid(true);
    } catch {
      setIsEmailValid(false);
    }
  }

  /**
   * I handle the email value change.
   *
   * :returns: promise with nothing
   */
  function handleEmailChange(e: ChangeEvent<HTMLInputElement>): void {
    // set current value at local state
    setEmail(e.target.value);

    // reset email valid flag
    setIsEmailValid(undefined);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
    // prevent reload page
    e.preventDefault();
  }

  function handlePasswordChange(e: ChangeEvent<HTMLInputElement>): void {
    // set current value at local state
    setPassword(e.target.value);

    // reset password valid flag
    setIsPasswordValid(undefined);
  }

  async function handlePasswordBlur(e): Promise<void> {
    // validate password value
    try {
      await validatePassword.validate({
        password: e.target.value,
      });

      // valid password: set valid password flag
      setIsPasswordValid(true);
    } catch {
      // invalid password: set password flag as invalid
      setIsPasswordValid(false);
    }
  }

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
