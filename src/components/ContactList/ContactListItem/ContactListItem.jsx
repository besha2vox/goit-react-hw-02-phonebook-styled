import {
  ListItem,
  ListText,
  ListButton,
  ButtonList,
} from './ContactListItem.styled';
import { AiOutlineUserDelete, AiOutlineEdit } from 'react-icons/ai';
import { RiContactsLine } from 'react-icons/ri';

const ContactListItem = ({ id, name, number, editContact, removeContact }) => {
  return (
    <ListItem>
      <RiContactsLine />
      <div>
        <ListText>{name}</ListText>
        <ListText>{number}</ListText>
      </div>
      <ButtonList>
        <li>
          <ListButton data-action="edit" onClick={editContact}>
            <AiOutlineEdit />
          </ListButton>
        </li>
        <li>
          <ListButton onClick={removeContact}>
            <AiOutlineUserDelete />
          </ListButton>
        </li>
      </ButtonList>
    </ListItem>
  );
};

export default ContactListItem;
