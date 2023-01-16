import React, { Component } from 'react';
import {
  ContactButton,
  ContactForm,
  ContactLabel,
  ContactInput,
} from './Form.styled';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class Form extends Component {
  state = INITIAL_STATE;

  hendleChange = e => {
    const optionKey = e.currentTarget.name;
    const value = e.currentTarget.value;
    this.setState({ [optionKey]: value });
  };

  reset() {
    this.setState({ ...INITIAL_STATE });
  }

  hendleSubmit = e => {
    e.preventDefault();
    const { formEvent, editContact, onSubmit } = this.props;
    if (formEvent === 'add') onSubmit(this.state);
    if (formEvent === 'edit') editContact(this.state);
    this.reset();
  };

  render() {
    const { name, number } = this.state;
    const { formEvent } = this.props;

    return (
      <ContactForm data-action={formEvent} onSubmit={this.hendleSubmit}>
        <ContactLabel>
          Full Name:
          <ContactInput
            onChange={this.hendleChange}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </ContactLabel>
        <ContactLabel>
          Phone Number:
          <ContactInput
            onChange={this.hendleChange}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </ContactLabel>
        <ContactButton>{formEvent} contact</ContactButton>
      </ContactForm>
    );
  }
}

export default Form;
