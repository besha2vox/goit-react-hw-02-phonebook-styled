import React, { Component } from 'react';
import shortid from 'shortid';
import contacts from '../data/data.json';
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
    contacts: contacts,
    filterWord: '',
    isFormOpen: false, // for open/close form
    isSearchOpen: false, // for open/close search input
    selectContact: {
      // for edit contact
      name: '',
      number: '',
    },
    formEvent: '', // get oneOf['add', 'edit'] to perform the appropriate function edit or add
  };

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
    const isEncludes = this.state.contacts.some(
      stateContact => stateContact.name === contact.name
    );
    if (isEncludes) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }

    contact.id = shortid.generate();
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
      isFormOpen: false,
    }));
    this.sortContacts();
  };

  // ----------|REMOVE
  removeContact = e => {
    const id = e.currentTarget.id;
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  // ----------|EDIT
  selectContact = e => {
    const id = e.currentTarget.id;
    this.setState({
      selectContact: this.state.contacts.find(contact => contact.id === id),
      isFormOpen: true,
      formEvent: e.currentTarget.dataset.action,
    });
  };

  editContact = editedContact => {
    this.setState(({ contacts, selectContact }) => ({
      contacts: contacts.map(contact => {
        if (contact.id !== selectContact.id) return contact;
        return { ...contact, ...editedContact };
      }),
      isFormOpen: false,
    }));
    this.sortContacts();
  };

  // ----------|SEARCH
  filterContacts = () => {
    const { contacts, filterWord } = this.state;
    if (!filterWord) {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterWord)
    );
  };

  // ----------|Hendlers
  hendleChange = e => {
    const value = e.currentTarget.value;
    this.setState({ filterWord: value.toLowerCase() });
  };

  hendleToggleForm = e => {
    this.setState({
      isFormOpen: !this.state.isFormOpen,
      isSearchOpen: this.state.isSearchOpen
        ? !this.state.isSearchOpen
        : this.state.isSearchOpen,
      formEvent: e.currentTarget.dataset.action,
      selectContact: INITIAL_STATE,
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
    const { isFormOpen, isSearchOpen, formEvent, filterWord, selectContact } =
      this.state;
    const contacts = this.filterContacts();
    const contactsCount = contacts.length;

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
              selectContact={selectContact}
              editContact={this.editContact}
              formEvent={formEvent}
              onSubmit={this.addContact}
            />
          )}
        </Wrapper>
        {contacts.length ? (
          <ContactList
            editContact={this.selectContact}
            removeContact={this.removeContact}
            contacts={contacts}
          />
        ) : (
          <EmptyList>
            {filterWord.length < 1
              ? 'Contact list is empty'
              : 'Contact not found'}
          </EmptyList>
        )}
        <Counter>
          <p>{contactsCount} contacts was faunded</p>
          <ButtonSearch onClick={this.hendleToggleSearch}>
            {isSearchOpen ? <MdClose /> : <AiOutlineSearch />}
          </ButtonSearch>
        </Counter>
        {isSearchOpen && <SearchForm onChange={this.hendleChange} />}
      </Container>
    );
  }
}

export default App;
