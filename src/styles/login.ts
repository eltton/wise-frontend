import styled, { keyframes } from "styled-components";

export const Container = styled.main`
  height: 100vh;
  display: flex;
  align-items: stretch;
  position: relative;
`;

export const Background = styled.div`
  width: 100%;
  height: 50%;
  background-image: linear-gradient(
      0deg,
      #130525 0%,
      rgba(105, 57, 153, 0) 100%
    ),
    url("/assets/bg.png");
  background-position-x: center;
  background-size: cover;
  @media screen and (min-width: 768px) {
    max-width: 40%;
    height: 100%;
  }
  @media screen and (min-width: 1366px) {
    max-width: 100%;
    height: 100%;
  }
`;

export const Content = styled.div`
  border-radius: 8px;
  position: absolute;
  background-color: #faf5ff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 311px;
  @media screen and (min-width: 768px) {
    position: relative;
    width: 100%;
    left: 0%;
    top: 0%;
    transform: translate(-0%, -0%);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  @media screen and (min-width: 1366px) {
    width: 70%;
    justify-content: left;
    margin-left: 100px;
  }
`;

export const ErrorMessage = styled.p`
  align-items: center;
  color: ${({ theme }) => theme.colors.error};
  display: flex;
  font-size: 10px;
  height: 14px;
  line-height: 48px;
  margin-left: 20px;
  margin-top: 8px;
  @media (max-width: 642px) {
    margin-bottom: 0px;
  }
`;
