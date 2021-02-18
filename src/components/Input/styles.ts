import styled from "styled-components";
import { IInputStylesProps } from "./index.d";

export const Container = styled.div<IInputStylesProps>`
  align-items: center;
  margin-top: 8px;
  margin-bottom: 10px;

  border: ${(props) =>
    props.isValid === false
      ? props.theme.style.borderInvalid
      : props.theme.style.borderValid};

  display: flex;
  justify-content: center;
  width: 100%;
  height: 48px;
  border-radius: 8px;
  padding: 17px 24px 17px 17px;

  input {
    background: inherit;
    border: none;
    width: 100%;
    max-height: 100%;
    min-height: 14px;
    font-family: ${({ theme }) => theme.font.family};

    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 48px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    outline: none;
  }
`;

export const Icon = styled.img`
  display: flex;
  width: 14px;
  height: 14px;
`;
