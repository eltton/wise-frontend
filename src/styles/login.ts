import styled, { keyframes } from "styled-components";

export const Container = styled.main`
  /* border: solid 5px pink; */
  height: 100vh;
  display: flex;
  align-items: stretch;
  position: relative;
`;

export const Background = styled.div`
  /* border: solid 5px blue; */
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
`;

export const Content = styled.div`
  /* border: solid 5px green; */
  border-radius: 8px;
  position: absolute;
  background-color: #faf5ff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 80%;
  /* height: 100%; */
  /* top: 50%; */
  /* left: 50%; */
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center; */
  /* width: 100%; */
  /* max-width: 600px; */
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
