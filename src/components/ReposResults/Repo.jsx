import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Image,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Repo = ({ name, description, owner }) => {
  return (
    <Card>
      <Image src={owner.avatar_url} wrapped ui={false} />
      <CardContent>
        <CardHeader>{name}</CardHeader>
        <CardMeta>{owner.login}</CardMeta>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

Repo.propTypes = {
  name: PropTypes.string.isRequired,
  // la description n'est pas obligatoire pour les repositories Github
  description: PropTypes.string,
  owner: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
  }).isRequired,
};

Repo.defaultProps = {
  description: '',
};

export default Repo;
