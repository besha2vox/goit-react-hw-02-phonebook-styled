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

  img {
    width: 40px;
    height: 40px;
  }
`;

const ListText = styled.p`
  margin-left: 20px;
`;

const ButtonWrapper = styled.div`
  margin-left: auto;
`;

const ListButton = styled.button`
  margin-left: 8px;
  background-color: transparent;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  border: none;

  width: 40px;
  height: 40px;

  &:hover {
    box-shadow: 2px 2px 4px #000000;
  }
`;

export { List, ListItem, ListText, ListButton, ButtonWrapper };
