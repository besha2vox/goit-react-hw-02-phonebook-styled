import { InputWrapper } from './SerchForm.styled';
import { ContactInput } from 'components/Form/Form.styled';
import PropTypes from 'prop-types';

const SearchForm = ({ onChange }) => {
  return (
    <InputWrapper>
      <ContactInput
        autoFocus
        onChange={e => onChange(e.target.value)}
        placeholder="Enter name for search..."
      />
    </InputWrapper>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  onChange: PropTypes.func.isRequired,
};
