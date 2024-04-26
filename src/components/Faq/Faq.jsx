import React, { Component } from 'react';
import {
  AccordionTitle,
  AccordionContent,
  Accordion,
  Icon,
} from 'semantic-ui-react';

export default class Faq extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <Accordion>
        <AccordionTitle
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />A quoi ça sert ?
        </AccordionTitle>
        <AccordionContent active={activeIndex === 0}>
          <p>
            Cette application permet de trouver une liste de dépôts GitHub pour
            un critère donné.
          </p>
        </AccordionContent>

        <AccordionTitle
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          Comment faire une recherche ?
        </AccordionTitle>
        <AccordionContent active={activeIndex === 1}>
          <p>
            Sur la page recherche, complétez le champ de recherche et valider la
            recherche.
          </p>
        </AccordionContent>

        <AccordionTitle
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          Puis-je chercher n'importe quel terme ?
        </AccordionTitle>
        <AccordionContent active={activeIndex === 2}>
          <p>Oui, c'est fou.</p>
        </AccordionContent>
      </Accordion>
    );
  }
}
