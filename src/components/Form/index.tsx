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
// import {useState} from 'react';

/**
 * TYPES
 */
// import {ChangeEvent} from 'react';
// import {FormEvent} from 'react';
// import {INPUT_TYPE} from '../components/Input/index.d';
import { IAppState } from "../../aggregates/index.d";

const Form: React.FC<any> = () => {
  // define getters and setters
  const [email, setEmail] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean | undefined>(
    undefined
  );
  const [isPasswordValid, setIsPasswordValid] = useState<boolean | undefined>(
    undefined
  );
  const [password, setPassword] = useState<string>("");

  // get isAuthorized flag from state
  const isAuthorized = useSelector(
    (state: IAppState) => state.user.isAuthorized
  );

  const isAuthorizing = useSelector(
    (state: IAppState) => state.user.isAuthorizing
  );

  // get login erros from state
  const loginError = useSelector((state: IAppState) => state.user.loginError);

  // get router instance
  const router = useRouter();

  /**
   * I handle the password field blur.
   *
   * :returns: promise with nothing
   */
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

  /**
   * I handle the email field blur.
   *
   * :returns: promise with nothing
   */
  async function handleEmailBlur(e): Promise<void> {
    // validate email value
    try {
      await validateEmail.validate({
        email: e.target.value,
      });

      // valid email: set valid email flag
      setIsEmailValid(true);
    } catch {
      // invalid email: set email flag as invalid
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

  /**
   * I handle the password value change.
   *
   * :returns: promise with nothing
   */
  function handlePasswordChange(e: ChangeEvent<HTMLInputElement>): void {
    // set current value at local state
    setPassword(e.target.value);

    // reset password valid flag
    setIsPasswordValid(undefined);
  }

  /**
   * I handle the submit event.
   *
   * :returns: promise with nothing
   */
  async function handleSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
    // prevent reload page
    e.preventDefault();

    // call API
    await userAPI.login(email, password);
  }

  // listen to user login errors
  useEffect(() => {
    // there is login error: show error message
    if (loginError !== null) {
      notification.error({
        message: "Erro",
        description: "Usuário ou senha inválidos",
        placement: "bottomLeft",
      });
      // console.log(notification.error);
    }
  }, [loginError]);

  // listen to user authorized changes
  useEffect(() => {
    // user authorized: go to welcome page
    if (isAuthorized === true) {
      router.push("/welcome");
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
