import styled from '@emotion/styled';

const InputWrapper = styled.div`
  padding: 20px 5px 0;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  transform: translateY(-120%);
  display: flex;
  justify-content: center;

  animation: slideSearch 500ms ease;

  @keyframes slideSearch {
    0% {
      transform: translateY(-20%);
    }

    100% {
      transform: translateY(-120%);
    }
  }
`;

export { InputWrapper };
