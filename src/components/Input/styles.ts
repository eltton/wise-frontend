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
    min-height: 18px;
    font-family: ${({ theme }) => theme.font.family};

    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 60px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    outline: none;
    /* height: 100%; */

    ::-webkit-input-placeholder {
      /* Edge */
      color: ${({ theme }) => theme.colors.text};
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: ${({ theme }) => theme.colors.text};
    }

    ::placeholder {
      color: ${({ theme }) => theme.colors.text};
    }
  }
`;

export const Icon = styled.img`
  display: flex;
  width: 14px;
  height: 14px;
`;
