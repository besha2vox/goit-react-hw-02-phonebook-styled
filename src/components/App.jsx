import React, { Component } from 'react';
import shortid from 'shortid';
import contacts from '../data/data.json';
import { Title, Button, Wrapper, Counter } from './App.styled';
import Container from './Container';
import Form from './Form';
import ContactList from './ContactList';

class App extends Component {
  state = {
    contacts: contacts,
    filter: '',
    isFormOpen: false,
    formEvent: '',
  };

  addContact = contact => {
    contact.id = shortid.generate();
    this.setState({ isFormOpen: false });
    this.setState(prevState => ({
      contacts: [...this.state.contacts, contact],
    }));
  };

  removeContact = e => {
    const id = e.currentTarget.closest('li').id;
    this.setState(prevState => ({
      contacts: [...prevState.contacts.filter(contact => contact.id !== id)],
    }));
  };

  editContact = contact => {
    // // const id = e.currentTarget.closest('li').id;
    // const contactFinder = this.state.contacts.find(
    //   contact => contact.id === id
    // );
    // contact.id = id;
    // this.setState({ isFormOpen: true });
    // this.removeContact(e);
    // this.setState(prevState => {
    //   contacts: [...this.state.contacts, contact];
    // });
  };

  // openEditForm = ({ name, number }) => {};

  hendleToggleForm = e => {
    this.setState({
      isFormOpen: !this.state.isFormOpen,
      formEvent: e.currentTarget.dataset.action,
    });
  };

  render() {
    const { isFormOpen, contacts, formEvent } = this.state;
    const contactsCount = contacts.length;

    return (
      <Container>
        <Wrapper isFormOpen={isFormOpen}>
          <Title>Phone Book</Title>
          <Button
            data-action="add"
            isFormOpen={isFormOpen}
            onClick={this.hendleToggleForm}
          >
            +
          </Button>
          {isFormOpen && (
            <Form
              editContact={this.editContact}
              formEvent={formEvent}
              onSubmit={this.addContact}
            />
          )}
        </Wrapper>
        <ContactList
          editContact={this.hendleToggleForm}
          removeContact={this.removeContact}
          contacts={contacts}
        />
        <Counter>{contactsCount} contacts was faunded</Counter>
      </Container>
    );
  }
}

export default App;
