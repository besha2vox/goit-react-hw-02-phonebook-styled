import styled from '@emotion/styled';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;

  svg {
    width: 32px;
    height: 32px;
  }
`;

const ListText = styled.p`
  margin-left: 20px;
`;

const ButtonWrapper = styled.ul`
  margin-left: auto;
  display: flex;
  gap: 8px;
`;

const ListButton = styled.button`
  color: #ffffff;
  background-color: transparent;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  background-repeat: no-repeat;
  background-size: cover;
  border: none;

  box-shadow: 2px 2px 4px #000000;
  transition: box-shadow 300ms ease-in-out;

  width: 40px;
  height: 40px;
  & svg {
    width: 28px;
    height: 28px;
  }

  &:hover {
    box-shadow: -2px -2px 4px #000000;
  }
`;

export { List, ListItem, ListText, ListButton, ButtonWrapper };
