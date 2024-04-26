import { CardGroup } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import Repo from './Repo';

const ReposResults = ({ results }) => {
  return (
    <CardGroup itemsPerRow={3}>
      {results.map((currentResult) => (
        <Repo key={currentResult.id} {...currentResult} />
      ))}
    </CardGroup>
  );
};

ReposResults.propTypes = {
  // un tableau qui contient des objets
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ReposResults;
