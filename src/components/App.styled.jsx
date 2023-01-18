import styled from '@emotion/styled';
import { css } from '@emotion/react';

const FormOptions = `animation: borderRadiusChange 100ms ease; 
border-bottom-left-radius: 0; 
border-bottom-right-radius: 0;`;

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0px;
  background: linear-gradient(
    90deg,
    rgb(0, 40, 70),
    rgb(255, 115, 115),
    rgb(255, 175, 123)
  );

  border-bottom-left-radius: 30%;
  border-bottom-right-radius: 30%;
  ${({ isFormOpen }) => (isFormOpen ? FormOptions : '')}

  @keyframes borderRadiusChange {
    0% {
      border-bottom-left-radius: 30%;
      border-bottom-right-radius: 30%;
    }
    50% {
      border-bottom-left-radius: 30%;
      border-bottom-right-radius: 30%;
    }
    100% {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
`;

const Title = styled.h1`
  padding: 15px;
  width: 100%;
  z-index: 99;
  background: inherit;
  margin: 0;
  border-bottom-left-radius: 30%;
  border-bottom-right-radius: 30%;
`;

const buttonStyle = () => css`
  padding: 4px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  background-color: transparent;
  border-radius: 50%;
  font-size: 36px;
  color: #ffffff;
  border: 1px solid #ffffff;
  cursor: pointer;
  transition: transform 300ms ease-in-out, box-shadow 300ms ease-in-out,
    text-shadow 300ms ease-in-out;
  text-shadow: 2px 2px 2px black;
  box-shadow: 2px 2px 2px black;
  &:hover {
    box-shadow: -2px -2px 2px black;
    text-shadow: -2px -2px 2px black;
  }
`;

const ButtonAdd = styled.button`
  ${buttonStyle};
  top: 15px;
  right: 15px;
`;

const ButtonSearch = styled.button`
  ${buttonStyle}
  top: 5px;
  left: 32px;

  & svg {
    filter: drop-shadow(30px 10px 4px #4444dd);
  }
`;

const Counter = styled.div`
  z-index: 1;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 12px;
  width: 100%;

  text-align: center;
  background: linear-gradient(
    360deg,
    rgb(0, 40, 70) 10%,
    rgb(255, 115, 115),
    rgb(255, 175, 123)
  );
  border-top-left-radius: 30%;
  border-top-right-radius: 30%;
`;

const EmptyList = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 36px;
  text-align: center;
`;

export { Title, ButtonAdd, Wrapper, Counter, EmptyList, ButtonSearch };
