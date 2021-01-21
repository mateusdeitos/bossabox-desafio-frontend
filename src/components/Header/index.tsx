import React from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useDarkMode } from '../../hooks/useDarkMode';
import Button from '../Button';
import {
  Container,
  TitleContainer,
  HeaderTitle,
  HeaderDescription,
} from './styles';

const Header: React.FC = () => {
  const { isDarkMode, toggleColorMode } = useDarkMode();
  return (
    <Container>
      <TitleContainer>
        <HeaderTitle>VUTTR</HeaderTitle>
        <Button
          styleProps={{
            type: isDarkMode ? 'success' : 'neutral',
            order: 'terciary',
            width: 'normal',
          }}
          onClick={toggleColorMode}
        >
          {isDarkMode ? <FiSun /> : <FiMoon />}
          {isDarkMode ? 'Light mode' : 'Dark mode'}
        </Button>
      </TitleContainer>
      <HeaderDescription>Very Useful Tools to Remember</HeaderDescription>
    </Container>
  );
};

export default Header;
