import { InputWrapper } from './SerchForm.styled';
import { ContactInput } from 'components/Form/Form.styled';
import PropTypes from 'prop-types';

const SearchForm = ({ onChange }) => {
  return (
    <InputWrapper>
      <ContactInput
        autoFocus
        onChange={onChange}
        placeholder="Enter name for search..."
      />
    </InputWrapper>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  onChange: PropTypes.func.isRequired,
};
