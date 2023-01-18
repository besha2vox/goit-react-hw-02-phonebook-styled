import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  ListText,
  ListButton,
  ButtonWrapper,
} from './ContactList.styled';
import { AiOutlineUserDelete, AiOutlineEdit } from 'react-icons/ai';
import { RiContactsLine } from 'react-icons/ri';

const ContactList = ({ contacts, removeContact, editContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ListItem id={id} key={id}>
          <RiContactsLine />
          <div>
            <ListText>{name}</ListText>
            <ListText>{number}</ListText>
          </div>
          <ButtonWrapper>
            <ListButton data-action="edit" onClick={editContact}>
              <AiOutlineUserDelete />
            </ListButton>
            <ListButton onClick={removeContact}>
              <AiOutlineEdit />
            </ListButton>
          </ButtonWrapper>
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;

ContactList.defaultProps = {
  contacts: [],
};

ContactList.propTypes = {
  editContact: PropTypes.func.isRequired,
  removeContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};
