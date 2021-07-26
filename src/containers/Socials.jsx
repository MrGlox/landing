import React from 'react';

import { Button, Icon, Mail } from 'components/atoms';
import { Socials as SocialsComponent } from 'components/molecules';

import Twitter from 'images/twitter.svg';
import Github from 'images/github.svg';

const Socials = () => (
  <SocialsComponent>
    <li>
      <Mail as="a" href="mailto:contact@morgan-leroux.com">
        <span>contact</span>@<span>thisdomain</span>
      </Mail>
    </li>
    <li>
      <Button
        href="https://twitter.com/MisterGlox"
        target="_blank"
        rel="noopener noreferrer">
        <Icon as={Twitter} />
      </Button>
    </li>
    <li>
      <Button
        href="https://github.com/MrGlox"
        target="_blank"
        rel="noopener noreferrer">
        <Icon as={Github} />
      </Button>
    </li>
  </SocialsComponent>
);

export default Socials;
