import { Message as MessageSemantic } from 'semantic-ui-react';

import PropTypes from 'prop-types';

const Message = ({ nbResults }) => {
  return (
    <MessageSemantic>
      La recherche a donné {nbResults} résultats
    </MessageSemantic>
  );
};

Message.propTypes = {
  nbResults: PropTypes.number.isRequired,
};

export default Message;
