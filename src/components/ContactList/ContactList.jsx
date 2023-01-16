import {
  List,
  ListItem,
  ListText,
  ListButton,
  ButtonWrapper,
} from './ContactList.styled';

const ContactList = ({ contacts, removeContact, editContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ListItem id={id} key={id}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3237/3237472.png"
            alt="profile"
          />
          <div>
            <ListText>{name}</ListText>
            <ListText>{number}</ListText>
          </div>
          <ButtonWrapper>
            <ListButton
              data-action="edit"
              onClick={editContact}
              backgroundImage="https://cdn-icons-png.flaticon.com/512/1057/1057097.png"
            />
            <ListButton
              onClick={removeContact}
              backgroundImage="https://cdn-user-icons.flaticon.com/88698/88698755/1673885493236.svg?token=exp=1673886401~hmac=8708c62c68dcdf150fef15de3b28df06"
            />
          </ButtonWrapper>
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;
