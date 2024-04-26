import { Menu as MenuSemantic } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const Menu = () => (
  <MenuSemantic>
    <MenuSemantic.Item as={NavLink} to="/">
      Recherche
    </MenuSemantic.Item>
    <MenuSemantic.Item as={NavLink} to="/faq">
      FAQ
    </MenuSemantic.Item>
  </MenuSemantic>
);

export default Menu;
