import styled from "styled-components";

export const LoginForm = styled.form`
  border-radius: 8px;
  padding-left: 28px;
  padding-right: 28px;
  max-width: 311px;
  margin-bottom: -40px; //mobile
`;

export const WelcomeMessage = styled.h1`
  font-weight: 400;
  font-style: normal;
  text-align: center;
  color: #383e71;
  font-size: 24px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    text-align: left;
    line-height: 48px;
  }
`;

export const Tip = styled.h3`
  font-weight: 600;
  font-size: 11px;
  line-height: 20px;
  text-align: center;
  color: #989fdb;
  border: 0;
  width: 100%;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    text-align: left;
  }
`;

export const Label = styled.label`
  margin-left: 10px;
  font-weight: 400;
  font-size: 10px;
`;

export const Button = styled.button`
  width: 168px;
  padding: 14px;
  background: linear-gradient(267.79deg, #383e71 0%, #9d25b0 99.18%);
  border-radius: 8px;
  border: none;
  outline: none;

  color: #fff;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;

  position: relative; //mobile
  bottom: -55px;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;

  @media screen and (min-width: 768px) {
    box-shadow: 0px 10px 25px #cf99db;
    width: 100%;
  }
`;

export const P = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 10px;
  text-align: center;
  color: #989fdb;

  position: relative; //mobile
  bottom: -55px;

  a {
    color: #989fdb;
    text-decoration: underline;
  }
  @media screen and (min-width: 768px) {
    a {
      color: #9d25b0;
      text-decoration: underline;
    }
  }
`;
