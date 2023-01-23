import PropTypes from 'prop-types';
import { List } from './ContactList.styled';
import ContactListItem from './ContactListItem';

const ContactList = ({ contacts, removeContact, editContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          d={id}
          name={name}
          number={number}
          removeContact={() => removeContact(id)}
          editContact={() => editContact(id, 'edit')}
        />
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
