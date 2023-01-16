import styled from '@emotion/styled';

const FormOptions = `animation: borderRadiusChange 500ms ease; 
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

const Button = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 36px;
  height: 36px;
  font-size: 36px;
  color: #ffffff;
  background-color: transparent;
  border-radius: 50%;
  border: 1px solid #ffffff;
  cursor: pointer;
  transform: ${({ isFormOpen }) =>
    isFormOpen ? 'rotate(135deg)' : 'ratate(0)'};
  transition: transform 300ms ease-in-out, box-shadow 300ms ease-in-out,
    text-shadow 300ms ease-in-out;

  text-shadow: 2px 2px 2px black;
  box-shadow: 2px 2px 2px black;
  &:hover {
    box-shadow: -2px -2px 2px black;
    text-shadow: -2px -2px 2px black;
  }
`;

const Counter = styled.p`
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 12px;
  width: 100%;

  text-align: center;
  background: linear-gradient(
    360deg,
    rgb(0, 40, 70) 50%,
    rgb(255, 115, 115),
    rgb(255, 175, 123)
  );
  border-top-left-radius: 30%;
  border-top-right-radius: 30%;
`;

export { Title, Button, Wrapper, Counter };
