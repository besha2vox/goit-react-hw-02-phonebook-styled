import styled from '@emotion/styled';

const ContactForm = styled.form`
  position: absolute;
  z-index: -1;

  bottom: 1px;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 15px;

  transform: translateY(100%);

  width: 100%;

  background: inherit;

  border-bottom-left-radius: 30%;
  border-bottom-right-radius: 30%;
  animation: slide 500ms ease;

  @keyframes slide {
    0% {
      transform: translateY(-100%);
    }

    100% {
      transform: translateY(100%);
    }
  }
`;

const ContactLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 22px;
  font-weight: semibold;
`;

const ContactInput = styled.input`
  width: 358px;
  padding: 4px;
  font-size: 18px;
`;

const ContactButton = styled.button`
  padding: 5px 10px;
  cursor: pointer;
  font-size: 18px;
  width: fit-content;
  align-self: center;
  border-radius: 50px;
  border: 1px solid #ffffff;
  color: inherit;
  background: inherit;
  transition: box-shadow 300ms ease-in-out, text-shadow 300ms ease-in-out;

  text-shadow: 1px 1px 2px black;
  box-shadow: 1px 1px 2px black;
  &:hover {
    box-shadow: -1px -1px 2px black;
    text-shadow: -1px -1px 2px black;
  }
`;

export { ContactButton, ContactForm, ContactLabel, ContactInput };
