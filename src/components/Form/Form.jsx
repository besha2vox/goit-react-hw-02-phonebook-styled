import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
  state = {
    name: this.props.selectContact.name,
    number: this.props.selectContact.number,
  };

  static defaultProps = { form: 'add' };

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
    if (formEvent === 'add') {
      onSubmit(this.state);
    }
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
            autoFocus
            placeholder="Enter contact name..."
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
            placeholder="Enter contact number..."
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

Form.propTypes = {
  formEvent: PropTypes.oneOf(['add', 'edit']),
  onSubmit: PropTypes.func.isRequired,
  editContact: PropTypes.func,
  selectContact: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
  }),
};
