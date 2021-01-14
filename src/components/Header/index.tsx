import React from 'react';
import { Container, HeaderTitle, HeaderDescription } from './styles';

const Header: React.FC = ({ children }) => {
  return (
    <Container>
      <HeaderTitle>VUTTR</HeaderTitle>
      <HeaderDescription>Very Userful Tools to Remember</HeaderDescription>
    </Container>
  );
};

export default Header;
