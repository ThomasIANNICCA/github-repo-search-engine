import { Input, Form, FormField, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const SearchBar = ({ searchValue, setSearchValue, handleSubmit }) => {
  return (
    <Segment>
      <Form
        onSubmit={() => {
          // console.log('submit');
          handleSubmit();
        }}
      >
        <FormField>
          <Input
            icon="search"
            iconPosition="left"
            placeholder="Rechercher..."
            value={searchValue}
            onChange={(event) => {
              setSearchValue(event.target.value);
            }}
          />
        </FormField>
      </Form>
    </Segment>
  );
};

SearchBar.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
