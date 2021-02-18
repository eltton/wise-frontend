import styled from "styled-components";

export const LoginForm = styled.form`
  border-radius: 8px;
  padding-left: 28px;
  padding-right: 28px;
  width: 100%;
  margin-bottom: -50px; //mobile
`;

export const WelcomeMessage = styled.h1`
  font-weight: 400;
  font-style: normal;
  text-align: center;
  color: #383e71;
`;

export const Tip = styled.h3`
  font-weight: 600;
  font-size: 11px;
  line-height: 20px;
  text-align: center;
  color: #989fdb;
  border: 0;
  width: 100%;
`;

export const Label = styled.label`
  margin-left: 10px;
  font-weight: 400;
  font-size: 10px;
`;

export const Button = styled.button`
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

export const P = styled.p`
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
