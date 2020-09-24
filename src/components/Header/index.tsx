import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

import { Header, Icons } from './styles';

import logoMTG from '../../assets/MTG_logo.png';

const HeaderMain: React.FC = () => {
  const LinkedinLink = 'https://www.linkedin.com/in/miguel-pombo/';
  const GithubLink = 'http://github.com/Wallghost';

  return (
    <Header>
      <img src={logoMTG} alt="Magic Logo" />

      <Icons>
        <a href={`${GithubLink}`} target="blank">
          <FaGithub size={30} />
        </a>
        <a href={`${LinkedinLink}`} target="blank">
          <FaLinkedinIn size={30} />
        </a>
      </Icons>
    </Header>
  );
};

export default HeaderMain;
