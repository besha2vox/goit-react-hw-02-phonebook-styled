import React, { Component } from 'react';
import shortid from 'shortid';
import {
  Title,
  ButtonAdd,
  Wrapper,
  Counter,
  EmptyList,
  ButtonSearch,
} from './App.styled';
import Container from './Container';
import Form from './Form';
import ContactList from './ContactList';
import SearchForm from './SerchForm/SerchForm';
import { AiOutlineUserAdd, AiOutlineSearch } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    isFormOpen: false, // for open/close form
    isSearchOpen: false, // for open/close search input
    selectedContact: {
      // for edit contact
      name: '',
      number: '',
    },
    formEvent: '', // get oneOf['add', 'edit'] to perform the appropriate function edit or add
  };

  //----------| React Lifecycle Methods

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (!parsedContacts) return;

    this.setState({
      contacts: parsedContacts,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const stringifyContacts = JSON.stringify(this.state.contacts);
    if (this.state.contacts !== prevState.contacts)
      localStorage.setItem('contacts', stringifyContacts);
  }

  // ----------|SORT
  sortContacts = () => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts].sort((a, b) =>
        a.name.localeCompare(b.name)
      ),
    }));
  };

  // ----------|ADD
  addContact = contact => {
    contact.id = shortid.generate();
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
      isFormOpen: false,
    }));
    this.sortContacts();
  };

  isContains = contactName =>
    this.state.contacts.some(({ name }) => name === contactName);

  // ----------|REMOVE
  removeContact = idContact => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== idContact),
    }));
  };

  // ----------|EDIT
  selectContact = (idContact, formEvent) => {
    this.setState({
      selectedContact: this.state.contacts.find(({ id }) => id === idContact),
      isFormOpen: true,
      formEvent: formEvent,
    });
  };

  editContact = editedContact => {
    this.setState(({ contacts, selectedContact }) => ({
      contacts: contacts.map(contact => {
        if (contact.id !== selectedContact.id) return contact;
        return { ...contact, ...editedContact };
      }),
      isFormOpen: false,
    }));
    this.sortContacts();
  };

  // ----------|SEARCH
  filterContacts = () => {
    const { contacts, filter } = this.state;
    if (!filter) {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  // ----------|Hendlers
  hendleChange = filterWord => {
    this.setState({ filter: filterWord.toLowerCase() });
  };

  hendleToggleForm = e => {
    this.setState({
      isFormOpen: !this.state.isFormOpen,
      isSearchOpen: this.state.isSearchOpen
        ? !this.state.isSearchOpen
        : this.state.isSearchOpen,
      formEvent: e.currentTarget.dataset.action,
      selectedContact: INITIAL_STATE,
    });
  };

  hendleToggleSearch = () => {
    this.setState({
      isSearchOpen: !this.state.isSearchOpen,
      isFormOpen: this.state.isFormOpen
        ? !this.state.isFormOpen
        : this.state.isFormOpen,
    });
  };

  render() {
    const { isFormOpen, isSearchOpen, formEvent, filter, selectedContact } =
      this.state;
    const {
      isContains,
      removeContact,
      editContact,
      addContact,
      selectContact,
      hendleToggleSearch,
      hendleChange,
    } = this;
    const contacts = this.filterContacts();

    return (
      <Container>
        <Wrapper isFormOpen={isFormOpen}>
          <Title>PhoneBook</Title>
          <ButtonAdd
            data-action="add"
            isFormOpen={isFormOpen}
            onClick={this.hendleToggleForm}
          >
            {isFormOpen ? <MdClose /> : <AiOutlineUserAdd />}
          </ButtonAdd>
          {isFormOpen && (
            <Form
              isContains={isContains}
              selectedContact={selectedContact}
              editContact={editContact}
              formEvent={formEvent}
              onSubmit={addContact}
            />
          )}
        </Wrapper>
        {contacts.length ? (
          <ContactList
            editContact={selectContact}
            removeContact={removeContact}
            contacts={contacts}
          />
        ) : (
          <EmptyList>
            {filter.length < 1 ? 'Contact list is empty' : 'Contact not found'}
          </EmptyList>
        )}
        <Counter>
          <p>{contacts.length} contacts was faunded</p>
          <ButtonSearch onClick={hendleToggleSearch}>
            {isSearchOpen ? <MdClose /> : <AiOutlineSearch />}
          </ButtonSearch>
        </Counter>
        {isSearchOpen && <SearchForm onChange={hendleChange} />}
      </Container>
    );
  }
}

export default App;
