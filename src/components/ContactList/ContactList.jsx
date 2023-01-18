import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  ListText,
  ListButton,
  ButtonList,
} from './ContactList.styled';
import { AiOutlineUserDelete, AiOutlineEdit } from 'react-icons/ai';
import { RiContactsLine } from 'react-icons/ri';

const ContactList = ({ contacts, removeContact, editContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <RiContactsLine />
          <div>
            <ListText>{name}</ListText>
            <ListText>{number}</ListText>
          </div>
          <ButtonList>
            <li>
              <ListButton id={id} data-action="edit" onClick={editContact}>
                <AiOutlineEdit />
              </ListButton>
            </li>
            <li>
              <ListButton id={id} onClick={removeContact}>
                <AiOutlineUserDelete />
              </ListButton>
            </li>
          </ButtonList>
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
